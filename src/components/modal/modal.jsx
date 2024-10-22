import { CloseSvg, PauseSvg, PlaySvg } from "../../assets/svg";
import ReactPlayer from "react-player";
import { API_DOMAIN } from "../../services";
import { useRef, useState } from "react";

import styles from "./modal.module.css";

export const Modal = ({ video_file, closeModal }) => {
  const [playing, setPlaying] = useState(true); // Состояние воспроизведения
  const playerRef = useRef(null); // Ссылка на плеер

  // Функция переключения воспроизведения
  const togglePlay = () => {
    setPlaying(!playing);
  };

  // Функция, срабатывающая при завершении видео
  const handleEnded = () => {
    setPlaying(false); // Ставим на паузу и меняем кнопку на "Play"
  };

  return (
    <div className={styles.modal}>
      <div className={styles.close} onClick={closeModal}>
        <CloseSvg />
      </div>

      <div className={styles.play} onClick={togglePlay}>
        {playing ? <PauseSvg /> : <PlaySvg />}
      </div>
      <div className={styles.video}>
        <ReactPlayer
          ref={playerRef}
          playsinline={true}
          playing={playing}
          className="react-player"
          url={API_DOMAIN + video_file}
          width="100%"
          height="100dvh"
          controls={false}
          onEnded={handleEnded} // Событие по завершению видео
        />
      </div>
    </div>
  );
};
