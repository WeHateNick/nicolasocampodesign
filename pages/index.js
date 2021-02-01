import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";
import Hero from "../components/Hero/Hero";
import HighlightBlock from "../components/HighlightBlock/HighlightBlock";
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
          <HighlightBlock type="skills" />
          <HighlightBlock type="experience" />
          <Timeline />
        </main>
      </Layout>
    </div>
  );
}
