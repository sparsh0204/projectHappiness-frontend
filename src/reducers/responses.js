const responsesReducerDefaultState = [
    {response:'First response',isModerated:true,id:'asdnnbhbasd',storyId:'asasdsdasd'},
    {response:'Second response',isModerated:true,id:'asasdsmmdasd',storyId:'asdbhbasd'},

];
const responsesReducer = (state = responsesReducerDefaultState, action) => {
    switch (action.type){
        case 'ADD_RESPONSE':
            return [
                ...state,
                action.response
            ];
        default:
            return state;
    }
};

export default responsesReducer;