/* eslint-disable react/jsx-no-target-blank */
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <title>Steve Kang | Go Links</title>
        <meta name="description" content="Steve's personal go links" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="Steve Kang | Go Links" />
        <meta property="og:title" content="Steve Kang | Go Links" />
        <meta property="og:url" content="https://go.stevejkang.com" />
        <meta property="og:description" content="Steve's personal go links" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Steve Kang | Go Links" />
        <meta name="twitter:url" content="https://go.stevejkang.com" />
        <meta name="twitter:description" content="Steve's personal go links" />
        <meta name="twitter:creator" content="@stevejkang_" />
        <meta name="twitter:site" content="@stevejkang_" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Steve Kang
        </h1>

        <p className={styles.description}>
        
        </p>

        <div className={styles.grid}>
          <a href="https://mailhide.io/e/0j4e5OLx" target="_blank" className={styles.card} rel="noreferrer">
            <h2>email(primary) &rarr;</h2>
          </a>

          <a href="https://mailhide.io/e/jiT828Xq" target="_blank" className={styles.card} rel="noreferrer">
            <h2>email(high priority) &rarr;</h2>
          </a>

          <a href="https://stevejkang.com" target="_blank" className={styles.card}>
            <h2>⛔️ homepage(en) &rarr;</h2>
          </a>

          <a href="https://stevejkang.io" target="_blank" className={styles.card}>
            <h2>🚧 pkm &rarr;</h2>
          </a>

          <a href="https://github.com/stevejkang" target="_blank" className={styles.card}>
            <h2>github &rarr;</h2>
          </a>

          <a href="https://www.linkedin.com/in/iam-stevejkang" target="_blank" className={styles.card}>
            <h2>linkedin &rarr;</h2>
          </a>

          <a href="https://juneyoung.io" target="_blank" className={styles.card}>
            <h2>blog(ko) &rarr;</h2>
          </a>

          <a href="https://medium.com/@stevejkang" target="_blank" className={styles.card}>
            <h2>medium &rarr;</h2>
          </a>

          <a href="https://www.instagram.com/stevejkang" target="_blank" className={styles.card}>
            <h2>instagram &rarr;</h2>
          </a>

          <a href="https://twitter.com/stevejkang_" target="_blank" className={styles.card}>
            <h2>twitter &rarr;</h2>
          </a>

          <a href="https://read.cv/stevejkang" target="_blank" className={styles.card}>
            <h2>readcv &rarr;</h2>
          </a>

          <a href="https://cal.com/stevejkang" target="_blank" className={styles.card}>
            <h2>reservation &rarr;</h2>
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
