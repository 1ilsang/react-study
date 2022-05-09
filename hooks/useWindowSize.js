import { useEffect, useRef, useState } from "react";
import { on, off } from "./common";

const useWindowSize = (initWidth = Infinity, initHeight = Infinity) => {
  const [state, setState] = useState({
    width: initWidth,
    height: initHeight,
  });

  useEffect(() => {
    if (!window) return;

    setState({ width: window.innerWidth, height: window.innerHeight });

    const handler = () => {
      setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    on(window, "resize", handler);

    return () => {
      off(window, "resize", handler);
    };
  }, []);

  return state;
};

export default useWindowSize;
