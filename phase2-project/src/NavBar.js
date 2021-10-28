import React from "react"
import { NavLink } from "react-router-dom"
import styled from 'styled-components'

function NavBar () {
    return(
        <div>
            <NavLinkContainer to="/">
             Home
            </NavLinkContainer> 
            <NavLinkContainer to="/about">
             About The Authors
            </NavLinkContainer>
            <NavLinkContainer to="/createpost">
             Create a Post 
            </NavLinkContainer> 
        </div>
    )
};

export default NavBar

const NavLinkContainer = styled(NavLink)`
    display: flex;
    flex-wrap: wrap;
    padding: auto;
    justify-content: center;
    color: gold;
    font-size: 25px;
`