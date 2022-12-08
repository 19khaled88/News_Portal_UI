import styles from '@/styles/Layout.module.css'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Nav from './Nav'
import TopHeader from './TopHeader'

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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@200&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css"
        />

        {/* <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
        <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/> */}
      </Head>
      <TopHeader />
      <Nav />
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
