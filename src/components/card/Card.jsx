import { lessons } from "../../api/lessons/lessons";
import React, { Component } from "react";
import { 
  Button, 
  FavoriteButton, 
  InfoButton, 
  InfoContainer, 
  InfoContainerButtons, 
  InfoContainerName, 
  VideoCard, 
  VideoCardContainer, 
  VideoPreview 
} from "./cardStyled";
import ModalComponent from "../modal/Modal";

export default class Card extends Component{
  state = {
    isModalOpen: false,
  }

  constructor(){
    super();

    this.updateLessonFavoriteInList = this.updateLessonFavoriteInList.bind(this);
    this.getVideoIdFromLink = this.getVideoIdFromLink.bind(this);
    this.openLessonLinkInNewTab = this.openLessonLinkInNewTab.bind(this);
    this.updateFavorite = this.updateFavorite.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  getVideoIdFromLink(link){
    const url = new URL(link);
    const searchParams = new URLSearchParams(url.search);
    return searchParams.get("v");
  }

  updateLessonFavoriteInList(list, key, newFavoriteValue){
    return list.map(lesson => {
      if (lesson.id === key){
        return {...lesson, favorite: newFavoriteValue}
      }
      return lesson
    })
  }

  async updateFavorite(newFavoriteValue){

    const { lesson, updateListsFunc, originalList, lessonsList } = this.props;
    const { id } = lesson;

    try {
      await lessons.put(id, { favorite: newFavoriteValue });

      const updatedOriginalList = this.updateLessonFavoriteInList(originalList, id, newFavoriteValue);
      const updatedLessonsList = this.updateLessonFavoriteInList(lessonsList, id, newFavoriteValue);

      updateListsFunc(updatedOriginalList, updatedLessonsList);
    } catch(err) {
      console.log(err);
    }
  }

  openLessonLinkInNewTab = () => {
    const { lesson } = this.props;
    window.open(lesson.link, '_blank');
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render(){
    const { color, lesson } = this.props;
    const { isModalOpen } = this.state;
    const { name, favorite: lessonFavorite } = lesson;
    
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

    return (
      <VideoCardContainer>
        <VideoCard>
          <VideoPreview videoId={this.getVideoIdFromLink(lesson.link)} opts={opts} />
          <InfoContainer color={color}>
            <InfoContainerName title={name}>
              {name.length > 30 ? name.substring(0, 30) + '...' : name}
            </InfoContainerName>
            <InfoContainerButtons>
              <Button><InfoButton onClick={() => {this.openModal()}}>more_horiz</InfoButton></Button>
              <Button><InfoButton onClick={this.openLessonLinkInNewTab}>play_circle</InfoButton></Button>
              <Button><FavoriteButton favorite={lessonFavorite} onClick={() => this.updateFavorite(!lessonFavorite)}>favorite</FavoriteButton></Button>
            </InfoContainerButtons>
          </InfoContainer>
        </VideoCard>
        {isModalOpen && (
          <ModalComponent isOpen={isModalOpen} onRequestClose={this.closeModal} lesson={lesson} />
        )}
      </VideoCardContainer>
    );
  }
}
