'use client'
import { ProductType } from '@/types'
import {Component, useState} from 'react'
import { render } from 'react-dom'
import InfiniteScroll from 'react-infinite-scroll-component';
import Productcard from '../productcard/Productcard';
import Wrapper from '../Wrapper';
import { dataset } from '../../../sanity/env';
export interface Propstype{
    productArray: Array<ProductType>
}

export default class AllProductsComponent extends Component <{productData: Propstype}>{
     
    state:{
        products:Array<ProductType>,
        hasMore:boolean,
        start:number,
        end:number,
    } = {
        products:[...this.props.productData.productArray],
        hasMore: true,
        start:1,
        end:2,
    }
    getData = async(start:number, end:number) => {
        const res = await fetch(`http://localhost:3000/api/products?start=${this.state.start}&end=${this.state.end}`);
        if(!res.ok) throw new Error("Failed To Fetch the data");
        const datatobechecked = await res.json()
        if (datatobechecked.productArray === "Not Found"){
            this.setState({hasMore:false})
            console.log("Not found detected")
        }
        else {
            // const products:Propstype = datatobechecked;
            this.setState({
                products:this.state.products.concat(...datatobechecked.productArray),
                start:start + 1,
                end: end + 1,
            })
        
        }
        console.log(this.state.end)
        console.log({datatobechecked:datatobechecked})
        return this.state.products
    }
    
    render(){
        return(
           
            <div>
                <InfiniteScroll
  dataLength={this.state.products.length} //This is important field to render the next data
  next={()=>this.getData(this.state.start, this.state.end)}
  hasMore={this.state.hasMore}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
    }
//  -className='grid grid-cols-1 grid-flow-row content-center mx-auto md:grid-cols-2 lg:grid-cols-3 md:content-between gap-y-3 justify-between'
>

  {
    <Wrapper>
   <section className='flex justify-evenly items-center flex-wrap flex-grow'>
       { 
        this.state.products.map((item:ProductType, index:number) => {
            return(
                <Productcard
                key={index}
                item={item}
                />
                
            )
        }
    )
}
</section>
    </Wrapper>
  }
</InfiniteScroll>
            </div>
        )
    }
        
    
}