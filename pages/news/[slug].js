import Layout from "@/components/Layout";
import { API_URL } from "@/config/BaseUrl";
import styles from '@/styles/News.module.css'
import { fetcher } from "lib/api";
import Image from "next/image";
import Link from "next/link";

export default function News({newsResponse}) {
  const {data} = newsResponse
 
  return (
    <div>
      <Layout>
        <p>Single news composition</p>
        <div className={styles.news}>
          <span>{data[0].attributes.date} {data[0].attributes.time}</span>
        </div>
        <h1>{data[0].attributes.name}</h1>
        {
          data[0].attributes.image && (
            <div className={styles.image}>
              <Image src={data[0].attributes.image.data.attributes.url} width={900} height={600} alt="No Image" />
            </div>
          )
        }
        <p>{data[0].attributes.detail}</p>
        <Link href="/news">
          <button>Go back</button>
        </Link>
      </Layout>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const slug = context.params.slug
//   const res = await fetch(`${API_URL}/news/${slug}`)
//   const singleData = await res.json()
  
//   return {
//     props: { news:singleData.news[0] }
//   }
// }
export async function getServerSideProps(context) {
  const slug = context.params.slug
  const newsResponse = await fetcher(
    `${process.env.NEXTJS_PUBLIC_URL}/sports/?filters[slug][$eq]=${slug}&&populate=*`
  )
  return {
    props : {
     newsResponse
    }
  }
}
