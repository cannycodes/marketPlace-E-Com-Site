import React from 'react'
import Wrapper from '../Wrapper'
import Image from 'next/image'
import jewelryimg from '@/components/jewelry/feature.webp'

export const Jewelry = () => {
  return (
    <Wrapper>
        <div className='flex flex-col mt-30 py-10'>
            {/* top dev */}
            <div className='flex justify-start shrink lg:justify-end'>
                <h2 className='text-2xl flex font-extrabold max-w-md items-start lg:items-end lg:text-5xl'>
                Unique and Authentic Vintage Designer Jewellery
                </h2>
            </div>
            {/* Lower Dev */}
            <div className='flex flex-col lg:flex-row justify-between h-96 w-full mt-1 lg:mt-10'>
                {/* Lower Left */}
                <div className='flex flex-col w-full  justify-between lg:w-1/2 relative'>
                  <span className='w-full h-full text-9xl text-gray-100 max-w-lg absolute top-0 p-5 font-semibold inse-0 '>
                    Diffrenet from others
                  </span>
                  {/* top */}
                    <div className='flex justify-between p-5 max-w-lg z-10'>
                      <div className='flex flex-col justify-between'>
                          <h3 className='text-xl font-semibold'>
                          Using Good Quality Materials
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                          </p>
                      </div>
                      <div className='flex flex-col justify-between'>
                          <h3 className='text-xl font-semibold'>
                          100% Handmade Products
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                          </p>
                        </div>
                    </div>
                  {/* Bottom */}
                    <div className='flex justify-between p-5 max-w-lg z-10'>
                        <div className='flex flex-col justify-between'>
                          <h3 className='text-xl leading-loose font-semibold'>
                          Using Good Quality Materials
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                          </p>
                      </div>
                      <div className='flex flex-col justify-between'>
                          <h3 className='text-xl font-semibold'>
                          Modern Fashion Design
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amt, consectetur adipiscing elit.
                          </p>
                        </div>
                    </div>
                </div>
                {/* Lower Right */}
                <div className='flex flex-1 flex-col lg:flex-row justify-between'>
                    <div className='lg:w-1/2'>
                      <Image
                      className='object-cover'
                      src={jewelryimg}
                      alt='jewelry'
                      />
                    </div>
                      <div className='lg:w-1/2 text-left justify-between leading-relaxed text-lg lg:px-10'>
                        <p className='text-justify mt-5 w-full lg:mt-0'>
                        This piece is ethically crafted
                        in our small family-owned workshop
                          in Peru with unmatched attention to 
                          detail and care. The Natural color
                          is the actual natural color of the fiber, 
                          undyed and 100% traceable.
                        </p>
                        <button className='bg-black py-2 px-5 text-white mt-10'>
                          See All Product
                        </button>
                      </div>
                </div>
            </div>
        </div>  
    </Wrapper>
  )
}
