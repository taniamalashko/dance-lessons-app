import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../card/Card';
import { Cards } from './lessonsCardStyled';
import { filterActions } from '../../store/services/filter';

function LessonsCards({
  lessonsList,
  isUploaded,
}) {
  const reversedLessonsList = [...lessonsList].reverse();
  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const { style: selectedStyle, difficulty: selectedDifficulty } = useSelector((state) => state.filterReducer);
  const dispatch = useDispatch();

  const filteredLessons = reversedLessonsList.filter((lesson) => (
    (!selectedStyle || lesson.category === selectedStyle)
    && (!selectedDifficulty || lesson.difficulty === selectedDifficulty)
  ));

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredLessons.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    dispatch(filterActions.setStyleFilter(''));
    dispatch(filterActions.setDifficultyFilter(''));
  }, []);

  const backgroundColors = ['rgb(243, 243, 136)', 'rgb(241, 201, 208)', 'rgb(178, 178, 222)', 'rgb(178, 222, 184)'];

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div
    style={{
      textAlign: 'center',
      minHeight: '700px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      <Cards>
        {currentItems.map((lesson, index) => (
          <Card
          isUploaded={isUploaded}
            key={lesson.id}
            lesson={lesson}
            color={backgroundColors[index % backgroundColors.length]}
            lessonsList={filteredLessons}
          />
        ))}
      </Cards>
      <div>
        <Pagination
          count={Math.ceil(filteredLessons.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          style={{ display: 'inline-block', marginBottom: '20px' }}
        />
      </div>
    </div>
  );
}

export default LessonsCards;
