import React from 'react';
import sad from '../../assets/sad.png';
import {
  ErrorBox,
  ErrorContainer,
  ErrorImg,
  ErrorText,
} from './errorStyled';

const ErrorComponent = () => <ErrorContainer>
      <ErrorBox>
          <ErrorImg><img src={sad} alt="Error" /></ErrorImg>
          <ErrorText>
              <h2>OOPS...</h2>
              <p>Something went wrong</p>
          </ErrorText>
      </ErrorBox>
  </ErrorContainer>;

export default ErrorComponent;
