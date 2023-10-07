import React, { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { lessonsThunks } from '../../store/services/lessons';
import getVideoIdFromLink from '../../utils/getVideoIdFromLink';
import {
  Button,
  CloseButton,
  customStyles,
  FavoriteButton,
  ModalBar,
  ModalContainer,
  VideoPreview,
} from './playerModalStyled';

const PlayerModalComponent = ({
  isOpen,
  onRequestClose,
  lesson,
  isFavoriteProps,
}) => {
  const {
    // eslint-disable-next-line camelcase
    youtube_link, id: lessonId,
  } = lesson;

  const [isFavorite, setIsFavorite] = useState(isFavoriteProps);
  const { userData: { id: userId }, token: authToken } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const toggleFavorite = async () => {
    try {
      await dispatch(lessonsThunks.toggleLessonLike({ lessonId, userId, authToken }));
      setIsFavorite(!isFavorite);
    } catch (err) {
      throw new Error(err);
    }
  };

  const opts = {
    height: '100%',
    width: '100%',
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <ModalContainer>
        <VideoPreview videoId={getVideoIdFromLink(youtube_link)} opts={opts}/>
        <ModalBar>
          <CloseButton onClick={onRequestClose}>✖</CloseButton>
          <Button><FavoriteButton
          favorite={isFavorite}
          onClick={toggleFavorite}>
            favorite
          </FavoriteButton></Button>
        </ModalBar>
      </ModalContainer>
    </Modal>
  );
};

export default PlayerModalComponent;
