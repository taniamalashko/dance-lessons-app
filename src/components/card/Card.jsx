import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getVideoIdFromLink from '../../utils/getVideoIdFromLink';
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
import { lessonsThunks } from '../../store/services/lessons';

const Card = ({
  lesson, color, isUploaded,
}) => {
  const {
    // eslint-disable-next-line camelcase
    title, youtube_link, likes, id: lessonId,
  } = lesson;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlayerModalOpen, setIsPlayerModalOpen] = useState(false);
  const { isAuthorized, userData: { id: userId }, token: authToken } = useSelector((state) => state.authReducer);
  const [isFavorite, setIsFavorite] = useState(isAuthorized && likes.includes(userId));
  const dispatch = useDispatch();

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
  const toggleFavorite = async () => {
    try {
      await dispatch(lessonsThunks.toggleLessonLike({ lessonId, userId, authToken }));
      setIsFavorite(!isFavorite);
    } catch (err) {
      // eslint-disable-next-line no-unused-expressions, no-alert
      isAuthorized ? alert('Failed to like.') : alert('You must log in.');
    }
  };

  const handleDelete = async () => {
    try {
      await dispatch(lessonsThunks.deleteLesson({ lessonId, authToken }));
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    if (!isAuthorized) {
      setIsFavorite(false);
    } else {
      // eslint-disable-next-line no-unused-expressions
      setIsFavorite(likes.includes(userId));
    }
  }, [isAuthorized, likes, userId]);

  return (
    <VideoCardContainer>
        <VideoCard>
          <VideoPreview disabled videoId={getVideoIdFromLink(youtube_link)} opts={opts}/>
          <InfoContainer color={color}>
            <InfoContainerName title={title}>
             {title.length > 30 ? `${title.substring(0, 30)}...` : title}
            </InfoContainerName>
            <InfoContainerButtons>
              <Button><InfoButton onClick={() => setIsModalOpen(true)}>more_horiz</InfoButton></Button>
              <Button><InfoButton onClick={() => setIsPlayerModalOpen(true)}>play_circle</InfoButton></Button>
              {isUploaded && <Button><InfoButton onClick={ handleDelete }>delete</InfoButton></Button>}
              <Button><FavoriteButton
              favorite={isFavorite}
              onClick={toggleFavorite}>favorite
              </FavoriteButton></Button>
            </InfoContainerButtons>
          </InfoContainer>
        </VideoCard>

        {isModalOpen && (
          <ModalComponent
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          lesson={lesson} />
        )}

        {isPlayerModalOpen && (
          <PlayerModalComponent
          isOpen={isPlayerModalOpen}
          onRequestClose={() => setIsPlayerModalOpen(false)}
          lesson={lesson}
          toggleFavorite={toggleFavorite}
          isFavoriteProps={isFavorite}/>
        )}
    </VideoCardContainer>
  );
};

export default Card;
