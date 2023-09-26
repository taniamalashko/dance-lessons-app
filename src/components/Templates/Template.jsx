import React from 'react';
import { Outlet } from 'react-router-dom';
import '../../App.css';
import Header from '../header/Header';
import Footer from '../footer/footer';
import { Container, Main, MainWrapper } from '../../styled';

function Template() {
  return (
    <MainWrapper>
      <Container>
        <Header />
        <Main>
          <Outlet />
        </Main>
        <Footer/>
      </Container>
    </MainWrapper>
  );
}

export default Template;
