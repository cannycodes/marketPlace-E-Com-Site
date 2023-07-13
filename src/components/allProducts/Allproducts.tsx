 import React from 'react'
import {GET} from '@/app/api/products/route' 
import { ProductType } from '@/types';
import { SanityProductsResponse } from '@/types';
import Productcard from '../productcard/Productcard';
import AllProductsComponent from './allproductscomponent';
import {Propstype} from '@/components/allProducts/allproductscomponent'
import { error } from 'console';

const Base_URL = 'http://localhost:3000'
const  getProducts = async() => {
  // const res = await fetch(`${Base_URL}/api/products?start=1&end=2`);
  const res = await fetch('http://localhost:3000/api/products?start=0&end=1');
  if(!res.ok) throw new Error("Failed To Fetch");
  const products = res.json();
  return products
  console.log(products)
}

const Allproducts = async() => {
  const products = await getProducts();
  // const products:Propstype = {
  // productArray: []
  // };
  return (
    
      <div className=''>
        <AllProductsComponent
         productData={products}
        />
      </div>

  )
} 

export default Allproducts
