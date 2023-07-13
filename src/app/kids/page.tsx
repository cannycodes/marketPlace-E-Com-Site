
import Wrapper from '@/components/Wrapper';
import AllProductsComponent from '@/components/allProducts/allproductscomponent'
import Productcard from '@/components/productcard/Productcard';
import { ProductType } from '@/types'
import React from 'react'
const  getProducts = async() => {
  const paramsString = "*[_type =='products' && productCategory[0] == 'women']";
const searchParams =  encodeURI(paramsString);
console.log({searchParams})
console.log("welcome")
  // const res = await fetch(`${Base_URL}/api/products?start=1&end=2`);
  const res = await fetch(`https://5wa0d9vm.api.sanity.io/v2023-06-24/data/query/production?query=*%5B_type%20%3D%3D'products'%20%26%26%20productCategory%5B0%5D%20%3D%3D%20'kids
  '%5D`);
  if(!res.ok) throw new Error("Failed To Fetch");
  const products = res.json();
  return products
  console.log(products)

  // https://5wa0d9vm.api.sanity.io/v2023-06-24/data/query/production?query=*%5B_type%20%3D%3D'products'%20%26%26%20productCategory%5B0%5D%20%3D%3D%20'men'%5D
}
const Kids = async() => {
  console.log("welcome")
 const products = await getProducts()
      if (products.result.length == 0){
        return (
        
          <div className="flex justify-center m-auto py-20 items-center">           
            <span> No Products found in Kids Category: </span>
          </div>

        
        )
      }

  return (
    <Wrapper>
    <div className='flex flex-col lg:flex-row lg:space-x-5 justify-evenly flex-wrap '>
      {
        products.result.map((product:ProductType, index:number)=>{
          return (
            <Productcard
            key={index}
            item={product}
             />
          )
        })
      }
      </div>
      </Wrapper>
  )
}

export default Kids