import Link from 'next/link';
import Head from 'next/head';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Practice Next.js</title>
      </Head>
      <h1 className={styles.homePageTitle}>Hello World</h1>
    </div>
  );
}
