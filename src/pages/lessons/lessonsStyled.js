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