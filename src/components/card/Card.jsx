import React, { useState } from 'react';
import getVideoIdFromLink from '../../utils/getVideoIdFromLink';
import { lessons } from '../../api/lessons/lessons';
import {
  Button,
  FavoriteButton,
  InfoButton,
  InfoContainer,
  InfoContainerButtons,
  InfoContainerName,
  VideoCard,
  VideoCardContainer,
  VideoPreview,
} from './cardStyled';
import ModalComponent from '../modal/Modal';
import PlayerModalComponent from '../PlayerModal/PlayerModal';

// Function to update the favorite status of a lesson in a list
function updateLessonFavoriteInList(list, key, newFavoriteValue) {
  return list.map((lesson) => {
    if (lesson.id === key) {
      return { ...lesson, favorite: newFavoriteValue };
    }
    return lesson;
  });
}

const Card = ({
  lesson, color, updateListsFunc, originalList, lessonsList,
}) => {
  const {
    id, title, youtube_link, favorite: lessonFavorite,
  } = lesson;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);

  const opts = {
    height: '200px',
    width: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      showinfo: 1,
    },
  };

  // Function to update the favorite status of a lesson
  async function updateFavorite(newFavoriteValue) {
    try {
      // Update the lesson's favorite status using the lessons API
      await lessons.put(id, { favorite: newFavoriteValue });

      // Update the original and lessons list with the new favorite status
      const updatedOriginalList = updateLessonFavoriteInList(originalList, id, newFavoriteValue);
      const updatedLessonsList = updateLessonFavoriteInList(lessonsList, id, newFavoriteValue);

      // Call the parent component's update function
      updateListsFunc(updatedOriginalList, updatedLessonsList);
    } catch (err) {
      alert('Not liked');
    }
  }

  // Function to open the modal for more information about the lesson
  const openModal = (setFunc) => {
    setFunc(true);
  };

  // Function to close the modal
  const closeModal = (setFunc) => {
    setFunc(false);
  };

  return (
    <VideoCardContainer>
        <VideoCard>
          <VideoPreview disabled videoId={getVideoIdFromLink(youtube_link)} opts={opts}/>
          <InfoContainer color={color}>
            <InfoContainerName title={title}>
             {title.length > 30 ? `${title.substring(0, 30)}...` : title}
            </InfoContainerName>
            <InfoContainerButtons>
              <Button><InfoButton onClick={() => { openModal(setIsModalOpen); }}>more_horiz</InfoButton></Button>
              <Button><InfoButton onClick={() => { openModal(setIsPlayerModalOpen); }}>play_circle</InfoButton></Button>
              <Button><FavoriteButton
              favorite={lessonFavorite}
              onClick={() => updateFavorite(!lessonFavorite)}>favorite
              </FavoriteButton></Button>
            </InfoContainerButtons>
          </InfoContainer>
        </VideoCard>

        {isModalOpen && (
          <ModalComponent
          isOpen={isModalOpen}
          onRequestClose={() => { closeModal(setIsModalOpen); }}
          lesson={lesson} />
        )}

        {isPlayerModalOpen && (
          <PlayerModalComponent
          isOpen={isPlayerModalOpen}
          onRequestClose={() => { closeModal(setIsPlayerModalOpen); }}
          lesson={lesson}
          updateFavorite={updateFavorite}/>
        )}
    </VideoCardContainer>
  );
};

export default Card;
