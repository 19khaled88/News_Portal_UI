import Layout from '@/components/Layout'
import styles from '@/styles/Medical.module.css'
import { fetcher } from 'lib/api'

export default function Medical({ newsResponse }) {
  const { rightSide, latestnews, latestNewsRight, mostViewed } = newsResponse

  return (
    <Layout>
      <div className={styles.medical}>
        <div className={styles.firstInner}>
          <div className={styles.covid}>
            {newsResponse.covid.map((e, index) => {
              if (e.image !== undefined) {
                return <img key={index} src={e.image} alt="No Image" />
              }
              return <span key={index}>{e}</span>
            })}
          </div>
          <div className={styles.rightSide}>
            {rightSide.map((element) => (
              <div>
                <img src={element.image} alt="No image" />
                <span>{element.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}
          className={styles.secondInner}
        >
          <div
            className={styles.latestNewsRight}
            style={{ display: 'flex', flexDirection: 'column', flex: 3 }}
          >
            <h2>Latest News</h2>
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
              <div style={{ flex: 2 }}>
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
              <div style={{ paddingBottom: '15px' }}>
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

export async function getStaticProps() {
  const newsResponse = await fetcher(`http://localhost:3000/api/news/medical`)

  return {
    props: {
      newsResponse,
    },
    revalidate: 1,
  }
}
