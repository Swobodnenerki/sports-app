import React from 'react';
import {CloseIcon, Icon, SidebarContainer, SidebarWrapper, SidebarMenu, SidebarLink, SidebarHref} from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/" onClick={toggle}>Home</SidebarLink>
                    <SidebarHref href={'https://swobodnenerki.github.io/portfolio/'} onClick={toggle}>About</SidebarHref>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar;
