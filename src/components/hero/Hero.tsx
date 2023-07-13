import React from 'react';
import Image from 'next/image'
import heroimage from '@/components/hero/heroimage/headerimg.webp'
import bg1 from '@/components/hero/heroimage/Featured1.webp'
import bg2 from '@/components/hero/heroimage/Featured2.webp'
import bg3 from '@/components/hero/heroimage/Featured3.webp'
import bg4 from '@/components/hero/heroimage/Featured4.webp'

import Wrapper from '../Wrapper';
import { GiShoppingCart } from 'react-icons/gi';

const Hero = () => {''
  return (
    <Wrapper>
    <div className='flex bg-slate-50 pt-6 min-w-full'>
        {/* left dev */}
        <div className='flex flex-col text-white flex-1 self-stretch min-h-screen'>
            <div className=' h-10 flex justify-center items-center px-5 rounded-md font-semibold text-lg bg-blue-100 text-blue-900 w-max'>
                Sale 70%
            </div>
            <h2 className='text-3xl md:text-5xl lg:text-8xl text-gray-800 mt-10 font-medium md:font-light'>
            An Industrial Take on Streetwear
            </h2>
          <p className='text-xl text-gray-800 my-10'>
          Anyone can beat you but no one can <br/> beat your outfit as long as you wear <br /> Dine outfits.
          </p>
          <div className='bg-gray-900 flex items-center justify-between w-40 px-3 py-3'>
            <GiShoppingCart
            size={30}
            className='w-4/12'
             />
            <h3 className='ml-3 w-8/12 text-white text-md font-semibold'>Start <br/>Shoping</h3>
          </div>

          <div className='flex text-xs md:flex mt-3 mx-2 justify-between items-center opacity-80 md:text-lg'>
            <Image src={bg1} alt='bg1' />
            <Image src={bg2} alt='bg2' />
            <Image src={bg3} alt='bg3' />
            <Image src={bg4} alt='bg4' />
          </div>

        </div>
        {/* right dev */}
        <div className='hidden md:flex flex-auto justify-center relative items-center flex-shrink'>
            <Image
            src={heroimage} alt='hero image'
            className='z-10'
            />
            <div className="bg-red-100 h-[75%] w-[75%] rounded-full absolute lef-7 top-30 mx-auto content-center"></div>
        </div>
    </div>
    </Wrapper>
  )
}

export default Hero