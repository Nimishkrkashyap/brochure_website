import React, { useState } from 'react'
import menuStyle from './Menu.module.css'
import logo from '../img/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll"


function Menu() {
    const [showMenu, setShowMenu] = useState(false)
    const [navbar, setnavbar] = useState(false)

    const eventListener = () => {
        if (window.scrollY >= 80) {
            setnavbar(true);
        } else {
            setnavbar(false);
        }
    }

    window.addEventListener("scroll",eventListener);

    const finalMenu = showMenu ? menuStyle.mobile_menu : menuStyle.link
    const finalNav = navbar ? menuStyle.container_active : menuStyle.container

    return (
        <>
           <div className={finalNav}>
               <div className={menuStyle.logo}>
                <img src={logo} alt="logo" />
               </div>
               <div className={finalMenu}>
                <ul>
                    <li>
                    <Link
                        activeClass="active"
                        to="service"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        Services 
                        </Link>
                        </li>
                    <li>
                    <Link
                        activeClass="active"
                        to="team"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        team 
                        </Link>
                        </li> 
                    <li>
                    <Link
                        activeClass="active"
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        Portfolio 
                        </Link>
                        </li>  
                    <li>
                    <Link
                        activeClass="active"
                        to="pricing"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        Pricing  
                        </Link>
                        </li>
                    <li>
                    <Link
                        activeClass="active"
                        to="clients"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        Clients  
                        </Link>
                        </li>                     
                    <li>
                    <Link
                        activeClass="active"
                        to="testimonials"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        Testimonials  
                        </Link>
                    </li><li>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}>
                        Contact  
                        </Link>
                        </li>
                </ul>
               </div>
               <div className={menuStyle.hamburger} onClick={() => setShowMenu(!showMenu)}>
                    {showMenu  ? <AiOutlineClose />: <GiHamburgerMenu />}
               </div>
           </div>
        </>
    )
}

export default Menu;