import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';

const whatToSearch = [{ title: 'Apple' }, { title: 'Boy' }];

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 20px;
  }
`;

const Search = () => (
  <div className="ml-w-3-5">
    <Autocomplete
      className="ml-text-left"
      id="searchBar"
      freeSolo
      options={whatToSearch.map(option => option.title)}
      renderInput={params => (
        <StyledTextField
          {...params}
          className="ml-w-full"
          label="Search input"
          margin="none"
          variant="outlined"
          size="small"
        />
      )}
    />
  </div>
);

export default Search;
