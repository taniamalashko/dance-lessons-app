import styled from "@emotion/styled";

export const FilterBar = styled('div')({
    width: '100%',
    height: '100px',
    justifyContent: 'center',
    display: "flex"
})


export const FilterButt = styled('button')({
    height: '50px',
    backgroundColor: '#f2f2f2',
    border: 'none',
    borderRadius: '25px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#333',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    "&:hover": {
      backgroundColor: '#ddd',
    },
});

export const Cards = styled('div')({
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
})

export const LoadingContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

export const ErrorContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '400px',
});

export const ErrorBox = styled('div')({
  height: '300px',
  width: '600px',
  display: 'flex'
})

export const ErrorImg = styled('div')({
  width: '50%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  'img':{
    width: '200px',
    display: 'block',
  }
});

export const ErrorText = styled('div')({
  width: '50%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  'h2': {
    fontSize: '24px',
    color: '#333',
    marginBottom: '8px',
  },
  'p': {
    fontSize: '16px',
    color: '#666',
  }
});