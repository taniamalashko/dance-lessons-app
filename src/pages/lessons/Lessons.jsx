import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingComponent from '../../components/LoadingContainer/LoadingComponent';
import ErrorComponent from '../../components/errorComponent/ErrorComponent';
import LessonsCards from '../../components/LessonsCards/LessonsCards';
import { lessonsThunks } from '../../store/services/lessons';
import FilterBar from '../../components/filterBar/FilterBar';

export default function Lessons() {
  // State variables to manage lessons list, original list, loading state, and error
  // eslint-disable-next-line max-len
  const { lessons: lessonsList, isInitialized } = useSelector((state) => state.lessonsReducer);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Function to fetch lessons data from an API
  const fetchLessons = useCallback(async () => {
    setLoading(true);

    try {
      await dispatch(lessonsThunks.fetchLessonsThunk());
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  // Fetch lessons data when the component mounts
  useEffect(() => {
    if (!isInitialized) {
      fetchLessons();
    }
  }, []);

  // Render loading spinner while data is being fetched
  if (loading) {
    return (
            <LoadingComponent/>
    );
  }

  // Render an error message if there's an error
  if (error) {
    return (
            <ErrorComponent/>
    );
  }

  // Render the main content with filter button and cards
  return (
    <>
    <FilterBar />
    <LessonsCards
    lessonsList={lessonsList}
    />
    </>
  );
}
