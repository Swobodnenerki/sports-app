import React, { useState } from "react";
import {MdMenu} from 'react-icons/md';
import { Logo, MaxWidth, Menu, MenuButton, MenuLink, Nav, MenuItem, MenuHref } from "./NavbarElements";


function Navbar( {toggle} ){
  return(
      <Nav>
        <MaxWidth>
          <Logo to='/'>Sports news</Logo>
          <Menu>
            <MenuItem><MenuLink to='/'>Home</MenuLink></MenuItem>
            <MenuItem><MenuHref href={'https://swobodnenerki.github.io/portfolio/'}>About</MenuHref></MenuItem>
          </Menu>
          <MenuButton onClick={toggle}><MdMenu/></MenuButton>
        </MaxWidth>

      </Nav>
  )
}
export default Navbar;
