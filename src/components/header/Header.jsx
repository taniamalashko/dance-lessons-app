import React from "react";
import { HeaderContainer, LoginAvatar, LoginEl, LoginTitle, LogoImage, LogoWrapper, NavBar, NavItem, NavList, UploadButton } from "./headerStyled";
import logoImg from "../../assets/logoImg.png";
import defaultLogo from "../../assets/defaultAvatar.png";

function Header() {
    return (
        <HeaderContainer>
            <LogoWrapper>
                <LogoImage src={logoImg} alt="logo image"/>
            </LogoWrapper>
            <NavBar>
                <NavList>
                    <NavItem>Main</NavItem>
                    <NavItem>My lessons</NavItem>
                    <NavItem>Blog</NavItem>
                </NavList>
                <UploadButton title="Завантажити новий урок">file_upload</UploadButton>
            </NavBar>
            <LoginEl>
                <LoginAvatar src={defaultLogo}></LoginAvatar>
                <LoginTitle>Log In</LoginTitle>
            </LoginEl>
        </HeaderContainer>
    )
}

export default Header