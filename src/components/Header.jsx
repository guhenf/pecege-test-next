import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <Image src='/logo.png' alt='Logo do Pecege Wheels' width={100} height={160} />
      <p>PECEGE Wheels</p>
    </header>
  )
}