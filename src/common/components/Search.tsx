import React, { useContext } from 'react';
import { videoContext } from '@src/common/context/VideoProvider';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 20px;
    background-color: #edf2f7;
  }
  .MuiOutlinedInput-notchedOutline {
    border-width: 3px;
    border-color: #edf2f7;
  }
`;

const Search: React.FC = () => {
  const { video } = useContext(videoContext);
  const { captions } = video;

  return (
    <div className="ml-w-3/5">
      <Autocomplete
        className="ml-text-left"
        id="searchBar"
        freeSolo
        options={captions.context}
        renderInput={params => (
          <StyledTextField
            {...params}
            className="ml-w-11-12 ml-my-2 ml-text-base"
            label="Search input"
            margin="none"
            variant="outlined"
            size="small"
          />
        )}
      />
    </div>
  );
};

export default Search;
