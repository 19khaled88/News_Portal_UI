import styles from '@/styles/Layout.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'

export default function Layout({
  title,
  keywords,
  description,
  children,
  link,
}) {
  const pathRouter = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="icon" href={link} />
      </Head>
      <Header />
      {pathRouter.pathname === '/' && <Hero />}
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Sport news | find latest sport news',
  description: 'a website that brings you latest news about sports with',
  keywords: 'cricket, football, f1, tennis, banminton, golf',
}
