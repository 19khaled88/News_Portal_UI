import styles from '@/styles/Nav.module.css'
import { motion, useScroll } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const Nav = () => {
  const path = usePathname()
  const links = [
    { href: '/home', text: 'home' },
    { href: '/Realestate', text: 'Real estate' },
    { href: '/sports', text: 'Sports' },
    { href: '/business', text: 'Business' },
    { href: '/magazine', text: 'Magazine' },
    { href: '/world', text: 'World' },
    { href: '/travel', text: 'Travel' },
    { href: '/art', text: 'Art' },
    { href: '/blog', text: 'Blog' },
    { href: '/politics', text: 'Politics' },
  ]
  const { scrollYProgress } = useScroll()
  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // console.log("page scroll", latest)
    })
  }, [scrollYProgress])
  return (
    <div className={styles.top}>
      <div className={styles.Nav}>
        <div className={styles.NavItem}>
          <ul>
            {links.map((element, index) => (
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  style={path === element.href ? { color: 'red' } : {}}
                  href={element.href}
                >
                  {element.text}
                </Link>
              </motion.div>
            ))}
            <div></div>
          </ul>
        </div>
        <div className={styles.Search}>
          <img src="/images/icon/search.png" />
        </div>
      </div>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className={styles.scrolTracker}
      />
    </div>
  )
}

export default Nav
