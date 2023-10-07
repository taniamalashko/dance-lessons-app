import styled from '@emotion/styled';

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#f0f0f0',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
};

export const CloseButton = styled('button')({
  backgroundColor: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  fontSize: '24px',
  position: 'absolute',
  top: '10px',
  right: '10px',
  color: '#666',
  transition: 'color 0.3s',

  '&:hover': {
    color: '#333',
  },
});

export const ModalContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

export const ModalTitle = styled('h2')({
  marginBottom: '10px',
  fontSize: '24px',
  color: '#333',
});

export const ModalContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  marginTop: '20px',

  div: {
    marginBottom: '15px',
  },

  label: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#555',
  },

  p: {
    marginTop: '5px',
    color: '#333',
  },
});
