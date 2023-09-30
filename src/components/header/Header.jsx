import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  HeaderContainer,
  LoginAvatar,
  LoginEl,
  LoginTitle,
  LogoImage,
  LogoWrapper,
  NavBar,
  NavItem,
  NavList,
  UploadButton,
  UploadButtonIcon,
} from './headerStyled';
import logoImg from '../../assets/logoImg.png';
import defaultLogo from '../../assets/defaultAvatar.png';
import SearchInput from '../searchInput/SearchInput';

function Header() {
  return (
        <HeaderContainer>
            <LogoWrapper>
                <NavLink to='/'><LogoImage src={logoImg} alt="logo image"/></NavLink>
            </LogoWrapper>
            <NavBar>
                <NavList>
                    <NavLink to='/' exact activeClassName='activeNavLink'><NavItem>MAIN</NavItem></NavLink>
                    <NavLink to='/MyLessons' activeClassName='activeNavLink'><NavItem>MY LESSONS</NavItem></NavLink>
                    <NavLink to='/Blog' activeClassName='activeNavLink'><NavItem>BLOG</NavItem></NavLink>
                </NavList>
                <UploadButton>
                    <UploadButtonIcon title="Завантажити новий урок">file_upload</UploadButtonIcon>
                </UploadButton>
                <SearchInput />
            </NavBar>
            <LoginEl>
                <LoginAvatar src={defaultLogo}></LoginAvatar>
                <LoginTitle>Log In</LoginTitle>
            </LoginEl>
        </HeaderContainer>
  );
}

export default Header;
