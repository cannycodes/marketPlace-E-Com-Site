import Hero from '@/components/hero/Hero'
import Navebar from '@/components/navebar/Navebar'
import Promotion from '@/components/promotions/Promotion'
import Carousal from '@/components/productsslider/Carousal'
import Image from 'next/image'
import { Jewelry } from '@/components/jewelry/Jewelry'
import Allproducts from '@/components/allProducts/Allproducts'
import Newsletter from '@/components/newsletter/Newsletter'
import Footer from '@/components/footer/footer'

export default function Home() {
  return (
    <main className='bg-slate-100 min-h-screen'>
      {/* <Navebar />
      <Hero />
      <Promotion />
      <Carousal /> */}
      {/* <Jewelry /> */}
      {/* <Newsletter /> */}
      <Allproducts />
      <Footer/>
    </main>
  )
}
