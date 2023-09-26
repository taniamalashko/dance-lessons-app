import React from 'react';
import Modal from 'react-modal';
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
  updateFavorite,
}) => {
  const {
    link, favorite,
  } = lesson;

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
        <VideoPreview videoId={getVideoIdFromLink(link)} opts={opts}/>
        <ModalBar>
          <CloseButton onClick={onRequestClose}>✖</CloseButton>
          <Button><FavoriteButton
          favorite={favorite}
          onClick={() => updateFavorite(!favorite)}>
            favorite
          </FavoriteButton></Button>
        </ModalBar>
      </ModalContainer>
    </Modal>
  );
};

export default PlayerModalComponent;
