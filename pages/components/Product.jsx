import { useState } from "react";
import { SliderProduct } from "./SliderData";
import Image from "next/image";
function Product() {
    const [menuProduct,setMenuProduct]=useState(SliderProduct)
    const filter=(type)=>{
        setMenuProduct(SliderProduct.filter((product)=>product.type===type))
    }
    return (
     <div className="product-container">
<img src="./asset/6.jpg"   className="uncooked-egg"/>
<span style={{  fontSize:' 1.6rem', fontWeight: 'bold'}}>Our Availiable Delicacies</span>
<div className="products">
    <ul className="product-menu">
        <li onClick={()=>setMenuProduct(SliderProduct)}>All</li>
        <li onClick={()=>filter("Appetizers")}>Appetizers</li>
        <li onClick={()=>filter("Drinks")}>Drinks</li>
        <li onClick={()=>filter("mainmeal")}>Main meal</li>
        <li onClick={()=>filter("Snacks")} >Snacks</li>
    </ul>
    <div className="product-list">
            {menuProduct.map((product,i)=>(
                <div className="product">
               <div className="left-p"> 
               <div className="name">
               <span>{product.name}</span>
               </div>
               <span>${product.price}</span>
               <div className="" > Show now</div> 
               </div>
            <Image src={product.img} alt={product.name} className="image-product" width={300} height={300} />
                </div>
            ))

            }
    </div>
</div>
     </div>
    );
  }
  export default Product;
  