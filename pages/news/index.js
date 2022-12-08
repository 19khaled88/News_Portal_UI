import Layout from '@/components/Layout'
import NewsItems from '@/components/NewsItems'
import { API_URL } from '@/config/BaseUrl'
import { fetcher } from 'lib/api'

export default function news({newsResponse}) {
  const {data} = newsResponse
  return (
    <div>
      <Layout
        title="News"
        description="This is news page, get updated all time"
      >
        <p>All News Composition</p>
        {
          data.map((element)=>(
            <NewsItems key={element.id} items={element}/>
          ))
        }
      </Layout>
    </div>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/news`)
//   const data = await res.json()

//   return {
//     props: { data }
//   }
// }
export async function getServerSideProps() {
  const newsResponse = await fetcher(
    `${process.env.NEXTJS_PUBLIC_URL}/news?populate=*`
  )
  return {
    props : {
     newsResponse
    }
  }
}
