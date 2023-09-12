import styled from "@emotion/styled";

export const MainWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', 
}));

export const Main = styled('div')(() => ({
    display: 'flex',
    minHeight: '700px',
    flexWrap: 'wrap',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
}));  

