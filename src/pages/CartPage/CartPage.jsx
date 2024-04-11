import { useEffect, useState } from "react";

export default function CartPage({cart}){
    const [products, setProducts] = useState([]);
    async function fetchProducts(){
        const response = await fetch('https://dummyjson.com/products');
        const products = await response.json();
        setProducts(products.products);
    }
    useEffect(()=>{
        fetchProducts();
    },[]);
    const cartProducts = cart.map(id=>products.find(product=>product.id==id));
    console.log(cart, products);
    return(
        <div className="container">
            {products.length!==0 &&
                cartProducts.map((product)=>{
                    return <p>{product.title}</p>
                })
            }
        </div>
        
    )
}