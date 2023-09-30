import React from 'react';
import Card from '../card/Card';
import { Cards } from './lessonsCardStyled';

function LessonsCards({
  lessonsList,
  updateListsFunc,
  originalList,
}) {
  const backgroundColors = ['rgb(243, 243, 136)', 'rgb(241, 201, 208)', 'rgb(178, 178, 222)', 'rgb(178, 222, 184)'];

  return (
    <>
      <Cards>
        {lessonsList.map((lesson, index) => (
          <Card
            key={lesson.id}
            lesson={lesson}
            color={backgroundColors[index % backgroundColors.length]}
            updateListsFunc={updateListsFunc}
            originalList={originalList}
            lessonsList={lessonsList}
          />
        ))}
      </Cards>
    </>
  );
}

export default LessonsCards;
