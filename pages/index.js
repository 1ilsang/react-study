import dynamic from "next/dynamic";

const ClickAwayBox = dynamic(() => import("../components/ClickAwayBox"));
const TimeoutBox = dynamic(() => import("../components/TimeoutBox"));
import useWindowSize from "../hooks/useWindowSize";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { width, height } = useWindowSize();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <p>width: {width}</p>
          <p>height: {height}</p>
          <ClickAwayBox />
          <TimeoutBox />
        </div>
      </main>
    </div>
  );
}
