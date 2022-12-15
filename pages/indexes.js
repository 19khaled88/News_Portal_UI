import NewsItems from '@/components/NewsItems'
import { fetcher } from 'lib/api'
import Link from 'next/link'
import Layout from '../components/Layout'
import { API_URL } from '../config/BaseUrl'
export default function Home({ newsResponse }) {
  const { data } = newsResponse

  const newsFeed=(news)=>{
    
    if(news?.length > 5){
      return <div>
        {
          news.slice(0,5).map((item) => (
            <NewsItems key={item.id} items={item} number={news.length} />
            ))
        }
        <Link href={`/news`}><button>See All</button></Link>
      </div>
        
    }else{
      return news?.map((item) => (
        <NewsItems key={item.id} items={item} number={news.length} />
      ))
    }
  }
  return (
    <div>
      <Layout
        title="Home"
        description="Generated by create next app"
        link="/favicon.ico"
      >
        <div>
          {newsFeed(data)}
        </div>
      </Layout>
    </div>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/news`)
//   const data = await res.json()

//   return {
//     props: { data },
//   }
// }

// export async function getStaticProps() {
//   const res = await fetch(`${API_URL}/news`)
//   const data = await res.json()

//   return {
//     props: { data },
//     revalidate: 1,
//   }
// }

export async function getStaticProps(){
  const newsResponse = await fetcher(
    `${process.env.NEXTJS_PUBLIC_URL}/news?populate=*`
  )
 
  return {
    props : {
     newsResponse
    },
    revalidate: 1,
  }
}
