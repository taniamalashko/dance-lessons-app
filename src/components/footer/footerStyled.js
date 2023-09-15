import styled from "@emotion/styled";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

export const FooterContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '150px',
    padding: '15px 0',
    borderTop: '1px solid lightgray'
});

export const SocialLine = styled('div')({
    textAlign: 'center',
});

export const SocialLink = styled('a')({
    width: '40px',
    height: '40px',
    display: 'inline-flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: '50%',
    border: '1px solid #ccc',
    margin: '0 8px 20px',
    opacity: '0.5',
    transition: '0.3s ease',
    '&:hover': {
        opacity: '1',
    }
});

export const InstaIcon = styled(InstagramIcon)({
    width: '40px'
});

export const TwtrIcon = styled(TwitterIcon)({
    width: '40px'
});

export const FcbkIcon = styled(FacebookIcon)({
    width: '40px'
});

export const YoutbIcon = styled(YouTubeIcon)({
    width: '40px'
});

export const ListInline = styled('ul')({
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
});

export const ListItem = styled('li')({
    'a': {
        color: 'gray',
        transition: '0.3s ease',
        textDecoration: 'none',
        padding: '0 10px',
        fontSize: '18px',
        ':hover': {
            color: 'black',
        }
    }
});

export const Copyright = styled('p')({
    textAlign: 'center',
    fontSize: '15px',
    color: 'lightgrey',
})

