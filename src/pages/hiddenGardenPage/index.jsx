import { Top } from "./../commercialsPage/top/top";
import { useEffect, useState } from "react";
import { Project } from "../commercialsPage/project/project";
import { ProjectService } from "../../services";

import styles from "./../commercialsPage/commercialsPage.module.css";
import { useSelector } from "react-redux";

export const HiddenGardenPage = () => {
  const [projects, setProjects] = useState([]);
  const pinCode = useSelector((state) => state.pinCode.pinCode);

  useEffect(() => {
    const projects = ProjectService.getHiddenProjects(pinCode);
    projects.then((res) => {
      setProjects(res);
    });
  }, [pinCode]);

  return (
    <div className={styles.bg}>
      <Top countProjects={projects.length} active={2} />
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
    </div>
  );
};
