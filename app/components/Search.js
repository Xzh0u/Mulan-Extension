import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

const whatToSearch = [{ title: 'Apple' }, { title: 'Boy' }];

const Search = () => (
  <div className="ml-inset-0">
    <Autocomplete
      id="searchBar"
      freeSolo="true"
      options={whatToSearch.map(option => option.title)}
      renderInput={params => (
        <TextField
          {...params}
          className="ml-w-2-4 ml-inset-0"
          label="Search input"
          margin="dense"
          variant="outlined"
        />
      )}
    />
  </div>
);

export default Search;
