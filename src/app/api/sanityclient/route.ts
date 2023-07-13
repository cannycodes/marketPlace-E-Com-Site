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
  const res:SanityProductsResponse = await sanityClient.fetch(`*[_type == "products"]`);

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