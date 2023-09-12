import styled from "@emotion/styled";
import Icon from '@mui/material/Icon';

export const HeaderContainer = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '150px',
}));

export const LogoWrapper = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
}));

export const LogoImage = styled('img')(() => ({
    width: '48px', 
    height: '48px',
    cursor: "pointer",
}));

export const NavBar = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    height: '40px',
    width: '600px',
    margin: '10px',
    border: '0.5px solid #ebebeb',
    borderRadius: '50px',
}));

export const NavList = styled('ul')(() => ({
    listStyle: 'none',
    display: 'flex',
    padding: 0,
    margin: '0 35px',
    flexGrow: 1,
    flexShrink: 1,
}));

export const NavItem = styled('li')(() => ({
    color: 'black',
    marginRight: '15px',
    fontWeight: 300,
    color: 'grey',
    cursor: "pointer",
    transition: '0.3s ease',
    whiteSpace: 'nowrap',
    "&:hover": {
        color: 'black',
    },
    "&:not(:last-child)::after": {
        content: '"•"',
        color: 'black',
        marginLeft: '15px',
    },
}));

export const UploadButton = styled(Icon)(() => ({
    margin: '0 15px',
    cursor: 'pointer',
    borderRadius: '50%',
    transition: '0.3s ease',
    padding: '3px',
    "&:hover": {
        backgroundColor: 'lightGrey',
    }
}));

export const LoginEl = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '40px',
    width: '100px',
    margin: '10px',
    padding: '0 5px',
    border: '0.5px solid #ebebeb',
    borderRadius: '50px',
}));

export const LoginAvatar = styled('img')(() => ({
    borderRadius: '50%',
    width: '30px',
    height: '30px',

}));

export const LoginTitle = styled('span')(() => ({
    color: 'lightgray',
    whiteSpace: 'nowrap',
}))
