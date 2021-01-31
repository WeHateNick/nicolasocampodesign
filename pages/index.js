import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolas Ocampo Product Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <p>My name is</p>
        <h1 className={styles.title}>Nicolas Ocampo</h1>
        <p>I am a</p>
        <h2 className={styles.title}>Product Designer</h2>
        <section>
          <p>My career has been focused on three main areas</p>
          <ul>
            <li>Product management</li>
            <li>Design</li>
            <li>Coding</li>
          </ul>
        </section>
        <section>
          <p>I have done work in a variety of settings</p>
          <ul>
            <li>SaaS products</li>
            <li>Startups</li>
            <li>Agencies</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
