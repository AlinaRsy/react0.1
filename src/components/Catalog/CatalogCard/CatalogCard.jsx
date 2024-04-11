import { useState } from 'react';
import s from './CatalogCard.module.css';
import { Link } from 'react-router-dom';
import ModalOrder from '../../Modal/ModalOrder';
export default function CatalogCard({product, setCart}){
    const [modalIsOpen, setModalIsOpen] = useState(false);
    function openModal(){
        setModalIsOpen(true);
    }
    
    return(
        <>
        <div className={s.card}>
            <Link key={product.id} to={`/${product.id}`} className={s.card__img}>
                <img src={product.images[0]} alt="#" />
            </Link>
            <div className={s.card__body}>
                <p className={s.card__name}>{product.title}</p>
                <p className={s.card__price}>{product.price}$</p>
                {
                    product.stock>50?<button onClick={setCart} className={s.card__btn}>В корзину</button>:
                    <button onClick={openModal} className={`${s.card__btn} ${s.toOrder}`}>Заявка</button>
                }
                <ModalOrder productName={product.title} modalIsOpen={modalIsOpen} setModalIsOpen={setModalIsOpen}/>
            </div>
        </div>
        </>
    )
}