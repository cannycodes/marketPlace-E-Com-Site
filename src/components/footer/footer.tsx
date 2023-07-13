import React from 'react'
import Wrapper from '../Wrapper'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../public/Logo.webp'
import {ImTwitter } from "react-icons/im"
import {FaFacebookF } from "react-icons/fa"
import {FaLinkedinIn} from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <Wrapper>
//         <footer className='h-56 flex-col lg:flex-row justify-between'>
//             <div className='flex flex-col justify-between w-2/5 items-center max-w-xs h-full'>
//                 <Link href={'/'}>
//                     <Image
//                     src={logo} 
//                     alt='logo'
//                     height={250}
//                     width={250}
//                     />
//                 </Link>
//                 <p className='text-xl tracking-wider  text-justify'>
//                 Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.
//                 </p>
//                 <div className='flex items-center justify-around w-48'>
//                     <ImTwitter  size={40} className='bg-slate-200 rounded-md block p-2' />
//                     <FaFacebookF  size={40} className='bg-slate-200 rounded-md block p-2' />
//                     <FaLinkedinIn  size={40} className='bg-slate-200 rounded-md block p-2' />
//                 </div>
//             </div>

//             {/* Company */}
//             <div className='flex flex-col justify-between items-center'>
//                 <h3 className='text-2xl font-bold'>
//                     Company
//                 </h3>
                
//             </div>
//             <div className='flex flex-col justify-between items-center'>
//             </div>
//             <div className='flex flex-col justify-between items-center'>
//             </div>
//             <div className='flex flex-col justify-between items-center'>
//             </div>
//         </footer>
//     </Wrapper>
    
//   )
// }

// export default Footer


const Footer = () => {
  return (
    <Wrapper>
    <footer className="text-gray-600 body-font items-start">
  <div className="container md:px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center space-y-5 md:space-y-11 md:text-left">
      <Link href={'/'} className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"> 
        <Image
        src={logo}
        alt='logo'
         />
       </Link>
      <p className="mt-2 text-lg text-gray-500 justify-center">Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
      <div className='flex mt-2 justify-center md:justify-start space-x-6 '>
            <Link href={'/'}>
            <ImTwitter  size={40} className='bg-slate-200 text-black text-sm  rounded-md block p-2' />
            </Link>
            <Link href={'/'}>
            <FaFacebookF  size={40} className='bg-slate-200 text-black text-sm rounded-md block p-2' />
            </Link>
            <Link href={'/'}>
            <FaLinkedinIn  size={40} className='bg-slate-200 text-black text-sm rounded-md block p-2' />
            </Link>
        </div>
    </div>
    <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-xl font-bold text-gray-600 tracking-widest  mb-3">Company</h2>
        <nav className="list-none mb-10 text-lg space-y-3">
          <li>
            <Link href={'/'} className="text-gray-600 hover:text-gray-800 ">About</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-600 hover:text-gray-800">Terms of Use</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-600 hover:text-gray-800">Privacy Policy</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-600 hover:text-gray-800">How It Works</Link>
          </li>
          <li>
            <Link href={'/'} className="text-gray-600 hover:text-gray-800">Contact Us</Link>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-xl font-bold text-gray-600 tracking-widest  mb-3">Support</h2>
        <nav className="list-none mb-10 text-lg space-y-3">
          <li>
            <Link href={'/'} className="text-gray-600 hover:text-gray-800">Support Corner</Link >
          </li>
          <li>
            <Link href={'/'} className="text-gray-600 hover:text-gray-800">24h Service</Link >
          </li>
          <li>
            <Link href={'/'} className="text-gray-600 hover:text-gray-800">Quick Chat</Link >
          </li>
        </nav>
      </div>
      
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font text-xl font-bold text-gray-600 tracking-widest  mb-3">Contact</h2>
        <nav className="list-none mb-10 text-lg space-y-3">
          <li>
            <a className="text-gray-600 hover:text-gray-800">Whats App</a>
          </li>
          <li>
            <a className="text-gray-600 hover:text-gray-800">Support 24h</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
    </footer>
    </Wrapper>
  )
}

export default Footer



