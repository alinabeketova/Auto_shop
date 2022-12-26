import React from 'react'
import Nav from '../nav/nav'
import './header.sass'
import logo from '../../img/logo.svg'
import menu from '../../img/menu.svg'

const Header = () => {
    return(
        <div className="conteiner">
            <header className="header">
                <img src={logo} className="logo" alt='ok'/>
                <Nav />
                <img src={menu} className="menu-" alt='ok'/>
            </header>
        </div>
    )
}

export default Header