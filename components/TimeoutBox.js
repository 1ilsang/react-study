import { useEffect, useRef, useState, useLayoutEffect } from "react";
import useTimeout from "../hooks/useTimeout";
import styles from "../styles/Home.module.css";

const TimeoutBox = () => {
  const interval = useRef();
  const [open, setOpen] = useState(false);

  const handleTimeout = () => {
    console.log("Time set!");
  };

  const [isReady, clear, reset] = useTimeout(handleTimeout, 3000);

  useEffect(() => {
    interval.current = setInterval(() => {
      const readyState = isReady();
      console.log("isReady?", readyState);
      setOpen(readyState);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    clearInterval(interval.current);
  }, [open]);

  return (
    <div className={styles.card}>
      <p>useTimeout</p>
      <div>{open ? ">>> OPEN <<<" : "...WAIT..."}</div>
      <button onClick={reset}>reset</button>
    </div>
  );
};

export default TimeoutBox;
