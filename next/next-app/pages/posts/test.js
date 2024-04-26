import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Test() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Posts</title>
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to POSTS page.
          </h1>
  
          <div className={styles.grid}>
            <div className={styles.card}>
              <Link 
                href="/posts/1"
                className={styles.card}
              ><h3>Post 1</h3></Link>
            </div>
            <div className={styles.card}>
              <Link 
                href='/posts/2'
              ><h3>Post 2</h3></Link>
            </div>
          </div>
        </main>
  
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    )
  }
  