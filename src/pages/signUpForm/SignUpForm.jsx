import {
  Button, InputLabel, MenuItem, Select,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { userAxios } from '../../api/userManagement/users';
import FormTextInput from '../../components/forms/FormTextInput';
import { registrationRules } from '../../utils/constants';
import {
  Container,
  FormContainer,
  FormControlContainer,
  FormTitle,
  Textarea,
} from './styledSignUpForm';

const SignUpForm = () => {
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      const userData = getValues();
      console.log(userData);
      const response = await userAxios.registerUser(userData);
      console.log(response);

      if (response.first_name) {
        alert('Registration was successful');
        navigate('/');
      } else if (response.username) {
        alert('A user with that username already exists.');
      } else {
        alert('Registration failed');
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <FormContainer>
        <FormTitle>SIGN UP</FormTitle>
        <FormTextInput
        fullWidth
        control={control}
        name='first_name'
        rules={registrationRules.firstName}
        label='First name'
        />
        <FormTextInput
          fullWidth
          control={control}
          name='last_name'
          rules={registrationRules.lastName}
          label='Last name'
        />
        <FormTextInput
          fullWidth
          control={control}
          name='username'
          rules={registrationRules.userName}
          label='Username'
        />
        <FormTextInput
          fullWidth
          control={control}
          name='password'
          rules={registrationRules.password}
          label='Password'
          isPassword={true}
        />
        <Controller
          control={control}
          name="role"
          defaultValue="Student"
          render={({ field }) => (
            <FormControlContainer>
              <InputLabel htmlFor="role">Role</InputLabel>
              <Select
                {...field}
                label="Role"
                onChange={(e) => {
                  field.onChange(e);
                  setValue('role', e.target.value);
                }}
              >
                <MenuItem value="teacher">Teacher</MenuItem>
                <MenuItem value="student">Student</MenuItem>
              </Select>
            </FormControlContainer>
          )}
        />
        <Controller
          control={control}
          name="about"
          defaultValue=""
          rules={registrationRules.about}
          render={({ field, fieldState: { error } }) => (
            <FormControlContainer>
              <Textarea
                {...field}
                minRows={5}
                placeholder="Tell us about yourself..."
                onChange={(e) => {
                  field.onChange(e);
                  setValue('about', e.target.value);
                }}
                error={!!error}
                helperText={error ? error.message : ''}
              />
            </FormControlContainer>
          )}
        />
        <Button onClick={handleSubmit(onSubmit)}>Sign up</Button>
      </FormContainer>
    </Container>
  );
};

export default SignUpForm;
