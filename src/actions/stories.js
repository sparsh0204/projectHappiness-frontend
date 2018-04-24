// import uuid from 'uuid';
import axios from 'axios';

// Add a new story
export const addStory = (story) => ({
    type: 'ADD_STORY',
    story
});
export const setStory = (story) => ({
    type: 'SET_STORY',
    story
});

export const startSetStory = () => {
    return (dispatch) => {
        return axios.get('http://127.0.0.1:8000/api/story/?format=json').then((snapshot) => {
            // console.log(snapshot);
            dispatch(setStory(snapshot.data))
        }).catch(function (error) {
            console.log(error);
        });
    };
};

export const startPostStory = (story) => {
    return (dispatch) => {
        return axios.post('http://127.0.0.1:8000/api/story/?format=json',{...story}).then((snapshot) =>{
            console.log(snapshot);
            dispatch(addStory(story))
        }).catch(function (error) {
            console.log(error)
        })
    }
};