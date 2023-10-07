import React from 'react';
import { useSelector } from 'react-redux';
import FilterBar from '../../components/filterBar/FilterBar';
import LessonsCards from '../../components/LessonsCards/LessonsCards';

export default function MyUploadedLessons() {
  // State variables to manage lessons list, original list, loading state, and error
  const { lessons: lessonsList } = useSelector((state) => state.lessonsReducer);
  const { userData: { id: userId } } = useSelector((state) => state.authReducer);
  const uploadedLessons = lessonsList.filter((lesson) => lesson.author === userId);

  // Render the main content with filter button and cards
  return (
    <div>
      <FilterBar />
      <h2
      style={{ textAlign: 'center', color: 'grey', marginBottom: '50px' }}>UPLOADED LESSONS</h2>
      <LessonsCards
      isUploaded={true}
      lessonsList={uploadedLessons}
      />
    </div>
  );
}
