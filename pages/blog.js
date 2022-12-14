import Layout from '@/components/Layout'
import { VERCEL_URL } from '@/config/BaseUrl'
import styles from '@/styles/blog.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useAnimation, useScroll } from 'framer-motion'
import { fetcher } from 'lib/api'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Blog({ newsResponse }) {
  const animation = useAnimation()
  const { ref, inView } = useInView()
  const { scrollY } = useScroll()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'tween',
          duration: 1,
          bounce: 0.3,
        },
      })
      AOS.init({
        // Global settings:
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,

        duration: 1000,
        delay: 0,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',
      })
    }
    if (!inView) {
      animation.start({ x: '-100vw' })
    }
    console.log('Viewed', inView)
  }, [inView])
  const func = (newsResponse) => {
    const array = []
    newsResponse.blogImageType.map((e, index) => {
      if (!e.image) {
        array.push(<p key={index}>{e}</p>)
      }
      if (e.image) {
        array.push(
          <img
            key={index}
            src={e.image}
            alt=" No Image"
            width="5%"
            style={{ borderRadius: '40px' }}
          />,
        )
      }
    })

    return array
  }
  return (
    <Layout>
      <div ref={ref} className={styles.blog}>
        <h1
          style={{ textAlign: 'center', fontWeight: '400', fontSize: '25px' }}
        >
          Use Our Compilation Of Most Famous Museums
        </h1>
        <p style={{ textAlign: 'center' }}>Oka Tomoaki | 23 February, 2018</p>
        <div
          style={{ margin: '30px auto', width: '70%', textAlign: 'justify' }}
        >
          {newsResponse.blogText1[0]}
        </div>
        <div>
          {<img src={newsResponse.blogImage1[0]} alt="No Image" width="100%" />}
        </div>
        <div
          style={{ margin: '30px auto', width: '70%', textAlign: 'justify' }}
        >
          {newsResponse.blogText2[0]}
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <img
            style={{ flex: 1 }}
            src={newsResponse.blogImage2}
            alt="No Image"
            width="100%"
          />
          <span style={{ flex: 1 }}>
            <h1>{newsResponse.blogText3.title}</h1>
            <p>{newsResponse.blogText3.info}</p>
          </span>
        </div>
        <div
          style={{ margin: '30px auto', width: '70%', textAlign: 'justify' }}
        >
          {newsResponse.blogText4}
        </div>
        <div>
          <h1 style={{ textAlign: 'center' }}>{newsResponse.blogTitle}</h1>
          <span>
            {newsResponse.blogImages.map((e, index) => (
              <span
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="150"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                key={index}
              >
                {<img src={e} alt="No image" width="100%" />}
              </span>
            ))}
          </span>
        </div>
        <div>
          <h1
            style={{
              margin: '30px auto',
              width: '70%',
              textAlign: 'justify',
              fontWeight: '400',
              fontSize: '18px',
            }}
          >
            {newsResponse.blogText5}
          </h1>
        </div>
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            width: '40%',
            margin: 'auto',
          }}
        >
          {newsResponse.icon.map((e, index) => (
            <p
              key={index}
              style={{
                margin: 'auto',
                width: '70px',
                height: '30px',
                color: 'white',
                backgroundColor: 'burlywood',
                fontSize: '20px',
              }}
            >
              {e}
            </p>
          ))}
        </div>
        <div
          style={{
            paddingTop: '30px',
            textAlign: 'center',
            width: '40%',
            textAlign: 'center',
            margin: 'auto',
          }}
        >
          {func(newsResponse)}
        </div>
        <div
          style={{
            fontSize: '30px',
            fontWeight: '600',
            textAlign: 'center',
            margin: '20px',
          }}
        >
          {newsResponse.blogtext6}
        </div>
        <div style={{ width: '60%', margin: 'auto' }}>
          <span style={{ flex: 1 }}>
            <img
              src={newsResponse.blogTextImge2.image}
              alt="no Image"
              width="100%"
            />
            <p>Blog</p>
          </span>
          <span style={{ flex: 2 }}>
            {newsResponse.blogText7.map((e, index) => (
              <p key={index}>{e}</p>
            ))}
          </span>
        </div>
        <div style={{ width: '60%', margin: 'auto' }}>
          <span style={{ flex: 1 }}>
            <img
              src={newsResponse.blogTextImge3.image}
              alt="No image"
              width="100%"
            />
            <p>Blog</p>
          </span>
          <span style={{ flex: 2 }}>
            {newsResponse.blogText8.map((e, index) => (
              <p key={index}>{e}</p>
            ))}
          </span>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const newsResponse = await fetcher(`${VERCEL_URL}/api/news/blog`)

  return {
    props: {
      newsResponse,
    }
  }
}
