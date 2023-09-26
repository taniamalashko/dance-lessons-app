import React from 'react';
import {
  Copyright, FcbkIcon, FooterContainer, InstaIcon, ListInline, ListItem, SocialLine, SocialLink, TwtrIcon, YoutbIcon,
} from './footerStyled';

const Footer = () => <FooterContainer>
        <SocialLine>
            <SocialLink><InstaIcon></InstaIcon></SocialLink>
            <SocialLink><TwtrIcon></TwtrIcon></SocialLink>
            <SocialLink><FcbkIcon></FcbkIcon></SocialLink>
            <SocialLink><YoutbIcon></YoutbIcon></SocialLink>
        </SocialLine>
        <ListInline>
            <ListItem><a href="#">Home</a></ListItem>
            <ListItem><a href="#">Services</a></ListItem>
            <ListItem><a href="#">About</a></ListItem>
            <ListItem><a href="#">Terms</a></ListItem>
            <ListItem><a href="#">Privacy Police</a></ListItem>
        </ListInline>
        <Copyright>Dance Lessons © 2023</Copyright>
    </FooterContainer>;

export default Footer;
