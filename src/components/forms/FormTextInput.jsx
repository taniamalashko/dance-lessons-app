import React, { useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  InputContainer,
  TextInput,
  VisibilityOffPasswordIcon,
  VisibilityPasswordIcon,
} from './FormTextInputStyled';

const FormTextInput = ({
  isPassword,
  control,
  name,
  defaultValue = '',
  rules,
  label,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      rules={rules}
      render={(({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <InputContainer>
          <TextInput
            type={isPassword && showPassword ? 'password' : 'text'}
            label={label}
            value={value}
            inputRef={ref}
            onChange={onChange}
            margin='normal'
            error={!!error}
            helperText={error ? error.message : ''}
            {...props} />
          {isPassword && (
            showPassword
              ? <VisibilityPasswordIcon onClick={() => setShowPassword(!showPassword)}/>
              : <VisibilityOffPasswordIcon onClick={() => setShowPassword(!showPassword)}/>
          )}
        </InputContainer>
      ))}
    />
  );
};

export default FormTextInput;
