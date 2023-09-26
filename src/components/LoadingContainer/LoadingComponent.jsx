import React from 'react';
import { DotLoader } from 'react-spinners';
import { LoadingContainer } from './loadingStyled';

const LoadingComponent = () => <LoadingContainer>
        <DotLoader color={'#123abc'} loading={true} size={50} />
    </LoadingContainer>;

export default LoadingComponent;
