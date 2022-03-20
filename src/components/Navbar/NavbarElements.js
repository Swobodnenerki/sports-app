import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 500;
    width: 100%;
    padding: 20px 0;
    background-color: black;
`

export const MaxWidth = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    @media screen and (max-width: 500px){
        padding: 0 10px;
    }
    
`
export const Logo = styled(Link)`
    font-size: 1.875rem;
    font-weight: 600;
    border: none;
    outline: 0;
    cursor: pointer;
    text-decoration: none;
    color: white;
    @media screen and (max-width: 500px){
        font-size: 1.2rem;
    }

`

export const Menu = styled.ul`
    @media screen and (max-width: 950px){
        display: none;
    }
`
export const MenuItem = styled.li`
    list-style: none;
    display: inline-block;
`

export const MenuLink = styled(Link)`
    color: white;
    font-size: 1.125rem;
    font-weight: 500;
    margin-left: 25px;
    display: flex;
    border: none;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    transition: color 0.3s ease;
    text-decoration: none;
    &.active{
        border-bottom: 3px solid #0bceaf;
        
    }
    &:hover{
        transition: color 0.3s ease;
        color: #0bceaf;
    }
`
export const MenuHref = styled.a`
    color: white;
    font-size: 1.125rem;
    font-weight: 500;
    margin-left: 25px;
    display: flex;
    border: none;
    background-color: transparent;
    outline: 0;
    cursor: pointer;
    transition: color 0.3s ease;
    text-decoration: none;
    &.active{
        border-bottom: 3px solid #0bceaf;
        
    }
    &:hover{
        transition: color 0.3s ease;
        color: #0bceaf;
    }
`

export const MenuButton = styled.button`
    display: none;
    @media screen and (max-width: 950px){
      color: white;
      display: block;
      border: none;
      margin-top: 10px;
      font-size: 1.8rem;
      background-color: transparent;
      outline: 0;
      cursor: pointer;
      transition: color 0.3s ease;
      &:hover{
        color: #0bceaf;
        transition: 0.2s ease-in-out;
    }
    }
`



