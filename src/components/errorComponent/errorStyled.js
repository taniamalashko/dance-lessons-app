import styled from '@emotion/styled';

export const ErrorContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '400px',
});

export const ErrorBox = styled('div')({
  height: '300px',
  width: '600px',
  display: 'flex',
});

export const ErrorImg = styled('div')({
  width: '50%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  img: {
    width: '200px',
    display: 'block',
  },
});

export const ErrorText = styled('div')({
  width: '50%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  h2: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '8px',
  },
  p: {
    fontSize: '16px',
    color: '#666',
  },
});
