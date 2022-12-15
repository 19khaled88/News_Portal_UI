import Layout from '@/components/Layout'
import styles from '@/styles/World.module.css'
import Tilt from 'react-parallax-tilt'
import { fetcher } from 'lib/api'
import { VERCEL_URL } from '@/config/BaseUrl'

export default function world({ newsResponse }) {
  const worldNews = (data, type) => {
    const array = []
    for (let element in data) {
      if (element === type && type === 'worldNewsLeft') {
        array.push(
          <div key={data[element].id}>
            <img src={data[element].image} alt="No image" width="100%" />
            <h1 style={{ margin: '0px', fontSize: '20px', fontWeight: '500' }}>
              {data[element].title}
            </h1>
            <p>{data[element].info}</p>
            <p>World News</p>
          </div>,
        )
      }
      if (element === type && type === 'worldNewsRight') {
        array.push(
          data[element].map((item) => (
            <div key={item.id} style={{ height: ''}}>
              <Tilt>
              <div style={{position:'relative',height:'100%'}}>
                <img src={item.image} alt="No image" width="100%" height="100%"/>
                <div style={{position:'absolute',margin:'0px',bottom:0,left:0, backgroundColor:'#D23369'}}>
                  <p style={{color:'white',margin:'10px'}}>World News</p>
                </div>
              </div>
              </Tilt>
              <h1
                style={{ margin: '0px', fontSize: '15px', fontWeight: '500' }}
              >
                {item.title}
              </h1>
              <p style={{ margin: '0px', fontSize: '15px' }}>{item.info.length > 50 ? (<> {item.info.substring(1,50)} ...<button>Read more</button> </>) :item.info}</p>
              
            </div>
          )),
        )
      }
      if (element === type && type === 'worldPopularNews') {
        array.push(
          data[element].map((item,index) => (
            <div key={item.id} style={{ height: '290px' }} >
              <div style={{position:'relative',height:'80%'}} className={styles.box}>
                <div style={{height:'100%'}} className={styles.boxImg}>
                  <img src={item.image} alt="No Image" width="100%" height="100%" />
                  <span className={styles.badge}>{index  + 1}</span>
                </div>
                
                <div className={styles.boxContent}>
                      <h3 className={styles.title}>Lorem ipsum dolor</h3>
                      <ul className={styles.socialLinks}>
                          <li><a href="#" class="fa fa-facebook"></a></li>
                          <li><a href="#" class="fa fa-twitter"></a></li>
                          <li><a href="#" class="fa fa-linkedin"></a></li>
                      </ul>
                </div>
                <div style={{position:'absolute',margin:'0px',bottom:0,left:0, backgroundColor:'#D23369'}}>
                  <p style={{color:'white',margin:'10px'}}>World News</p>
                </div>
              </div>
              <h1
                style={{ margin: '0px', fontSize: '20px', fontWeight: '500',fontSize:'18px',fontWeight:'500',paddingTop:'5px' }}
              >
                {item.title}
              </h1>
            </div>
          )),
        )
      }
    }
    return array
  }

  return (
    <div>
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{marginTop:'0px',marginBottom:'2px'}}>World</h2>
            <p style={{margin:'0px'}}>
              This text can be added in the category Description field in
              dashboard
            </p>
          </div>
          <h1
            style={{ fontSize: '25px', fontWeight: '500', color: 'GrayText' ,paddingTop:'15px'}}
          >
            World News
          </h1>
          <div className={styles.worldNews}>
            <div style={{ flex: 1 }}>
              {worldNews(newsResponse, 'worldNewsLeft')}
            </div>
            <div
              // style={{
              //   display: 'grid',
              //   gridTemplateColumns: 'auto auto',
              //   flex: 1,
              //   gridColumnGap: 15,
              //   gridRowGap:15
              // }}
            >
              {worldNews(newsResponse, 'worldNewsRight')}
            </div>
          </div>
          <h1
            // style={{ fontSize: '25px', fontWeight: '500', color: 'GrayText' ,paddingTop:'15px'}}
          >
            Popular News
          </h1>
          <div
            className={styles.popularNews}
            // style={{
            //   display: 'grid',
            //   gridTemplateColumns: '1fr 1fr 1fr 1fr',
            //   gridColumnGap: 10,
            //   gridRowGap: 10,
            // }}
          >
            {worldNews(newsResponse, 'worldPopularNews')}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  // const newsResponse = await fetcher(`http://localhost:3000/api/news/world`)
  const newsResponse = await fetcher(`${VERCEL_URL}/api/news/world`)

  return {
    props: {
      newsResponse,
    },
    revalidate: 1,
  }
}
