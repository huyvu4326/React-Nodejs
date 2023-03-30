import React from 'react'
import { IProduct } from '../interfaces/product'

type ProductListProps = {
    products:IProduct[]
    onRemove:(id:number|string)=>void
}
const ProductList = ({products,onRemove}:ProductListProps) => {
    if(!products){
        return <div>Loading...</div>
    }
  return (
        <div>
            {products?.map((product:IProduct,index:number)=>{
                return(
                    <div key={index}>{product.name} <button onClick={()=>onRemove(product._id)}>Remove</button></div>
                )
            })}
        </div>
  )
}

export default ProductList;