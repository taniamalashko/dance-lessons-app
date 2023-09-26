import styled from '@emotion/styled';
import { Icon } from '@mui/material';
import YouTube from 'react-youtube';

export const customStyles = {
  content: {
    position: 'relative',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    padding: '0',
    border: 'none',
    backgroundColor: 'transparent',
    overflow: 'auto',
    outline: 'none',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
};

export const CloseButton = styled('button')({
  backgroundColor: 'transparent',
  border: 'none',
  padding: '10px 0',
  cursor: 'pointer',
  fontSize: '24px',
  color: '#666',
  transition: 'color 0.3s',

  '&:hover': {
    color: '#333',
  },
});

export const ModalContainer = styled('div')({
  display: 'flex',
  minWidth: '100vw',
  minHeight: '100vh',
});

export const ModalBar = styled('div')({
  width: '50px',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#fffbf7',
});

export const VideoPreview = styled(YouTube)({
  flexGrow: 1,
  flexShrink: 0,
  height: '100%',
});

export const Button = styled('button')({
  border: 'none',
  backgroundColor: 'inherit',
  padding: '10px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
});

export const FavoriteButton = styled(Icon)(({ favorite }) => ({
  color: favorite ? 'black' : 'gray',
  transition: '0.3s ease',
  cursor: 'pointer',

  '&:active': {
    color: 'white',
  },
}));
