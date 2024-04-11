import { useEffect, useState } from "react"
import { useParams } from "react-router";
import s from './ProductPage.module.css'
export default function ProductPage(){
    const [products, setProducts] = useState([]);
    async function fetchProducts(){
        const response = await fetch('https://dummyjson.com/products');
        const products = await response.json();
        setProducts(products.products);
    }
    useEffect(()=>{
        fetchProducts();
    }, []);
    const {id} = useParams();
    const product = products.find((product)=>product.id === +id);

    return(
        <div className="container">
            <div className={s.product}>
            {product &&
                (
                    <>
                    <div className={s.product__images}>
                        {   
                            product.images.map((img) => 
                                {
                                    return <div className={s.product__img}>
                                            <img src={img} alt="#" />
                                        </div>
                                
                                }
                                
                            )
                        }
                    </div>
                    
                    <div className={s.product__body}>
                        <h5 className={s.product__title}>{product.title}</h5>
                        <p className={s.product__text}>{product.description}</p>
                        <div className={s.product__info}>
                            <p className={s.product__price}>{product.price}$</p>
                            <p className={s.product__category}>{product.category}</p>
                            <p className={s.product__stock}>{product.stock}</p>
                        </div>
                        <button className={s.product__btn}>Добавить в корзину</button>
                    </div>
                    </>
                )
             }
        </div>
        </div>
    )
}