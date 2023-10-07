/* eslint-disable no-alert */
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
} from '../../components/forms/formStyled';

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
      const response = await userAxios.registerUser(userData);

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
      throw new Error(error);
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
          style={{ marginBottom: '30px' }}
        />
        <Controller
          control={control}
          name="role"
          defaultValue="student"
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
                error={!!error}
                style={{ marginBottom: error ? '0px' : '30px' }}
              />
              {!!error && (
                <p style={{ color: 'red' }}>About is required and it can`t be more then 200 symbols.</p>
              )}
            </FormControlContainer>
          )}
        />
        <Button
        onClick={handleSubmit(onSubmit)}
        style={{ marginBottom: '20px' }}
        >Sign up</Button>
      </FormContainer>
    </Container>
  );
};

export default SignUpForm;
