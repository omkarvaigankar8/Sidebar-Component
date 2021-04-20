import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
// import * as AiIcons from "react-icons/ai";
import {SidebarData} from './SidebarData';
import './Sidebar.css';
import {IconContext} from 'react-icons';
import Backdrop from './Backdrop';

function Sidebar(props) {
    const [sidebar,setSidebar] =useState(false);

    const showSidebar=() => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                    <FaIcons.FaBars  onClick={showSidebar}/>
                </Link>
            </div>
            {sidebar ? <Backdrop clicked ={showSidebar}/> : null}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}  onClick={showSidebar}>
                <ul className="nav-menu-items" onClick={showSidebar}>
  
                    {SidebarData.map((item,index) => {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Sidebar
/* <li className="navbar-toggle">
<Link to="#" className='menu-bars'>
    <AiIcons.AiOutlineClose/>
</Link>
</li>  */