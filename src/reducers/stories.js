const storiesReducerDefaultState = [
    {story:'First story',isModerated:true,id:'asdbhbasd'},
    {story:'Second story',isModerated:true,id:'asasdsdasd'},
    {story:'First story',isModerated:true,id:'asdbsd'},
    {story:'Second story',isModerated:true,id:'assdsdasd'},
    {story:'First story',isModerated:true,id:'asdvcvbhbasd'},
    {story:'Second story',isModerated:true,id:'asasdsdavxcvsd'},
    {story:'First story',isModerated:true,id:'asdbhbxcvasd'},
    {story:'Second story',isModerated:true,id:'asasdsdasewsd'},
    {story:'First story',isModerated:true,id:'asdbhba435sd'},
    {story:'Second story',isModerated:true,id:'asasdsdrteasd'},
    {story:'First story',isModerated:true,id:'asdbhbabfgsd'},
    {story:'Second story',isModerated:true,id:'asasdsdabgfsd'},
    {story:'First story',isModerated:true,id:'asdbhbjyjasd'},
    {story:'Second story',isModerated:true,id:'asasdsdjyyreasd'},
];
const storiesReducer = (state = storiesReducerDefaultState, action) => {
    switch (action.type){
        // case 'SET_':
        //     return action.categories;
        default:
            return state;
    }
};

export default storiesReducer;