import { Top } from "./top/top";
import { useEffect, useState } from "react";
import { HiddenGarden } from "./hiddenGarden";
import { Project } from "./project/project";
import { ProjectService } from "../../services";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import styles from "./commercialsPage.module.css";

export const CommercialsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  const pinCode = useSelector((state) => state.pinCode.pinCode);
  const navigate = useNavigate();
  useEffect(() => {
    const projects = ProjectService.getPublishProjects();
    projects.then((res) => {
      setProjects(res);
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (pinCode) {
        navigate("/hidden_garden");
      } else {
        document.body.style.overflow = "hidden"; // Отключаем прокрутку
      }
    } else {
      document.body.style.overflow = "auto"; // Включаем прокрутку обратно при закрытии
    }
    return () => {
      document.body.style.overflow = "auto";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <div className={styles.bg}>
      <Top setIsOpen={setIsOpen} countProjects={projects.length} active={1} />
      <div className={styles.grid}>
        {projects.map(({ id, animated_cover, static_cover, title }) => (
          <Project
            animated_cover={animated_cover}
            key={id}
            static_cover={static_cover}
            title={title}
            projects={projects}
            id={id}
          />
        ))}
      </div>
      <HiddenGarden setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};
