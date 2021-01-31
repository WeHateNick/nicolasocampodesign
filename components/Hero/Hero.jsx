import { useEffect, useState } from "react";
import styles from "./Hero.module.scss";
import classNames from "classnames/bind";

let cs = classNames.bind(styles);

export default function Home() {
  const [initialized, initialize] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      initialize(true);
    }, 800);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.hero__block__wrapper}>
        <div
          className={cs("hero__block", "hero__block--1", {
            "hero__block--down": initialized
          })}
        >
          <p className={styles.hero__label}>My name is</p>
          <h1 className={styles.hero__heading}>Nicolas Ocampo</h1>
        </div>
      </div>
      <div className={styles.hero__block__wrapper}>
        <div
          className={cs("hero__block", "hero__block--2", {
            "hero__block--down": initialized
          })}
        >
          <p className={styles.hero__label}>I am a</p>
          <h2 className={styles.hero__heading}>Product Designer</h2>
        </div>
      </div>
    </section>
  );
}
