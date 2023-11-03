import React from "react";
import {NavLink} from 'react-router-dom'

function NavBar(){
    return (
        <div>
        <NavLink exact to='/'></NavLink>
        <NavLink exact to='/gallery'></NavLink>
        <NavLink exact to='/usergallery'></NavLink>
        <NavLink exact to='/login'></NavLink>
        </div>
    )
}

export default NavBar