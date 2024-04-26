import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()

    return (
      <div className={styles.container}>
        <Head>
          <title>Post {router.query.id}</title>
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to the post #{router.query.id}.
          </h1>
          This is post number {router.query.id}.
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
  