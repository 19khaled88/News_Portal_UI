import Layout from '@/components/Layout'
import { VERCEL_URL } from '@/config/BaseUrl'
import styles from '@/styles/Travel.module.css'
import { fetcher } from 'lib/api'
import { useState } from 'react'
export default function travel({ newsResponse }) {
  const { allNews, Details } = newsResponse
  const [newsStatus, setNewsStatus] = useState('popular')
  const [messageClick, setMessageClick] = useState('If you wanted to get rich, how would you do it?')

  const popularHandler = () => {
    setNewsStatus('popular')
  }

  const latestHandler = () => {
    setNewsStatus('latest')
  }
  const messageClicked=(message)=>{
    setMessageClick(message)
  }
 
  return (
    <Layout>
      <div className={styles.travel} style={{ display: 'flex', flexDirection: 'row' }}>
        <div>
          <span>
            <button onClick={popularHandler} style={{ flex: 1, height: '35px' }}>
              Popular
            </button>
            <button onClick={latestHandler} style={{ flex: 1, height: '35px' }}>
              Latest
            </button>
          </span>
          <div className={styles.popular} style={newsStatus === 'popular' ? { margin: '5px', display:'block' } : { display:'none' }}>
            {allNews.popular.map((e, index) => (
              <p onClick={()=>messageClicked(e)} key={index}>
                {e}
              </p>
            ))}
          </div>
          <div className={styles.latest} style={newsStatus === 'latest' ? { margin: '5px',display:'block' } : { display:'none'}}>
            {allNews.latest.map((e, index) => (
              <p onClick={()=>messageClicked(e)}key={index}>
                {e}
              </p>
            ))}
          </div>
        </div>
        <div>
          {Details.map((e) => (
            <>
              <h2>{messageClick.length > 50 ? messageClick.slice(0, 50)+'...' : messageClick}</h2>
              <h5 style={{  }}>
                {e.subTitle}
              </h5>
              <p
                style={{
                  fontSize: '20px',
                  fontWeight: '300',
                  color: 'goldenrod',
                  marginBottom: '10px',
                  borderBottom: '1px solid black',
                }}
              >
                {e.publisher}
              </p>
              <p>{e.info}</p>
              <img src={e.image} alt="No Image" width="90%" />
              <p>{e.disclaimer}</p>
              <h2>{e.lasttitle}</h2>
              <p>{e.lastinfo}</p>
              <h1 style={{ fontSize: '20px', color: 'gray' }}>{e.article}</h1>
              <span>
                {e.button.map((el) => (
                  <button>
                    {el}
                  </button>
                ))}
              </span>
              <p
                style={{
                  backgroundColor: '#e8280b',
                  width: '200px',
                  textAlign: 'center',
                  padding: '10px',
                  color: 'white',
                  fontSize: '20px',
                  borderRadius: '10px',
                }}
              >
                Load comments {e.comment}
              </p>
            </>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const newsResponse = await fetcher(`${VERCEL_URL}/api/news/travel`)

  return {
    props: {
      newsResponse,
    },
    revalidate: 1,
  }
}
