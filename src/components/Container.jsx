import styles from '@/styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Container({ children }) {

  return <div className={styles.container}>
    {children}
  </div>
}