import React, { useCallback, useEffect, useState } from "react";
import { lessons } from "../../api/lessons/lessons";
import Card from "../../components/card/Card";
import { Cards, ErrorBox, ErrorContainer, ErrorImg, ErrorText, FilterBar, FilterButt, LoadingContainer } from "./lessonsStyled";
import { DotLoader } from "react-spinners";
import sad from "../../assets/sad.png"

export default function Lessons(){
    // Define background colors for the cards
    const backgroundColors = ['rgb(243, 243, 136)', 'rgb(241, 201, 208)', 'rgb(178, 178, 222)', 'rgb(178, 222, 184)'];

    // State variables to manage lessons list, original list, loading state, and error
    const [ lessonsList, setLessonsList ] = useState([]);
    const [ originalList, setOriginalList ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState('');

    // Function to fetch lessons data from an API
    const fetchLessons = useCallback(async () => {
        setLoading(true);

        try {
            const response = await lessons.get();
            setOriginalList(response);
            setLessonsList(response);
        } catch(err) {
            console.log(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    }, [setOriginalList, setLoading, setError]);

    // Fetch lessons data when the component mounts
    useEffect(() => {
        fetchLessons();
    }, []);

    // Function to toggle displaying favorite lessons
    function toggleFavoriteVideos() {
        const newList = originalList === lessonsList 
            ? originalList.filter(lesson => lesson.favorite === true) 
            : originalList;
        setLessonsList(newList);
    }

    // Function to update the original and lessons list
    function updateLists(newOriginalList, newLessonsList){
        setOriginalList(newOriginalList);
        setLessonsList(newLessonsList);
    }

    // Render loading spinner while data is being fetched
    if (loading) {
        return (
            <LoadingContainer>
                <DotLoader color={"#123abc"} loading={true} size={50} />
            </LoadingContainer>
        );
    } 

    // Render an error message if there's an error
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
    };

    // Render the main content with filter button and cards
    return (
        <>
            <FilterBar>
                <FilterButt onClick={() => (toggleFavoriteVideos())}>Show favorite lessons</FilterButt>
            </FilterBar>
            <Cards>
                {lessonsList.map((lesson, index) => (
                    <Card 
                    key={lesson.id} 
                    lesson={lesson} 
                    color={backgroundColors[index % backgroundColors.length]}
                    updateListsFunc={updateLists}
                    originalList={originalList}
                    lessonsList={lessonsList}
                    />
                ))}
            </Cards>
        </>
    );
}
