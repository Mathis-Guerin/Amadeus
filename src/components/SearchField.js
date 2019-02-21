import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Cross from '@material-ui/icons/Clear';

function SearchField(props) {
  return (
    <TextField
      className={props.classNameString}
      variant="outlined"
      type="Text"
      value={props.value}
      onChange={props.onChangeFunction}
      label={props.label}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton aria-label="Reset search" onClick={props.resetFunction}>
              <Cross />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

SearchField.propTypes = {
  value: PropTypes.any.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  resetFunction: PropTypes.func.isRequired,
};

export default SearchField;
