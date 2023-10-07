import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
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
import LoginModal from '../loginModal/LoginModal';
import { authActions } from '../../store/services/auth';
import { clearUserDataFromLocalStorage } from '../../utils/storage';

function Header() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { isAuthorized, userData: { role } } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = () => {
    dispatch(authActions.logout());
    clearUserDataFromLocalStorage();
    navigate('/');
  };

  return (
        <HeaderContainer>
            <LogoWrapper>
                <NavLink to='/'><LogoImage src={logoImg} alt="logo image"/></NavLink>
            </LogoWrapper>
            <NavBar>
                <NavList>
                    <NavLink to='/'><NavItem>MAIN</NavItem></NavLink>
                    {isAuthorized && (
                        <NavLink to='/MyLessons'><NavItem>FAVORITE</NavItem></NavLink>
                    )}
                    {role === 'teacher' && (
                        <NavLink to='/MyUploadedLessons'><NavItem>UPLOADED</NavItem></NavLink>
                    )}
                </NavList>
                {role === 'teacher' && (
                    <NavLink
                    to='/createLesson'
                    style={{ color: 'grey', height: '100%' }}>
                        <UploadButton>
                            <UploadButtonIcon title="Завантажити новий урок">file_upload</UploadButtonIcon>
                        </UploadButton>
                    </NavLink>)
                }
                <SearchInput />
            </NavBar>
            <LoginEl>
                <LoginAvatar src={defaultLogo}></LoginAvatar>
                {!isAuthorized && (
                    <LoginTitle onClick={() => { setIsLoginModalOpen(true); }}>Log In</LoginTitle>
                )}
                {isAuthorized && (
                    <LoginTitle onClick={ logOut }>Log Out</LoginTitle>
                )}
            </LoginEl>

            {isLoginModalOpen && (
            <LoginModal
            isOpen={isLoginModalOpen}
            onRequestClose={() => { setIsLoginModalOpen(false); }}/>
            )}
        </HeaderContainer>
  );
}

export default Header;
