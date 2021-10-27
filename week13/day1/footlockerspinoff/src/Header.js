import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faCartPlus,faBars } from '@fortawesome/free-solid-svg-icons'
import FootlockerLogo from "./assets/FootlockerLogo.png"
import "./css/Footlocker.css";
export default function Header() {
    return (
        <div className="navigationBar">
            <img className="navbarLogo" src={FootlockerLogo} alt="" />
            <div className="navbarIcons">
            <p className="navbarIcon"><FontAwesomeIcon icon={faSearch} /></p>
            <p className="navbarIcon"><FontAwesomeIcon icon={faCartPlus} /></p>
            <p className="navbarIcon"><FontAwesomeIcon icon={faBars} /></p>
            </div>
      
           
        </div>
    )
}
