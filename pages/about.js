import Layout from '@/components/Layout'
import Link from 'next/link'
export default function about() {
  return (
    <div>
      <Layout title="About">
        Welcome to about page
        <br />
        <Link href="/">Home</Link>
      </Layout>
    </div>
  )
}
