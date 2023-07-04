import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function Header() {
  return (
    <header>
      <Image className={styles.logo} src='/logo.png' alt='Logo do Pecege Wheels' width={100} height={160} />
      <p>PECEGE Wheels</p>
    </header>
  )
}