import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";
import Hero from "../components/Hero/Hero";
import Timeline from "../components/Timeline/Timeline";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nicolas Ocampo Product Design</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Sidebar />
        <main className={styles.main}>
          <Hero />
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
      </Layout>
    </div>
  );
}
