import { useState, useRef, useEffect } from "react";
import { BracketSvg } from "../../../assets/svg";
import { Footer, Net } from "../../../components";
import { useDispatch, useSelector } from "react-redux";
import { ProjectService } from "../../../services";
import { useNavigate } from "react-router-dom";

import styles from "./HiddenGarden.module.css";
import { setPinCode } from "../../../redux/pinCodeSlice/pinCodeSlice";

export const HiddenGarden = ({ setIsOpen, isOpen, close }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const [error, setError] = useState(true);
  const bg = useSelector((state) => state.bg.bg);
  const navigate = useNavigate();
  const inputRefs = useRef([]);
  const dispatch = useDispatch();

  const handleChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Переход к следующему инпуту, если введена цифра
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleBackspace = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const checkCode = () => {
    setError(false);
    if (code.every((num) => num !== "")) {
      const enteredCode = code.join("");
      const expectedCode = ProjectService.getHiddenProjects(enteredCode);
      expectedCode.then((res) => {
        if (res) {
          dispatch(setPinCode(code.join("")));
          console.log(res);
          setIsOpen && setIsOpen(false);
          setError(false);
          navigate("/hidden_garden");
        } else {
          setError(true);
        }
      });
    }
  };
  useEffect(() => {
    checkCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [code]);

  return (
    <div className={`${styles.bg_img} ${isOpen && styles.open}`}>
      {bg && (
        <video autoPlay playsInline loop muted className={styles.bg}>
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className={styles.bg_container}>
        {/* <div className={styles.animation}></div> */}

        <Net />
        {close !== "none" && (
          <div
            className={styles.circle}
            onClick={() => {
              setIsOpen(false);
              console.log(1);
            }}
          >
            <img src="/close.svg" alt="" />
          </div>
        )}
        <div
          className={styles.text_wrappper}
          style={close === "none" ? { marginTop: 0 } : {}}
        >
          <div className={styles.text}>
            <p className={styles.error + " " + (error && styles.visible)}>
              Incorrect code
            </p>
            <div className={styles.codes_bg}>
              <div className={styles.codes}>
                {code.map((num, index) => (
                  <input
                    key={index}
                    className={styles.num + " " + (error && styles.red)}
                    type="text"
                    value={num}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleBackspace(index, e)}
                    ref={(el) => (inputRefs.current[index] = el)}
                    maxLength={1}
                  />
                ))}
              </div>
            </div>
            <div className={styles.link} onClick={checkCode}>
              <BracketSvg />
              <span>enter code</span>
              <BracketSvg className={styles.left} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
