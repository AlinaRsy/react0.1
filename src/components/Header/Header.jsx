import { NavLink, Link } from "react-router-dom"
import s from './Header.module.css'
export default function Header(){
    return(
        <>
        <header className={s.header}>
            <div className="container">
                <div className={s.header__inner}>
                    <p className={s.logo}>Flowers Store</p>
                    <nav className={s.header__nav}>
                        <NavLink className={s.nav__elem} to="/">Главная</NavLink>
                        <NavLink className={s.nav__elem} to="/">Каталог</NavLink>
                        <NavLink className={s.nav__elem} to="/">О нас</NavLink>
                    </nav>
                    <div className={s.header__btns}>
                        <Link to="/cart" className={s.header__btn}>Моя корзина</Link>
                    </div>
                </div>
            </div>
        </header>
       
        </>
    )
}