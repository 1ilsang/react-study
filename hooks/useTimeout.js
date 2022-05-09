import { useReducer, useCallback, useEffect, useRef } from "react";

const useTimeout = (fn, ms = 0) => {
  const ready = useRef(false);
  const timeout = useRef();
  const callback = useRef(fn);

  const isReady = useCallback(() => ready.current, []);

  const reset = useCallback(() => {
    console.log("reset fire");
    ready.current = false;
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      ready.current = true;
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    ready.current = null;
    timeout.current && clearTimeout(timeout.current);
  }, []);

  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  useEffect(() => {
    reset();

    return clear;
  }, [ms]);

  return [isReady, clear, reset];
};

export default useTimeout;
