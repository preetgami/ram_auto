import React from 'react'
import "./SideDrawer.css"
import ReactDOM from "react-dom" 

import { CSSTransition } from "react-transition-group";

function SideDrawer(props) {
    const content=(
        <CSSTransition in={props.show}
        timeout={0}
        classNames="slide-in-effect"
        mountOnEnter
        unmountOnExit
        >
            <aside className='side-drawer' onClick={props.onClick}>{props.children}</aside>
        </CSSTransition>
    )
  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
  
}

export default SideDrawer