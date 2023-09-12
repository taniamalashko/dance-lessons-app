import { lessons } from "../../api/lessons/lessons";
import React, { useState } from "react";
import { Button, FavoriteButton, InfoButton, InfoContainer, InfoContainerButtons, InfoContainerName, VideoCard, VideoCardContainer, VideoPreview } from "./cardStyled";
import ModalComponent from "../modal/Modal";

function getVideoIdFromLink(link) {
  const url = new URL(link);
  const searchParams = new URLSearchParams(url.search);
  return searchParams.get("v");
}

function updateLessonFavoriteInList(list, key, newFavoriteValue){
  return list.map(lesson => {
    if (lesson.id === key){
      return {...lesson, favorite: newFavoriteValue}
    }
    return lesson
  })
}

const Card = ({ lesson, color, updateListsFunc, originalList, lessonsList }) => {
  const { id, name, link, favorite: lessonFavorite } = lesson;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const opts = {
    height: "200px",  
    width: "100%",  
    playerVars: {
      autoplay: 0,  
      controls: 1,  
      modestbranding: 1,  
      rel: 0,  
      showinfo: 1,  
    },
  };

  async function updateFavorite(newFavoriteValue){
    try {
      await lessons.put(id, { favorite: newFavoriteValue });

      const updatedOriginalList = updateLessonFavoriteInList(originalList, id, newFavoriteValue);
      const updatedLessonsList = updateLessonFavoriteInList(lessonsList, id, newFavoriteValue);

      updateListsFunc(updatedOriginalList, updatedLessonsList);
    } catch(err) {
      console.log(err);
    }
  }

  const openLessonLinkInNewTab = () => {
    window.open(link, '_blank');
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <VideoCardContainer>
        <VideoCard>
          <VideoPreview videoId={getVideoIdFromLink(link)} opts={opts}/>
          <InfoContainer color={color}>
            <InfoContainerName title={name}>
             {name.length > 30 ? name.substring(0, 30) + '...' : name}
            </InfoContainerName>
            <InfoContainerButtons>
              <Button><InfoButton onClick={openModal}>more_horiz</InfoButton></Button>
              <Button><InfoButton onClick={openLessonLinkInNewTab}>play_circle</InfoButton></Button>
              <Button><FavoriteButton favorite={lessonFavorite} onClick={() => updateFavorite(!lessonFavorite)}>favorite</FavoriteButton></Button>
            </InfoContainerButtons>
          </InfoContainer>
        </VideoCard>
        {isModalOpen && (
          <ModalComponent isOpen={isModalOpen} onRequestClose={closeModal} lesson={lesson} />
    )}
    </VideoCardContainer>
  );
};

export default Card;
