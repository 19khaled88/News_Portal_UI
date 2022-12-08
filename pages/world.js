import Layout from '@/components/Layout'
import { fetcher } from 'lib/api'

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
          </div>,
        )
      }
      if (element === type && type === 'worldNewsRight') {
        array.push(
          data[element].map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="No image" width="100%" />
              <h1
                style={{ margin: '0px', fontSize: '20px', fontWeight: '500' }}
              >
                {item.title}
              </h1>
              <p style={{ margin: '0px', fontSize: '15px' }}>{item.info}</p>
            </div>
          )),
        )
      }
      if (element === type && type === 'worldPopularNews') {
        array.push(
          data[element].map((item) => (
            <div key={item.id} style={{ height: '290px' }}>
              <img src={item.image} alt="No Image" width="100%" height="70%" />
              <h1
                style={{ margin: '0px', fontSize: '20px', fontWeight: '500' }}
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
            <h2>World</h2>
            <p>
              This text can be added in the category Description field in
              dashboard
            </p>
          </div>
          <h1
            style={{ fontSize: '25px', fontWeight: '500', color: 'GrayText' }}
          >
            World News
          </h1>
          <div style={{ display: 'flex', flexDirection: 'row', gap: 15 }}>
            <div style={{ flex: 1 }}>
              {worldNews(newsResponse, 'worldNewsLeft')}
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto auto',
                flex: 1,
                gridColumnGap: 10,
              }}
            >
              {worldNews(newsResponse, 'worldNewsRight')}
            </div>
          </div>
          <h1
            style={{ fontSize: '25px', fontWeight: '500', color: 'GrayText' }}
          >
            Popular News
          </h1>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto auto auto auto',
              gridColumnGap: 10,
              gridRowGap: 10,
            }}
          >
            {worldNews(newsResponse, 'worldPopularNews')}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export async function getStaticProps() {
  const newsResponse = await fetcher(`http://localhost:3000/api/news/world`)

  return {
    props: {
      newsResponse,
    },
    revalidate: 1,
  }
}
