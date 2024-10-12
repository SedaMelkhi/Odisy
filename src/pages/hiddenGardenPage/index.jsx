import { useState, useRef, useEffect } from "react";
import { BracketSvg } from "../../assets/svg";
import { Footer, Net } from "../../components";

import styles from "./HiddenGardenPage.module.css";

export const HiddenGardenPage = ({ setIsOpen, isOpen }) => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputRefs = useRef([]);

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

  useEffect(() => {
    if (code.every((num) => num !== "")) {
      const enteredCode = code.join("");
      const expectedCode = "1234"; // Это значение будет приходить с сервера
      if (enteredCode === expectedCode) {
        alert("Код верный!");
      } else {
        alert("Код неверный.");
      }
    }
  }, [code]);

  return (
    <div className={`${styles.bg_img} ${isOpen && styles.open}`}>
      {/* <div className={styles.animation}></div> */}
      <Footer />
      <div className={styles.bg}>
        <Net />
        <div
          className={styles.circle}
          onClick={() => {
            setIsOpen(false);
            console.log(1);
          }}
        >
          <img src="/close.svg" alt="" />
        </div>
        <div className={styles.text}>
          <p className={styles.error}>Incorrect code</p>
          <div className={styles.codes_bg}>
            <div className={styles.codes}>
              {code.map((num, index) => (
                <input
                  key={index}
                  className={styles.num}
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
          <div className={styles.link}>
            <BracketSvg />
            <span>enter code</span>
            <BracketSvg className={styles.left} />
          </div>
        </div>
      </div>
    </div>
  );
};
