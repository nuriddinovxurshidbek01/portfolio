import React from 'react'
import './index.scss'
const Header=()=>{
return (
    <>
    <header>
       <div className="container">
         <ul className="header__list">
            <li className="header__list_item"><a href="#" className="header__list_item--link">Works</a></li>
            <li className="header__list_item"><a href="#" className="header__list_item--link">Blog</a></li>
            <li className="header__list_item"><a href="#" className="header__list_item--link">Contact</a></li>
         </ul>
       </div>
    </header>
    </>
)
}
export default Header;

