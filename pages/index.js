import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import classNames from "classnames/bind";
import Sidebar from "../components/Sidebar/Sidebar";
import Timeline from "../components/Timeline/Timeline";

let cs = classNames.bind(styles);

export default function Home() {
  const [initialized, initialize] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      initialize(true);
    }, 800);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolas Ocampo Product Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav>
        <Sidebar />
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div
            className={cs("hero__block", { "hero__block--down": initialized })}
          >
            <p className={styles.hero__label}>My name is</p>
            <h1 className={styles.hero__heading}>Nicolas Ocampo</h1>
          </div>
          <div
            className={cs("hero__block", { "hero__block--down": initialized })}
          >
            <p className={styles.hero__label}>I am a</p>
            <h2 className={styles.hero__heading}>Product Designer</h2>
          </div>
        </section>
        <section className={styles.section}>
          <p className="section__header">
            My career has been focused on three main areas
          </p>
          <ul>
            <li>Product management</li>
            <li>Design</li>
            <li>Coding</li>
          </ul>
        </section>
        <section className={styles.section}>
          <p className={styles.section__header}>
            I have done work in a variety of settings
          </p>
          <ul>
            <li>SaaS products</li>
            <li>Startups</li>
            <li>Agencies</li>
          </ul>
        </section>
        <Timeline />
      </main>
    </div>
  );
}
