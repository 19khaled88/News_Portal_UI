import Layout from '@/components/Layout'
import styles from '@/styles/404.module.css'
import Link from 'next/link'
import { FaExclamationTriangle } from 'react-icons/fa'
export default function NotFound() {
  return (
    <Layout title="Page not found">
      <div className={styles.error}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
        >
          <h2 style={{ paddingRight: '10px' }}>404</h2>
          <h1>
            <FaExclamationTriangle />
          </h1>
        </div>
        <h4>Sorry, Fage not found</h4>
        <Link href="/">Back to Home</Link>
      </div>
    </Layout>
  )
}
