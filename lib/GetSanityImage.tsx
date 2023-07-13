import Image from "next/image"
import React, { FC } from 'react'
import { ProductImage } from '@/types'
import {sanityClient} from '../src/app/api/products/route'
import imageUrlBuilder from '@sanity/image-url'
const GetSanityImage:FC<{ source:ProductImage }> = (source) => {
    const builder = imageUrlBuilder(sanityClient)
    function urlFor(source:any) {
        return builder.image(source)
    }
  return (
    <Image 
    src={urlFor(source.source).url()}
    width={250}
    height={250}
    alt = {source.source.imagecaption}
     />
  )
}

export default GetSanityImage