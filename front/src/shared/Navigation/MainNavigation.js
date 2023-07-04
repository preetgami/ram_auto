import React, { useState } from 'react'
import Backdrop from "../Components/Backdrop"
import SideDrawer from './SideDrawer';
import Navlinks from "./Navlinks"
import MainHeader from "./MainHeader"
import { Link } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation(props) {
    const [draweOpen, setDrawerOpen]=useState(false)
    const openDrawer=()=>{
        setDrawerOpen(true);
    }
    const closeDrawer = () => {
        setDrawerOpen(false);
    }

  return (
    <React.Fragment>
        {draweOpen && <Backdrop onClick={closeDrawer}></Backdrop>}
        <SideDrawer show={draweOpen} onClick={closeDrawer}>
            <nav className='main-navigation__drawer-nav'>
                <Navlinks/>
            </nav>
        </SideDrawer>
        <MainHeader>
            <button className='main-navigation__menu-btn' onClick={openDrawer}>
                <span/>
                <span />
                <span />
            </button>
            <h1 className='main-navigation__title'>
                <Link to ="/"> My Garage</Link>

            </h1>
            <nav className="main-navigation__header-nav">
                <Navlinks />
            </nav>
        </MainHeader>
    </React.Fragment>
  )
}

export default MainNavigation