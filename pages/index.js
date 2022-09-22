import Head from 'next/head'

// components
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Hatch | Frontend Challenge</title>
        <meta name='description' content='Hatch Frontend Code Challenge' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <HeroSection />
      <InfoSection />
    </div>
  )
}
