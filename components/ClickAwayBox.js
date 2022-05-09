import { useEffect, useRef, useState, useLayoutEffect } from "react";
import useClickAway from "../hooks/useClickAway";
import useUpdateEffect from "../hooks/useUpdateEffect";
import styles from "../styles/Home.module.css";

const InnerBox = ({ setIsOpen }) => {
  const ulRef = useRef();

  useClickAway(ulRef, (event) => {
    console.log("away!");
    setIsOpen(false);
  });

  return (
    <ul ref={ulRef}>
      <li>Hello, World!</li>
    </ul>
  );
};

const ClickAwayBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useLayoutEffect(() => {
  //   if (!window) return;
  //   console.log("[useLayoutEffect]", isOpen);
  // }, [isOpen]);

  useUpdateEffect(() => {
    console.log("[useUpdateEffect]", isOpen);
  }, [isOpen]);

  useEffect(() => {
    console.log("[useEffect]", isOpen);
  }, [isOpen]);

  return (
    <div className={styles.card}>
      <p>useClickAway</p>
      <input
        type={"text"}
        placeholder="focus here"
        onFocus={() => setIsOpen(true)}
      />
      {isOpen && <InnerBox setIsOpen={setIsOpen} />}
    </div>
  );
};

export default ClickAwayBox;
