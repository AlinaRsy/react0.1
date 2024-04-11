import { useEffect, useState } from "react"
import CatalogCard from "./CatalogCard/CatalogCard";
import s from './Catalog.module.css'
export default function Catalog({search, category, sort, cart, setCart}){
    const [products, setProducts] = useState([]);
    async function fetchProducts(){
        const response = await fetch('https://dummyjson.com/products');
        const products =await response.json();
        setProducts(products.products);
    }
    useEffect(()=>{
        fetchProducts();
    }, []);
    const filterProducts = products.filter(product=>product.title.toLowerCase().includes(search.toLowerCase())&&
    (product.category===category||category===0));
    function sorting(sort, products){
        switch(sort){
            case '1': return [...products].sort((a,b)=>b.price-a.price);
            case '2': return [...products].sort((a,b)=>a.price-b.price);
            default: return products;
        }
    }
    const sortingFilteredProducts = sorting(sort, filterProducts);
    return(
        <div className="container">
            <div className={s.catalog}>
                {
                    sortingFilteredProducts.map((product)=>{
                        return <CatalogCard product={product} setCart={()=>setCart([product.id, ...cart])}/>
                    })
                }
            </div>
        </div>
    )
}