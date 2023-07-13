import Wrapper from "@/components/Wrapper";
import Productcard from "@/components/productcard/Productcard";
import { ProductType } from "@/types";

const  getProducts = async() => {
  const res = await fetch(`https://5wa0d9vm.api.sanity.io/v2023-06-24/data/query/production?query=*%5B_type%20%3D%3D'products'%20%26%26%20productCategory%5B0%5D%20%3D%3D%20'men'%5D`);
  if(!res.ok) throw new Error("Failed To Fetch");
  const products = res.json();
  return products
  }
export default async function Subcat({ params, searchParams }: {
  params: { subcat: string },
  searchParams: { id: string },
}) {
  const products = await getProducts();
  console.log({products})
   const filterdProducts = products.result.filter((product:ProductType)=>product.dresstype[0].toLowerCase()=== `${params.subcat.toLowerCase()}`);

   if (filterdProducts.length == 0){
          return (
           
            <div className="flex justify-center m-auto items-center">           
              <span> No Products found in  Category: </span>
            <span className="text-red-400 p-4 font-semibold">{params.subcat}</span>
            </div>

           
          )
   }
   
    return (
      <Wrapper>
      <div className='flex justify-evenly items-center flex-wrap flex-grow'>
      {
        filterdProducts.map((product:ProductType, index:number)=>{
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