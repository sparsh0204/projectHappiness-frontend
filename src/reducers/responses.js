const responsesReducerDefaultState = [
    {
        response: 'First response', isModerated: true, id: 'asdnnbhbasd', storyId: 'asdbhbasd'
    },
    {response: 'Second response', isModerated: true, id: 'asasdsmmdasd', storyId: 'asdbhbasd'},
    {response: 'Downey Jr.\'s career prospects improved when he featured in the black comedy crime Kiss Kiss Bang Bang (2005), the mystery thriller Zodiac (2007), and the satirical action comedy Tropic Thunder (2008); for the latter he was nominated for an Academy Award for Best Supporting Actor. Beginning in 2008, Downey began portraying the role of Marvel Comics superhero Iron Man in the Marvel Cinematic Universe, appearing in several films as either the lead role, member of an ensemble cast, or in a cameo. Each of these films, with the exception of The Incredible Hulk, has grossed over $500 million at the box office worldwide; four of these—The Avengers, Avengers: Age of Ultron, Iron Man 3 and Captain America: Civil War—earned over $1 billion.', isModerated: true, id: 'asasdkhjgmdasd', storyId: 'asasdsqqsd'},
    {response: 'Downey Jr.\'s career prospects improved when he featured in the black comedy crime Kiss Kiss Bang Bang (2005), the mystery thriller Zodiac (2007), and the satirical action comedy Tropic Thunder (2008); for the latter he was nominated for an Academy Award for Best Supporting Actor. Beginning in 2008, Downey began portraying the role of Marvel Comics superhero Iron Man in the Marvel Cinematic Universe, appearing in several films as either the lead role, member of an ensemble cast, or in a cameo. Each of these films, with the exception of The Incredible Hulk, has grossed over $500 million at the box office worldwide; four of these—The Avengers, Avengers: Age of Ultron, Iron Man 3 and Captain America: Civil War—earned over $1 billion.',
        isModerated: true, id: 'asasdadasd', storyId: 'asasdsqqsd'},
    {response: 'Downey Jr.\'s career prospects improved when he featured in the black comedy crime Kiss Kiss Bang Bang (2005), the mystery thriller Zodiac (2007), and the satirical action comedy Tropic Thunder (2008); for the latter he was nominated for an Academy Award for Best Supporting Actor. Beginning in 2008, Downey began portraying the role of Marvel Comics superhero Iron Man in the Marvel Cinematic Universe, appearing in several films as either the lead role, member of an ensemble cast, or in a cameo. Each of these films, with the exception of The Incredible Hulk, has grossed over $500 million at the box office worldwide; four of these—The Avengers, Avengers: Age of Ultron, Iron Man 3 and Captain America: Civil War—earned over $1 billion.',
        isModerated: true, id: 'asoploasdadasd', storyId: 'asasdsqqsd'},

];
const responsesReducer = (state = responsesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_RESPONSE':
            return [
                ...state,
                action.response
            ];
        case 'SET_RESPONSE':
            return action.response;
        case 'REMOVE_RESPONSE':
            return [];
        default:
            return state;
    }
};

export default responsesReducer;