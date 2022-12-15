import Layout from '@/components/Layout'
import styles from '@/styles/Home.module.css'
import Aos from 'aos'

import 'aos/dist/aos.css'
import { motion, useAnimation } from 'framer-motion'
import { fetcher } from 'lib/api'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

export default function home({ newsResponse }) {
  const [closeCard, setCloseCard] = useState(false)
  const [lastYPos, setLastYPos] = useState(0)
  const [shouldShowActions, setShouldShowActions] = useState(false)
  const {
    homeTop,
    slider,
    sideInfo,
    WorldNews,
    popularNews,
    editorChoice,
    footer,
    deepFooter,
  } = newsResponse

  const { ref, inView } = useInView({
    // threshold: 0.1,
  })

  const animation = useAnimation()

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1,
          bounce: 0.3,
        },
      })
      Aos.init({
        //global setting:
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
  }, [inView])

  const variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.3 } },
  }

  const images = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  }

  const closeButton = () => {
    setCloseCard(true)
  }
  const footerView = (footer, type) => {
    let array = []
    footer.map((element) => {
      for (let data in element) {
        if (data === type) {
          array.push(
            <div
              style={
                type === 'SocialIcon'
                  ? { display: 'flex', flexDirection: 'row', gap: '10px' }
                  : {}
              }
            >
              {type === 'SocialIcon' ? null : (
                <h1 style={{ fontSize: '20px' }}>{type}</h1>
              )}
              {element[data].map((footerItem) => {
                return type === 'SocialIcon' ? (
                  <img
                    src={footerItem}
                    alt="No image"
                    width="20px"
                    height="20px"
                  />
                ) : (
                  <p style={{ margin: '3px 0px 3px 0px' }}>{footerItem}</p>
                )
              })}
            </div>,
          )
        }
      }
    })
    return array
  }

  const editor = (editorChoice, type) => {
    const array = []
    editorChoice.map((element) => {
      for (let data in element) {
        if (data === type) {
          element[data].map((news) => {
            return array.push(
              type === 'main' ? (
                <div className={styles.editor}>
                  <img src={news.image} width="100%" />
                  <div>
                    <div class="text">{news.title}</div>
                  </div>
                  <h4>{news.title}</h4>
                </div>
              ) : type === 'side' ? (
                <div>
                  <img src={news.image} width="100%" />
                </div>
              ) : (
                <div>
                  <h1>{news.title}</h1>
                  <span>
                    <p style={{ margin: '0px' }}>{news.time}</p>
                    <p style={{ margin: '0px' }}>{news.comment}</p>
                  </span>
                </div>
              ),
            )
          })
        }
      }
    })
    return array
  }

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Layout>
      <motion.div>
        <div className={styles.homeTop}>
          {homeTop.map((element) => (
            <motion.div
              style={{ height: '50px' }}
              key={element.id}
              animate={{
                scale: 0.9,
                msTransition: {
                  duration: 1,
                },
              }}
            >
              <img
                style={{ height: '100%', paddingRight: '5px' }}
                src={element.image}
                alt="No Image"
              />
              <p style={{ margin: '0px' }}>{element.info}</p>
            </motion.div>
          ))}
        </div>
        <div className={styles.homeBanner}>
          <div
            data-aos="fade-right"
            data-aos-offset="2"
            data-aos-easing="ease-in-out"
            data-aos-delay="150"
            className={styles.sliders}
          >
            <Carousel
              autoPlay={true}
              showThumbs={false}
              infiniteLoop={true}
              transitionTime={2000}
              stopOnHover={true}
              interval={5000}
            >
              {slider.map((element) => (
                <div key={element.id}>
                  <img src={element.image} alt="No Image" />
                  <h2>{element.title}</h2>
                  <h5>{element.info}</h5>
                  <div>
                    <span>
                      <p>{element.time}</p>
                      <img src="/images/home/calendar.png" alt="No Icon" />
                    </span>
                    <span>
                      <p>{element.comment}</p>{' '}
                      <img src="/images/home/speech-bubble.png" alt="No Icon" />
                    </span>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
          <div data-aos="fade-left" className={styles.rightSide}>
            {sideInfo.map((element) => (
              <div
                key={element.id}
                style={{ boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' }}
              >
                <span>
                  <img src={element.image} />
                  <h5>{element.name}</h5>
                </span>
                <p>{element.info}</p>
                <button className={styles.rightSideButton}>Read More</button>
              </div>
            ))}
          </div>
        </div>
        <h1 style={{ color: '#22A39F' }}>World News ---</h1>
        <div className={styles.wNews} ref={ref}>
          <Slider {...sliderSettings}>
            {WorldNews.map((element, index) => (
              <motion.div key={index} animate={animation}>
                <div className={styles.imageBox}>
                  <img
                    src={element.image}
                    alt="No image"
                    width="540"
                    height="548"
                  />
                  <p>{element.name}</p>
                </div>
                <h1>{element.title}</h1>
                <p>{element.info}</p>
                <button type="button" className={styles.buttonSlide}>
                  <div>Read Articale</div>
                  <i className="icon-arrow-right"></i>
                </button>
              </motion.div>
            ))}
          </Slider>
        </div>
        <h1 style={{ color: '#22A39F' }}>Popular News ---</h1>

        <motion.div
          variants={variants}
          initial="hidden"
          animate="show"
          className={styles.popularNews}
        >
          <div className={styles.wrapper}>
            {popularNews.map((element, index) => {
              const main = element.main
              return (
                <div className={styles.box} key={main[0].id}>
                  <motion.img
                    src={main[0].image}
                    width="100%"
                    variants={images}
                  />
                  <div className={styles.content}>
                    <h1>{main[0].title}</h1>
                    <p>{main[0].info}</p>
                  </div>
                  <button>Read more..</button>
                </div>
              )
            })}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto auto',
              gap: '10px',
            }}
          >
            {popularNews.map((NewsItems, index) => {
              return NewsItems.side.map((news, index) => (
                <div key={news.id} className={styles.snip0016}>
                  <img
                    className={styles.popularImage}
                    src={news.image}
                    alt="No image"
                    width="100%"
                  />
                  <div>
                    <h1>{news.title}</h1>
                    <p>{news.info}</p>
                  </div>
                  <button className={styles.rightSideButton}>
                    Read more..
                  </button>
                </div>
              ))
            })}
          </div>
        </motion.div>

        <h1 style={{ color: '#22A39F' }}>Editor choice ---</h1>
        <div
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
          data-aos-delay="150"
          className={styles.editorChoice}
        >
          <div className={styles.editorChoiceMain}>
            {editor(editorChoice, 'main')}
          </div>
          <div className={styles.editorChoiceSub}>
            <div>{editor(editorChoice, 'side')}</div>
            <h1>Letest News ---</h1>
            <div>{editor(editorChoice, 'latest')}</div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            borderTop: '1px solid green',
            borderBlock: '1px solid green',
            padding: '20px 0px 20px 0px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
          >
            <div style={{ flex: 1 }}>{footerView(footer, 'News')}</div>
            <div style={{ flex: 1 }}>{footerView(footer, 'World')}</div>
            <div style={{ flex: 1 }}>{footerView(footer, 'Features')}</div>
            <div style={{ flex: 1 }}>{footerView(footer, 'More')}</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
              New News
            </span>{' '}
            <div>{footerView(footer, 'SocialIcon')}</div>
          </div>
        </div>
        <div className={styles.deepfooter}>
          {deepFooter.map((element) => (
            <p>{element} </p>
          ))}
        </div>

        <div
          className={styles.open_button}
          style={
            closeCard === true ? { display: 'none' } : { display: 'block' }
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}
          >
            <h3
              style={{
                color: 'black',
                margin: '0px',
                paddingTop: '5px',
                flex: 6,
              }}
            >
              Welcome to Wesbite
            </h3>
            <a
              onClick={closeButton}
              style={{
                flex: 1,
                color: 'black',
                textAlign: 'right',
                cursor: 'pointer',
              }}
              className="close"
            >
              x
            </a>
          </div>
          <p style={{ color: 'black' }}>
            We are commited to bring you all time with latest news
          </p>
          <button
            style={{
              backgroundColor: '#DE2B65',
              padding: '7px',
              border: 'none',
              borderRadius: '5px',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            Sign up with email
          </button>
        </div>
      </motion.div>
    </Layout>
  )
}

export async function getStaticProps() {
  const newsResponse = await fetcher(`http://localhost:3000/api/news/home`)

  return {
    props: {
      newsResponse,
    },
    revalidate: 1,
  }
}
