import React from 'react';
import Modal from 'react-modal';
import {
  CloseButton,
  customStyles,
  ModalContainer,
  ModalTitle,
  ModalContent,
} from './modalStyled';

const ModalComponent = ({ isOpen, onRequestClose, lesson }) => {
  const {
    name, description, category, author, difficulty,
  } = lesson;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      ariaHideApp={false}
    >
      <ModalContainer>
        <ModalTitle>Подробная информация</ModalTitle>
        <ModalContent>
          <div>
            <label>Name:</label>
            <p>{name}</p>
          </div>
          <div>
            <label>Description:</label>
            <p>{description}</p>
          </div>
          <div>
            <label>Category:</label>
            <p>{category}</p>
          </div>
          <div>
            <label>Author:</label>
            <p>{author}</p>
          </div>
          <div>
            <label>Difficulty:</label>
            <p>{difficulty}</p>
          </div>
        </ModalContent>
        <CloseButton onClick={onRequestClose}>✖</CloseButton>
      </ModalContainer>
    </Modal>
  );
};

export default ModalComponent;
