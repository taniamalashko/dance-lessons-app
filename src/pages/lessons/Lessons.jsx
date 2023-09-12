import React, { useCallback, useEffect, useState } from "react";
import { lessons } from "../../api/lessons/lessons";
import Card from "../../components/card/Card";
import { Cards, FilterBar, FilterButt, LoadingContainer } from "./lessonsStyled";
import { DotLoader } from "react-spinners";

export default function Lessons(){
    const backgroundColors = ['rgb(243, 243, 136)', 'rgb(241, 201, 208)', 'rgb(178, 178, 222)', 'rgb(178, 222, 184)'];

    const [ lessonsList, setLessonsList ] = useState([]);
    const [ originalList, setOriginalList ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState('');

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

    useEffect(() => {
        fetchLessons();
    }, []);

    function toggleFavoriteVideos() {
        const newList = originalList === lessonsList 
            ? originalList.filter(lesson => lesson.favorite === true) 
            : originalList;
        setLessonsList(newList);
    }

    function updateLists(newOriginalList, newLessonsList){
        setOriginalList(newOriginalList);
        setLessonsList(newLessonsList);
    }

    if (loading) {
        return (
            <LoadingContainer>
                <DotLoader color={"#123abc"} loading={true} size={50} />
            </LoadingContainer>
        );
    } 
    if (error) return <p>Error!</p>;

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
