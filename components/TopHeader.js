import styles from '@/styles/TopHeader.module.css'
import { useState } from 'react'
const TopHeader = () => {
  const [menu, setMenu] = useState(true)
  const clickMenuHandler = () => {
    setMenu(!menu)
  }
  return (
    <div className={styles.Tophead}>
      <div className={styles.date}>
        <p>Wed, March 4, 2020</p>
        <p>
          30 <span>&#176;C</span>, Dhaka
        </p>
      </div>
      <div>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ color: '#22A39F', margin: '0px' }}>NEW NEWS</h1>
          <p style={{ margin: '0px' }}>
            {' '}
            Always stay fast and upadated with lates news{' '}
          </p>
          <img
            onClick={clickMenuHandler}
            style={{ cursor: 'pointer' }}
            src={
              menu === true ? '/images/menu/menu.png' : '/images/menu/close.png'
            }
            alt="No image"
            width="30"
          />
        </div>

        <div class={styles.scrolling}>
          <div className={styles.scroll_left}>
            <p>
              {' '}
              <span style={{ color: 'royalblue', paddingRight: '5px' }}>
                Breaking News :
              </span>{' '}
              <span style={{ color: 'orangered' }}>
                Morocco advance to World Cup semi-finals
              </span>{' '}
              ||{' '}
              <span style={{ color: 'magenta' }}>
                New iPhone instantly measures a person's height
              </span>{' '}
              ||{' '}
              <span style={{ color: 'pink' }}>
                Saudi Arabia plans to build six-runway airport
              </span>{' '}
              ||{' '}
              <span style={{ color: 'palevioletred' }}>
                Cooking began 600,000 years earlier than we thought
              </span>{' '}
              ||{' '}
              <span style={{ color: 'navy' }}>
                Tunnel under Egypt could lead to Cleopatra's tomb
              </span>
            </p>
          </div>
          <div className={styles.scroller}>
            <span>
              Home
              <br />
              Medical
              <br />
              Sports
              <br />
              Business
              <br />
              Magazine <br />
              World
              <br />
              Travel
              <br />
              Art
              <br />
              Blog
              <br />
              Politics
            </span>
          </div>
        </div>
      </div>

      <div className={styles.icon}>
        <p>English || Bangla</p>
        <span>
          <img src="/images/icon/instagram.png" />
          <img src="/images/icon/facebook.png" />
          <img src="/images/icon/youtube.png" />
          <img src="/images/icon/linkedin.png" />
          <img src="/images/icon/twitter.png" />
        </span>
      </div>
      <div></div>
      <div className={menu === true ? styles.disappear : styles.appear}>
        <a href="#Home">Home</a>
        <a href="#Medical">Medical</a>
        <a href="#Sports">Sports</a>
        <a href="#Business">Business</a>
        <a href="#Magazine">Magazine</a>
        <a href="#World">World</a>
        <a href="#Travel">Travel</a>
        <a href="#Art">Art</a>
        <a href="#Blog">Blog</a>
        <a href="#Politics">Politics</a>
      </div>
    </div>
  )
}

export default TopHeader
