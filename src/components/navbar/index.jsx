import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserTie ,faBars} from '@fortawesome/free-solid-svg-icons';
import {HiX} from "react-icons/hi";
import { Link } from "react-router-dom";
import './style.scss';
const data=[
    {
    label : 'HOME',
    to : '/'
    },
    {
        label : 'ABOUT ME',
        to : '/about'
    },
    {
        label : 'SKILLS',
        to : '/skills'
    },
    {
        label : 'RESUME',
        to : '/resume'
    },
    {
        label : 'PROJECT',
        to : '/portfolio'
    },
    {
        label : 'CONTACT',
        to : '/contact'
    }

    
]
const Navbar=()=>{
    const[toggleIcon ,setToggleIcon]=useState(false);



    const handleToggleIcon=()=>{
        setToggleIcon(!toggleIcon);
    };
    const handleCloseMenu=() =>{
        setToggleIcon(false);
    };
    return(
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={'/'} className="navbar__container__logo">
                    <FontAwesomeIcon icon={faUserTie} inverse />
                    </Link>
                </div>
                <ul className={`navbar__container__menu  ${toggleIcon? 'active' :''}`} >
                    {
                        data.map((item ,key)=>(
                            <li key={key} className="navbar__container__menu__item " onClick={handleCloseMenu}>
                                <Link className="navbar__container__menu__item__links" to={item.to}> 
                                   {item.label}
                                </Link>

                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX/> : <FontAwesomeIcon icon={faBars} inverse />
                    }

                </div>
            </nav>
        </div>
    )
        
}

export default Navbar;