import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import TuneIcon from '@mui/icons-material/Tune';
import Popover from '@mui/material/Popover';
import Box from '@mui/material/Box';
import { MenuItem, Select } from '@mui/material';
import danceStyles from '../../utils/danceCategories';
import { filterActions } from '../../store/services/filter';

function FilterBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { style: selectedStyle, difficulty: selectedDifficulty } = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  const handleStyleChange = (e) => {
    const selectedStyle = e.target.value;
    dispatch(filterActions.setStyleFilter(selectedStyle));
  };

  const handleDifficultyChange = (e) => {
    const selectedDifficulty = e.target.value;
    dispatch(filterActions.setDifficultyFilter(selectedDifficulty));
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReset = () => {
    dispatch(filterActions.setStyleFilter(''));
    dispatch(filterActions.setDifficultyFilter(''));
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      padding: '3px 30px 3px 0px',
      borderBottom: '1px solid lightgrey',
      marginBottom: '20px',
    }}>
      <Box flexGrow={1} />
      <Button aria-describedby={id} onClick={handleClick}>
        <TuneIcon />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        PaperProps={{
          style: {
            minWidth: '300px',
          },
        }}
      >
        <Box p={2}>
          <p>Category:</p>
          <Select
          fullWidth
          value={selectedStyle}
          onChange={(e) => { handleStyleChange(e); }}>
            {danceStyles.map((style, index) => (
              <MenuItem
              key={index}
              value={style}>
              {style}</MenuItem>
            ))}
          </Select>
          <Box mt={2}>
          <p>Difficulty:</p>
            <Select
            fullWidth
            value={selectedDifficulty}
            onChange={(e) => { handleDifficultyChange(e); }}>
              <MenuItem value="Easy">Easy</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Hard">Hard</MenuItem>
            </Select>
          </Box>
          <Box mt={2} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={handleReset}>Сбросить</Button>
          </Box>
        </Box>
      </Popover>
    </div>
  );
}

export default FilterBar;
