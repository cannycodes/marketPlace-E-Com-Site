import { NextRequest, NextResponse } from 'next/server'
import { ProductType } from '@/types';
import { SanityProductsResponse } from '@/types';
import { createClient } from "next-sanity";
// import { error } from 'console';
import { request } from 'http';
 
export async function GET(request:NextRequest) {
  let originalData:Array<ProductType> = [];
  const url = request.nextUrl.searchParams;
  let sanityQuery:string|null= '*[_type == "products"]';  //
  if(url.has("query")){
    console.log('query found in url')
    sanityQuery = url.get("query")
    console.log({sanityQuery})
  }
  const res = await fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/query/production?query=${sanityQuery}`,{
    next:{
      revalidate:false
    }
  });

  if (!res.ok) throw Error("Failed to Load the data")
  let dataFromAPI:SanityProductsResponse = await res.json()
  originalData.push(...dataFromAPI.result);
console.log(dataFromAPI);
if (url.has("start") || url.has('end')){
  if (originalData[Number(url.get("start"))])
  {
  let productArray = originalData.slice(Number(url.get("start")), Number(url.get("end")))
  return NextResponse.json({productArray})
  }
  return NextResponse.json({productArray:"Not Found"})
}
 
  return NextResponse.json(res);
}

export const sanityClient = createClient({
  projectId: `${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}`,
  dataset: `${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
  apiVersion: "2022-03-25",
  useCdn: false
});



// export const getProducts= async() => {
//   const products:SanityProductsResponse = await sanityClient.fetch(`*[_type == "products"]`);
//   return products
// }