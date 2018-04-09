const storiesReducerDefaultState = [
    {story:'First story',isModerated:true,id:'asdbhbasd'},
    {story:'Second story',isModerated:true,id:'asasdsdasd'},

];
const storiesReducer = (state = storiesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_STORY':
            return [
                ...state,
                action.story
            ];
        default:
            return state;
    }
};

export default storiesReducer;