import React, { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { lessons } from '../../api/lessons/lessons';
import ErrorComponent from '../../components/errorComponent/ErrorComponent';
import LessonsCards from '../../components/LessonsCards/LessonsCards';
import LoadingComponent from '../../components/LoadingContainer/LoadingComponent';

function SearchResults() {
  const url = useLocation();
  const query = new URLSearchParams(url.search);
  const searchQuery = query.get('query');

  const [originalList, setOriginalList] = useState([]);
  const [lessonsList, setLessonsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Function to fetch lessons data from an API
  const fetchLessons = useCallback(async () => {
    setLoading(true);

    try {
      const response = await lessons.get();
      setOriginalList(response);

      const filteredLessons = response.filter((lesson) => lesson.name.toLowerCase().includes(searchQuery.toLowerCase()));
      setLessonsList(filteredLessons);
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

  useEffect(() => {
    if (searchQuery) {
      const filteredLessons = originalList.filter((lesson) => lesson.name.toLowerCase().includes(searchQuery.toLowerCase()));
      setLessonsList(filteredLessons);
    } else {
      // If searchQuery is empty, set lessonsList to the originalList
      setLessonsList(originalList);
    }
  }, [searchQuery, originalList]);

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

  if (lessonsList.length === 0) {
    return (
      <h2>Not found</h2>
    );
  }

  return (
    <LessonsCards
    lessonsList={lessonsList}
    originalList={originalList}
    updateListsFunc={updateLists}
    />
  );
}

export default SearchResults;
