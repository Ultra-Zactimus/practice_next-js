import styles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href="/about">About</Link>
      <h1>Hello World</h1>
    </div>
  )
}
