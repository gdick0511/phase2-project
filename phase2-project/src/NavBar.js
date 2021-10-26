import React from "react"
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

function NavBar () {
    return(
        <NavBarContainer>
            <NavLink to="/">
             Home
            </NavLink> 
            <NavLink to="/about">
             About
            </NavLink>
            <NavLink to="/createpost">
             CreatePost 
            </NavLink> 
        </NavBarContainer>
    )
};

export default NavBar

const NavBarContainer = styled.div`
    display: flex;
    justify-content: space-around;
`