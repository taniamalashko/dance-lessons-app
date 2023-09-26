import React, { useCallback, useEffect, useState } from 'react';
import { lessons } from '../../api/lessons/lessons';
import LoadingComponent from '../../components/LoadingContainer/LoadingComponent';
import ErrorComponent from '../../components/errorComponent/ErrorComponent';
import LessonsCards from '../../components/LessonsCards/LessonsCards';

export default function Lessons() {
  // State variables to manage lessons list, original list, loading state, and error
  const [lessonsList, setLessonsList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Function to fetch lessons data from an API
  const fetchLessons = useCallback(async () => {
    setLoading(true);

    try {
      const response = await lessons.get();
      setOriginalList(response);
      setLessonsList(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [setOriginalList, setLoading, setError]);

  // Fetch lessons data when the component mounts
  useEffect(() => {
    fetchLessons();
  }, []);

  // Function to update the original and lessons list
  function updateLists(newOriginalList, newLessonsList) {
    setOriginalList(newOriginalList);
    setLessonsList(newLessonsList);
  }

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
    <LessonsCards
    lessonsList={lessonsList}
    originalList={originalList}
    updateListsFunc={updateLists}
    />
  );
}
