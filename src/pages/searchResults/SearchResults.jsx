import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import ErrorComponent from '../../components/errorComponent/ErrorComponent';
import LessonsCards from '../../components/LessonsCards/LessonsCards';

function SearchResults() {
  const url = useLocation();
  const query = new URLSearchParams(url.search);
  const searchQuery = query.get('query');

  const { lessons: lessonsList, error } = useSelector((state) => state.lessonsReducer);

  const filteredLessonsList = lessonsList
    .filter((lesson) => lesson.title.toLowerCase().includes(searchQuery.toLowerCase()));

  // Render an error message if there's an error
  if (error) {
    return (
            <ErrorComponent/>
    );
  }

  if (filteredLessonsList.length === 0) {
    return (
      <h2>Not found</h2>
    );
  }

  return (
    <LessonsCards
    lessonsList={filteredLessonsList}
    />
  );
}

export default SearchResults;
