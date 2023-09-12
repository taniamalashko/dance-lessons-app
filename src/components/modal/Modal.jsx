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
  const { name, description, category, author, difficulty } = lesson;

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
            <label>Имя:</label>
            <p>{name}</p>
          </div>
          <div>
            <label>Описание:</label>
            <p>{description}</p>
          </div>
          <div>
            <label>Категория:</label>
            <p>{category}</p>
          </div>
          <div>
            <label>Автор:</label>
            <p>{author}</p>
          </div>
          <div>
            <label>Сложность:</label>
            <p>{difficulty}</p>
          </div>
        </ModalContent>
        <CloseButton onClick={onRequestClose}>✖</CloseButton>
      </ModalContainer>
    </Modal>
  );
};

export default ModalComponent;
