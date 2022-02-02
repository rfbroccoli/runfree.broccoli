import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import Hero from "../components/hero";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Hero />
    </>
  );
}
