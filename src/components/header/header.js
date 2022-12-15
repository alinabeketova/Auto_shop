import React from 'react'
import Nav from '../nav/nav'
import './header.sass'

const Header = () => {
    return(
        <div className="conteiner">
            <header className="header">
                <img src="img/logo.svg" className="logo" alt='ok'/>
                <Nav />
                <img src="img/menu.svg" className="menu-" alt='ok'/>
            </header>
        </div>
    )
}

export default Header