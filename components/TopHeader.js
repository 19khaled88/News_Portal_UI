import styles from '@/styles/TopHeader.module.css'
const TopHeader = () => {
  return (
    <div className={styles.Tophead}>
      <div className={styles.date}>
        <p>Wed, March 4, 2020</p>
        <p>
          30 <span>&#176;C</span>, Dhaka
        </p>
      </div>
      <div style={{textAlign:'center'}}>
        <h1 style={{color:"#22A39F",margin:'0px'}}>NEW NEWS</h1>
        <p style={{margin:'0px'}}> Always stay fast and upadated with lates news </p>
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
    </div>
  )
}

export default TopHeader
