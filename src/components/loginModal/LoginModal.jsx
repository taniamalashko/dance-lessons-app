import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { authThunks } from '../../store/services/auth';
import { saveUserDataToLocalStorage } from '../../utils/storage';
import LoadingComponent from '../LoadingContainer/LoadingComponent';
import {
  CloseButton,
  customStyles,
  ModalContainer,
  ModalTitle,
  ModalContent,
  TextInput,
  InputsContainer,
} from './loginModalStyled';

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { control, handleSubmit, getValues } = useForm();
  const {
    isAuthorized,
    token,
    error,
    userData,
  } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    setLoading(true);
    const userData = getValues();
    try {
      await dispatch(authThunks.logInThunk(userData));
    } catch (err) {
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthorized) {
      onRequestClose();
      navigate('/');
      saveUserDataToLocalStorage({ isAuthorized, token, userData });
    }
  }, [isAuthorized, navigate, onRequestClose, token, userData]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <ModalContainer>
        <ModalTitle>Log In</ModalTitle>
        <ModalContent>
          {!loading && (
            <InputsContainer>
             <TextInput
            fullWidth
            control={control}
            name='username'
            label='Username'
            style={{ marginTop: 'auto' }}
            />
            <TextInput
            fullWidth
            control={control}
            name='password'
            label='Password'
            isPassword={true}
            />
            </InputsContainer>
          )}
          {loading && (
            <LoadingComponent />
          )}
          { error && (
            <p style={{ color: 'red', textAlign: 'center' }}>Wrong password or username.</p>
          )}
          <NavLink to='/signup' style={{ display: 'block', width: '100%', marginBottom: '15px' }}>
            <Button
            style={{ color: '#e0c2ee', width: '100%' }}
            onClick={onRequestClose}>Sign Up
            </Button>
          </NavLink>
          <Button
          onClick={handleSubmit(onSubmit)}
          >Log In</Button>
        </ModalContent>
        <CloseButton onClick={onRequestClose}>✖</CloseButton>
      </ModalContainer>
    </Modal>
  );
};

export default LoginModal;
