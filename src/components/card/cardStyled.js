import styled from '@emotion/styled';
import { Icon } from '@mui/material';
import YouTube from 'react-youtube';

export const VideoCardContainer = styled('div')(({ colorClassName }) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '33%',
    marginBottom: '30px'
}));
  
export const VideoCard = styled('div')({
    height: '300px',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '30px',
    overflow: 'hidden',
    margin: '0 10px',
});

export const VideoPreview = styled(YouTube)({
    flex: 1,
    borderRadius: '30px 30px 0 0',
    border: '1px solid lightgray',
    borderBottom: 'none',
    overflow: 'hidden',
});

export const InfoContainer = styled('div')(({ color }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100px',
    borderRadius: '0 0 30px 30px',
    backgroundColor: color || '#f5f5f5',
}));

export const InfoContainerName = styled('div')({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
});

export const InfoContainerButtons = styled('div')({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
});

export const Button = styled('button')({
    border: 'none',
    backgroundColor: 'inherit',
    padding: '10px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
});

export const InfoButton = styled(Icon)({
    color: 'gray',
    transition: '0.3s ease',
    cursor: 'pointer',
    ':hover': {
        color: 'black',
    },
});

export const FavoriteButton = styled(Icon)(({ favorite }) => ({
    color: favorite ? 'black' : 'gray',
    transition: '0.3s ease',
    cursor: 'pointer',

    '&:active': {
        color: 'white'
    }
}));


