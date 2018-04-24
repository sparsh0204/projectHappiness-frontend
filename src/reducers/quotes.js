const quotesReducerDefaultState = [
    {story:'First quote',isModerated:true,id:'sappppdasdasd'},
    {story:'Second quote',isModerated:true,id:'asaskjlkjljkljdsdasd'},

];
const quotesReducer = (state = quotesReducerDefaultState, action) => {
    switch (action.type){

        case 'SET_QUOTES':
            return action.quotes;

        case 'ADD_QUOTE':
            return [
                ...state,
                action.quote
            ];

        default:
            return state;
    }
};

export default quotesReducer;