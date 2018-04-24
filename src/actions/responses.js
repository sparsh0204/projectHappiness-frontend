// import uuid from 'uuid';
import axios from 'axios'

// Add a new story
export const addResponse = (response) => ({
    type: 'ADD_RESPONSE',
    response
});

export const setResponse = (response) => ({
    type: 'SET_RESPONSE',
    response
});

export const removeResponses = () => ({
    type: 'REMOVE_RESPONSE'
});

export const startSetResponse = (id) => {
    return (dispatch) => {
        return axios.get(`http://127.0.0.1:8000/api/responses/${id}/?format=json`).then((snapshot) => {
            // console.log(snapshot);
            // console.log(id);
            dispatch(setResponse(snapshot.data))
        }).catch(function (error) {
            console.log(error);
        });
    };
};

export const startPostResponse = (response) => {
    return (dispatch) => {
        console.log({...response});
        return axios.post('http://127.0.0.1:8000/api/response/?format=json', {...response}).then((snapshot) => {
            console.log(snapshot);
            dispatch(addResponse(response))
        }).catch(function (error) {
            console.log(error);
        });
    };
};