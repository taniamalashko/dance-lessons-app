import { Icon } from '@mui/material';
import React, { useState } from 'react';
import {
  SearchContainer,
  SearchInputField,
  SearchButton,
  SearchNavLink,
} from './searchInputStyled';

function SearchInput() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <SearchContainer>
      <SearchInputField
        type="text"
        placeholder="Поиск"
        value={searchTerm}
        onChange={(el) => setSearchTerm(el.target.value)}
      />
      <SearchNavLink to={`/searchResults?query=${searchTerm}`} onClick={() => setSearchTerm('')}>
        <SearchButton>
          <Icon>search</Icon>
        </SearchButton>
      </SearchNavLink>
    </SearchContainer>
  );
}

export default SearchInput;
