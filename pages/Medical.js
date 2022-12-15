import Layout from '@/components/Layout'
import { VERCEL_URL } from '@/config/BaseUrl'
import styles from '@/styles/Medical.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { motion, useAnimation, useScroll } from 'framer-motion'
import { fetcher } from 'lib/api'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
export default function Medical({ newsResponse }) {
  const { ref, inView } = useInView()
  const { scrollY } = useScroll()
  const { rightSide, latestnews, latestNewsRight, mostViewed } = newsResponse
  const animation = useAnimation()
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

  return (
    <Layout>
      <div className={styles.medical}>
        <div ref={ref} className={styles.firstInner}>
          <motion.div className={styles.covid} animate={animation}>
            {newsResponse.covid.map((e, index) => {
              if (e.image !== undefined) {
                return <img key={index} src={e.image} alt="No Image" />
              }
              return <span key={index}>{e}</span>
            })}
          </motion.div>
          <div className={styles.rightSide}>
            {rightSide.map((element) => (
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="150"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <img src={element.image} alt="No image" />
                <span>{element.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.secondInner}>
          <div
            className={styles.latestNewsRight}
            style={{ display: 'flex', flexDirection: 'column', flex: 3 }}
          >
            <h2>Latest News</h2>
            <div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="150"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                style={{ flex: 2 }}
              >
                {latestnews.map((element) => {
                  if (element.image !== undefined) {
                    return (
                      <img src={element.image} alt="No Image" width="100%" />
                    )
                  }
                  return (
                    <div>
                      <h2 style={{ margin: '0px' }}>{element.title}</h2>
                      <p style={{ margin: '0px', paddingTop: '5px' }}>
                        {element.info}
                      </p>
                    </div>
                  )
                })}
              </div>
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="250"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                style={{
                  flex: 1,
                  gap: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {latestNewsRight.map((element) => (
                  <div>
                    <img src={element.image} alt="No Image" width="100%" />
                    <span>{element.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
            }}
            className={styles.mostViewed}
          >
            <h2>Most Visited News</h2>
            {mostViewed.map((element) => (
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="150"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                style={{ paddingBottom: '15px' }}
              >
                <p style={{ margin: '0px', backgroundColor: 'Highlight' }}>
                  {element.title}
                </p>
                <p
                  style={{
                    margin: '0px',
                    fontSize: '15px',
                    fontWeight: '600',
                    paddingTop: '5px',
                  }}
                >
                  {element.info}
                </p>
                <p
                  style={{
                    margin: '0px',
                    color: 'GrayText',
                    paddingTop: '5px',
                  }}
                >
                  {element.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const newsResponse = await fetcher(`${VERCEL_URL}/api/news/medical`)

  return {
    props: {
      newsResponse,
    }
  }
}
