import styled from '@emotion/styled';
import { Icon } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 1px solid #ccc;
  border-radius: 20px;
  overflow: hidden;
  width: 300px; /* Задайте нужную ширину */
`;

export const SearchInputField = styled.input`
  flex-grow: 1;
  border: none;
  border-radius: 20px;
  outline: none;
  padding: 0 5px;

  &:focus {
    border: none;
  }
`;

export const SearchNavLink = styled(NavLink)({
  textDecoration: 'none',
  height: '100%',
});

export const SearchButton = styled.button`
  height: 100%;
  background-color: #9ec9ff;
  border: none;
  border-radius: 0 20px 20px 0;
  color: white;
  cursor: pointer;
  padding: 5px 5px 0;
  transition: 0.3s ease;

  &:hover {
    background-color: #75aff8;
  }
`;

export const SearchIcon = styled(Icon)({
  height: '40px',
  margin: 0,
  padding: 0,
});
