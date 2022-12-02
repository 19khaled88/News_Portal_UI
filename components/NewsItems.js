import styles from '@/styles/NewsItem.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function NewsItems({ items }) {
  
  return (
        <div>
          <div className={styles.news}>
            <div className={styles.img}>
              <Image
                src={items.attributes.image.data.attributes.url ? items.attributes.image.data.attributes.url : 'No image'}
                width={150}
                height={150}
                alt="No Image"
              />
            </div>
            <div className={styles.info}>
              <span>
                {items.attributes.date} {items.attributes.time}
              </span>
              <h3>{items.attributes.name}</h3>
            </div>
            <div className={styles.link}>
              <Link href={`/news/${items.attributes.slug}`}>
                <button
                  style={{
                    backgroundColor: 'orangered',
                    border: '0px',
                    padding: '8px',
                    borderRadius: '5px',
                    cursor:'pointer'
                  }}
                >
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
  )
}
