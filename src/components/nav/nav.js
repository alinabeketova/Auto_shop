import React from "react";
import { Link } from "react-router-dom";
import './nav.sass'

const Nav = () => {
    return(
        <nav className="menu">
            <Link to='/'>главная</Link>
            <Link to='/shop'>магазин</Link>
            <Link to='/products'>продукты</Link>
            <Link to='/about'>о нас</Link>
            <Link to='/contacts'>контакты</Link>
        </nav>
    )
}

export default Nav