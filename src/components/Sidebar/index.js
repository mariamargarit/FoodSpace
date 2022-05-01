import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBtnWrap, SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu } from './SidebarElements'

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
          <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="home">
              Home
            </SidebarLink>
            <SidebarLink to="about">
              About
            </SidebarLink>
            <SidebarLink to="signup">
              Sign Up
            </SidebarLink>
          </SidebarMenu>
          <SideBtnWrap>
            <SidebarRoute to="/signin">
              Sign In
            </SidebarRoute>
          </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar