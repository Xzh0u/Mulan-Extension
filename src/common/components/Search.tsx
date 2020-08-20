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
  const { video, dispatch } = useContext(videoContext);
  const { captions } = video;

  const captionStartTime = (caption: string) => {
    captions.context.map((text, idx) => {
      if (caption === text) {
        dispatch({
          type: 'setTime',
          payload: { time: captions.startTime[idx] + 1 },
        });
        document.querySelector('video')!.currentTime = captions.startTime[idx];
        document.querySelector('video')!.play();
      }
      // debugger;
    });
  };

  return (
    <div className="ml-w-48">
      <Autocomplete
        className="ml-text-left"
        id="searchBar"
        autoHighlight={true}
        clearOnEscape={true}
        autoComplete={true}
        onChange={(_, value) => {
          if (value) {
            captionStartTime(value);
          }
        }}
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
