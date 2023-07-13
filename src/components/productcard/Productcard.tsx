import { ProductType } from '@/types'
import { ProductImage } from '@/types'
import Image, { StaticImageData } from 'next/image'
import GetSanityImage from '../../../lib/GetSanityImage'
import { FC } from 'react'
import heroimage from '@/components/hero/heroimage/headerimg.webp'


const Productcard: FC<{ item: ProductType }> = ({item}) => {
  const defaultimage:ProductImage =  {
    "imagecaption": "Muscle Tank",
    "_type": "productImage",
    "_key": "e8e62f6a8204",
    "assets": {
        "_ref": "image-d8cbcd5d002fade4d83dc66f910f34ae84d61975-278x296-png",
        "_type": "reference"
    }
}
  return (
    // <div className='flex flex-col'>
    //     <div className='image'>

    //     </div>
    //     <div className='flex flex-col justify-between items-center bg-slate-500 max-w-xs p-5 m-3'>
    //       <GetSanityImage
    //       source={item.productImages[0]}
    //       />
    //        <h3 className='text-2xl text-center'>
    //           {
    //             item.productName
    //           }
    //        </h3>
    //        <p>
    //         {
    //          item.dresstype
    //         }
    //        </p>
    //         <p>
    //         {
    //           item.price
    //         }
    //         </p>
    //     </div>
    // </div>  
    <div className="group my-10 flex max-w-xs flex-col overflow-hidden rounded-lg border border-blue-500 bg-white shadow-md">
    <a className="relative mx-3 mt-3 max-w-[13rem] flex h-60 overflow-hidden rounded-xl w-72" href="#">
      {/* <Image className="peer absolute top-0 right-0 h-full w-full object-cover" src={} alt="product image" /> */}
      <div className='peer absolute top-0 right-0 h-full w-full object-cover'>
          <GetSanityImage
          source={item.productImages[0]?item.productImages[0]:defaultimage}
           />
    </div>
    
      <svg className="pointer-events-none absolute inset-x-0 bottom-5 mx-auto text-3xl text-white  transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32"><path fill="currentColor" d="M2 10a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v10a4 4 0 0 1-2.328 3.635a2.996 2.996 0 0 0-.55-.756l-8-8A3 3 0 0 0 14 17v7H6a4 4 0 0 1-4-4V10Zm14 19a1 1 0 0 0 1.8.6l2.7-3.6H25a1 1 0 0 0 .707-1.707l-8-8A1 1 0 0 0 16 17v12Z" /></svg>
    </a>
    <div className="mt-4 px-5 pb-5">
      <a href="#">
        <h5 className="text-xl tracking-tight text-slate-900">{item.productName}</h5>
      </a>
      <div className="mt-2 mb-5 flex items-center justify-between">
        <p>
          <span className="text-lg font-bold text-slate-900">Rs.{item.price}</span>
          {/* <span className="text-sm text-slate-900 line-through">{item.sale}</span> */}
        </p>
      </div>
      <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        Add to cart</a
      >
    </div>
  </div>
    
  )
}

export default Productcard