import axios from "axios/index";

export const setQuotes = (quotes) => ({
    type: 'SET_QUOTES',
    quotes
});

export const startSetQuotes = () => {
    return (dispatch) => {
        return axios.get('http://127.0.0.1:8000/api/blogs/?format=json').then((snapshot) => {
            console.log(snapshot);
            dispatch(setQuotes(snapshot.data))
        }).catch(function (error) {
            console.log(error);
        });
    };
};