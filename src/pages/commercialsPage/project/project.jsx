import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Modal } from "../../../components/modal/modal";
import { API_DOMAIN } from "../../../services";

import styles from "./project.module.css";

export const Project = ({
  animated_cover,
  static_cover,
  title,
  projects,
  id,
}) => {
  const [video_file, setVideo_File] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const videoRef = useRef(null);
  const videoWrap = useRef(null);

  // Открытие модального окна и установка параметра в URL
  const toNavigate = (id) => {
    navigate(`?modal=${id}`);
  };

  // Закрытие модального окна и удаление параметра из URL
  const closeModal = () => {
    navigate("");
    setVideo_File(""); // Очищаем видеофайл при закрытии
  };

  useEffect(() => {
    const modalId = location.search.substring(7);
    if (modalId) {
      const video = projects.find((item) => item.id === +modalId);
      if (video) {
        setVideo_File(video.video_file);
        document.body.style.overflow = "hidden"; // Отключаем прокрутку
      }
    } else {
      document.body.style.overflow = "auto"; // Включаем прокрутку обратно при закрытии
    }

    // Возвращаем прокрутку при размонтировании компонента
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [location.search, projects]);

  useEffect(() => {
    // Только для мобильных устройств
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      const handleScroll = () => {
        if (videoRef.current) {
          const rect = videoWrap.current.getBoundingClientRect();
          const screenBottom = window.innerHeight;

          if (
            rect.bottom <= screenBottom &&
            rect.top >= window.innerHeight / 5
          ) {
            videoRef.current.play();
            videoRef.current.style.opacity = "1";
          } else {
            videoRef.current.pause();
            videoRef.current.style.opacity = "0";
          }
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <>
      {location.search.includes("?modal=") && (
        <Modal video_file={video_file} closeModal={closeModal} />
      )}
      <div
        className={styles.col}
        onClick={() => toNavigate(id)}
        ref={videoWrap}
      >
        <div className={styles.flex}>
          <div className={styles.number}>
            <span>V</span>
          </div>
          <div className={styles.marker}></div>
        </div>
        <div className={styles.project}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${API_DOMAIN + static_cover})` }}
          >
            {animated_cover && (
              <video
                ref={videoRef}
                autoPlay={window.matchMedia("(hover: hover)").matches}
                playsInline
                loop
                muted
                className={styles.animated_bg}
              >
                <source src={API_DOMAIN + animated_cover} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
          <div className={styles.name}>
            <div>{title}</div>
          </div>
        </div>
      </div>
    </>
  );
};
