import { Component } from "react";
import { lessons } from "../../api/lessons/lessons";
import Card from "../../components/card/Card";
import { 
    Cards, 
    ErrorBox, 
    ErrorContainer, 
    ErrorImg, 
    ErrorText, 
    FilterBar, 
    FilterButt, 
    LoadingContainer 
} from "./lessonsStyled";
import { DotLoader } from "react-spinners";
import sad from "../../assets/sad.png"

export default class Lessons extends Component {
    state = {
        lessonsList: [],
        originalList: [],
        loading: true,
        error: '',
    }

    constructor(){
        super();

        this.toggleFavoriteVideos = this.toggleFavoriteVideos.bind(this);
    };

    async fetchLessons(){
        this.setState({ loading: true });

        try {
            const response = await lessons.get();
            this.setState({ lessonsList: response, originalList: response});
        } catch(err){
            console.log(err);
            this.setState({ error: err });
        } finally {
            this.setState({ loading: false });
        }
    }

    componentDidMount() {
        this.fetchLessons();
    }

    toggleFavoriteVideos() {
        const { originalList, lessonsList } = this.state;
        const newList = originalList === lessonsList ? originalList.filter((lesson) => lesson.favorite === true) : originalList;
        this.setState({ lessonsList: newList });
    }

    updateLists(newOriginalList, newLessonsList) {
        this.setState({ originalList: newOriginalList, lessonsList: newLessonsList });
    }

    render(){
        const backgroundColors = ['rgb(243, 243, 136)', 'rgb(241, 201, 208)', 'rgb(178, 178, 222)', 'rgb(178, 222, 184)'];
        const { lessonsList, originalList, loading, error } = this.state;

        if (loading) {
            return (
                <LoadingContainer>
                    <DotLoader color={"#123abc"} loading={true} size={50} />
                </LoadingContainer>
            );
        } 
        if (error) {
            return (
                <ErrorContainer>
                    <ErrorBox>
                        <ErrorImg><img src={sad} alt="Error" /></ErrorImg>
                        <ErrorText>
                            <h2>OOPS...</h2>
                            <p>Something went wrong</p>
                        </ErrorText>
                    </ErrorBox>
                </ErrorContainer>
            )
        }
        return (
            <>
                <FilterBar>
                    <FilterButt onClick={this.toggleFavoriteVideos}>Show favorite lessons</FilterButt>
                </FilterBar>
                <Cards>
                    {this.state.lessonsList.map((lesson, index) => (
                        <Card 
                        key={lesson.id} 
                        lesson={lesson} 
                        color={backgroundColors[index % backgroundColors.length]}
                        updateListsFunc={(newOriginalList, newLessonsList) => this.updateLists(newOriginalList, newLessonsList)}                        
                        originalList={originalList}
                        lessonsList={lessonsList}
                        />
                    ))}
                </Cards>
            </>
        );
    }
}
