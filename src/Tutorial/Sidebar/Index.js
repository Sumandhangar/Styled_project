import React from 'react';
import {SidebarContainer, Icon, CloseIcon,SidebarWrapper,SidebarMenu,SidebarLink,SideBtnWrap,SidebarRoute } from './SidebarElements';
const Index = ({ isOpen, toggle}) => {
    console.log(isOpen)

    
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
               <SidebarMenu>
                <SidebarLink to='about'onClick={toggle} >About</SidebarLink>
                <SidebarLink to='services'onClick={toggle} >Services</SidebarLink>
                <SidebarLink to='work' onClick={toggle} >Work</SidebarLink>
                <SidebarLink to='contact' onClick={toggle} >Contact</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/signin' onClick={toggle} >Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
      
        </SidebarContainer>
    ) 
}

export default Index