import styles from '@/styles/TopHeader.module.css'

const TopHeader = () => {
  return (
    <div className={styles.Tophead}>
      <div className={styles.date}>
        <p>Wed, March 4, 2020</p>
        <p>
          30 <span>&#176;C</span>, London
        </p>
      </div>
      <div>
        <h1 style={{color:"#22A39F"}}>NEW NEWS</h1>
      </div>
      <div className={styles.icon}>
        <p>English ESPANOL</p>
        <span>
          <img src="/images/icon/instagram.png" />
          <img src="/images/icon/facebook.png" />
          <img src="/images/icon/youtube.png" />
          <img src="/images/icon/linkedin.png" />
          <img src="/images/icon/twitter.png" />
        </span>
      </div>
    </div>
  )
}

export default TopHeader
