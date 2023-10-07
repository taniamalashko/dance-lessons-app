import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const InputContainer = styled('div')(() => ({
  width: '80%',
  margin: '0 auto',
  position: 'relative',
}));

export const TextInput = styled(TextField)(() => ({
  margin: '16px 0',
  width: '100%',
  display: 'flex',
  '& label': {
    zIndex: '0',
  },
}));

export const VisibilityPasswordIcon = styled(VisibilityIcon)(() => ({
  position: 'absolute',
  top: '30px',
  right: '10px',
  width: '40px',
  cursor: 'pointer',
  opacity: '0.5',
  transition: '0.3s ease',
  '&:hover': {
    opacity: 1,
  },
}));

export const VisibilityOffPasswordIcon = styled(VisibilityOffIcon)(() => ({
  position: 'absolute',
  top: '30px',
  right: '10px',
  width: '40px',
  cursor: 'pointer',
  opacity: '0.5',
  transition: '0.3s ease',
  '&:hover': {
    opacity: 1,
  },
}));
