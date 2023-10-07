import React, { useState } from 'react';
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  FormContainer,
  FormControlContainer,
  FormTitle,
  Textarea,
} from '../../components/forms/formStyled';
import FormTextInput from '../../components/forms/FormTextInput';
import danceStyles from '../../utils/danceCategories';
import { lessonsThunks } from '../../store/services/lessons';
import LoadingComponent from '../../components/LoadingContainer/LoadingComponent';
import { lessonCreatingRules } from '../../utils/constants';

const CreateLessonForm = () => {
  const { token: authToken } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async () => {
    setLoading(true);
    setError(false);

    try {
      const lessonData = getValues();
      const data = { authToken, lessonData };
      await dispatch(lessonsThunks.addLesson(data));
      navigate('/');
    } catch (err) {
      setError(err);
      throw new Error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <FormContainer>
        <FormTitle>New Lesson</FormTitle>

        {!loading && (
          <>
        <FormTextInput
        fullWidth
        control={control}
        name='title'
        rules={lessonCreatingRules.title}
        label='Lesson name'
        />

        <FormTextInput
        fullWidth
        control={control}
        name='youtube_link'
        rules={lessonCreatingRules.link}
        label='Youtube link'
        style={{ marginBottom: '30px' }}
        />

        <Controller
          control={control}
          name="category"
          defaultValue="Ballet"
          render={({ field }) => (
            <FormControlContainer>
              <InputLabel htmlFor="category">Category</InputLabel>
              <Select
                {...field}
                style={{ marginBottom: '30px' }}
                label="Category"
                onChange={(e) => {
                  field.onChange(e);
                  setValue('category', e.target.value);
                }}
              >
                {danceStyles.map((category, index) => (
                  <MenuItem
                  value={category}
                  key={index}
                  >{category}
                  </MenuItem>
                ))}
              </Select>
            </FormControlContainer>
          )}
        />

        <Controller
          control={control}
          name="difficulty"
          defaultValue="Easy"
          render={({ field }) => (
            <FormControlContainer>
              <InputLabel htmlFor="difficulty">Difficulty</InputLabel>
              <Select
                {...field}
                label="Difficulty"
                onChange={(e) => {
                  field.onChange(e);
                  setValue('difficulty', e.target.value);
                }}
              >
                <MenuItem value="Easy">Easy</MenuItem>
                <MenuItem value="Medium">Medium</MenuItem>
                <MenuItem value="Hard">Hard</MenuItem>
              </Select>
            </FormControlContainer>
          )}
        />

        <Controller
          control={control}
          name="description"
          rules={lessonCreatingRules.description}
          render={({ field, fieldState: { error } }) => (
            <FormControlContainer
            >
              <Textarea
                {...field}
                minRows={5}
                placeholder="Description of your lesson..."
                error={!!error}
                style={{ marginBottom: error ? '0px' : '30px' }}
              />
              {!!error && (
                <p style={{ color: 'red' }}>Description is required and it can`t be more then 200 symbols.</p>
              )}
            </FormControlContainer>
          )}
        />
          </>
        )}

        {loading && (
          <LoadingComponent></LoadingComponent>
        )}

        {error && (
          <p style={{ color: 'red' }}>error</p>
        )}

        <Button
        onClick={handleSubmit(onSubmit)}
        style={{ marginTop: 'auto', marginBottom: '40px' }}>
        Create lesson</Button>
      </FormContainer>
    </Container>
  );
};

export default CreateLessonForm;
