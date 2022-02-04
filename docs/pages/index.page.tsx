import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Component Challenges</title>
        <meta
          name="description"
          content="Are you ready to prove you can build any component? Learn new web APIs and tricks along the way."
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Component Challenges</h1>

        <p className={styles.description}>
          Select your challenge and practice some{" "}
          <code className={styles.code}>web development</code>
        </p>

        <div className={styles.grid}>
          <Link href="/challenges/1">
            <a className={styles.card}>
              <h2>Challenge 1 &rarr;</h2>
              <p>Write a simple input following the design.</p>
            </a>
          </Link>

          <a
            href="/component-challenges/challenges/component-challenge-1/component-challenge-1-react/index.html"
            className={styles.card}
          >
            <h2>Challenge 2 &rarr;</h2>
            <p>Use Web Audio API to write an audio player.</p>
          </a>
        </div>
      </main>

      <footer className="footer">
        <a href="https://carlosbaraza.com" target="_blank" rel="noopener noreferrer">
          <span>Built with </span>
          <span className="heart">❤️</span>
          <span> by @carlosbaraza</span>
        </a>
      </footer>

      <style jsx>{`
        .heart {
          padding-left: 0.3em;
          padding-right: 0.7em;
        }

        .footer {
          display: flex;
          flex: 1;
          padding: 2rem 0;
          border-top: 1px solid #eaeaea;
          justify-content: center;
          align-items: center;
          font-weight: bold;
        }

        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-grow: 1;
        }
      `}</style>
    </div>
  );
};

export default Home;
