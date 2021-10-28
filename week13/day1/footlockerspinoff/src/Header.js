import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faCartPlus,faBars } from '@fortawesome/free-solid-svg-icons'
import FootlockerLogo from "./assets/FootlockerLogo.png"
import { useHistory } from 'react-router-dom';
import "./css/Footlocker.css";
export default function Header() {
    const history = useHistory();
    return (
        <div className="navigationBar">
            <img onClick={() =>history.push('/')}className="navbarLogo" src={FootlockerLogo} alt="" />
            <div className="navbarIcons">
            <p className="navbarIcon"><FontAwesomeIcon icon={faSearch} /></p>
            <p onClick={() =>history.push('/cart')}className="navbarIcon"><FontAwesomeIcon icon={faCartPlus} /></p>
            <p className="navbarIcon"><FontAwesomeIcon icon={faBars} /></p>
            </div>
      
           
        </div>
    )
}
