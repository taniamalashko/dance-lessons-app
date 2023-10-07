import styled from '@emotion/styled';
import { FormControl, TextareaAutosize } from '@mui/material';

export const Container = styled('div')(() => ({
  minHeight: '500px',
}));

export const FormContainer = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '500px',
  minHeight: '600px',
  border: '1px solid lightgrey',
  borderRadius: '20px',
  margin: '0 auto 30px',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
}));

export const FormTitle = styled('h2')(() => ({
  textAlign: 'center',
  color: 'grey',
}));

export const FormControlContainer = styled(FormControl)(() => ({
  width: '80%',
  margin: '0 auto',
  '& label': {
    zIndex: 0,
  },
}));

export const Textarea = styled(TextareaAutosize)(() => ({
  margin: '30px 0',
  resize: 'none',
  padding: '10px',
}));
