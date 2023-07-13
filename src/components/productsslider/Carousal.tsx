'use client'
import React from 'react'
import Wrapper from '../Wrapper'
import Image from 'next/image'
import Productcard from '../productcard/Productcard'
import img1 from '@/components/promotions/images/promo1.webp'
import img2 from '@/components/promotions/images/promo2.webp'
import img3 from '@/components/promotions/images/promo3.webp'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import  { useRef, useState } from 'react';

const Carousal = () => {
  return (
    <Wrapper>
        <div className='mt-30 w-full'>
            <div>
                <h3 className='text-[#0062F5] text-lg font-semibold text-center mx-auto'>
                    PRODUCTS
                </h3>
                <p className='text-3xl text-[#212121] text-center mx-auto font-bold my-3'>
                    Check What We Have
                </p>
            </div>

            <div className='px-0 min-h-screen'>
                <Swiper 
                freeMode ={true}
                cssMode={true}
                pagination={{
                    clickable: true,
                  }}
                  breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                      },
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                      },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 0,
                    },
                  }}
                className="mySwiper"
                navigation={true}
                modules={[Navigation]} 
                >
                    <SwiperSlide className='swiper-slide'>
                        {/* <Productcard
                            imgUrl={img1}
                            imgCap='img1'
                            bgColor='#0062F5'
                            price={150}
                         /> */}
                         <Image
                         src={img1}
                         alt='yuuu'
                         />

<h3 className='px-11'>
            tyhh
          </h3>
          <p className='px-11'>
            678
          </p>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide' >
                    {/* <Productcard
                            imgUrl={img2}
                            imgCap='img1'
                            bgColor='#D7D7D9'
                            price={150}
                         /> */}
                         <Image
                         src={img2}
                         alt='yuuu'
                         />
                         <h3>
            tyhh
          </h3>
          <p>
            678
          </p>
                    </SwiperSlide>
                    <SwiperSlide className='swiper-slide'>
                    {/* <Productcard
                            imgUrl={img3}
                            imgCap='img3'
                            bgColor='#D7D7D9'
                            price={150}
                         /> */}
                         <h3>
            rttt
          </h3>
          <p>
            5677
          </p>
                         {/* <Image
                         src={img3}
                         alt='yuuu'
                         /> */}
                    </SwiperSlide>
                </Swiper>
           </div>
        </div>
    </Wrapper>
  )
}

export default Carousal