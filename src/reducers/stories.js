const storiesReducerDefaultState = [
    // {
    //     story: 'First story',
    //     isModerated: true,
    //     id: 'asdbhbasd',
    //     title: 'First story',
    //     number: 1,
    //     responsesRequired: true
    // },
    // {
    //     story: 'Second story',
    //     isModerated: true,
    //     id: 'asasdsdasd',
    //     title: 'second story',
    //     number: 2,
    //     responsesRequired: true
    // },
    // {
    //     story: 'Third story',
    //     isModerated: true,
    //     id: 'asasdsddddasd',
    //     title: 'third story',
    //     number: 3,
    //     responsesRequired: false
    // },
    // {
    //     story: 'Robert John Downey Jr. (born April 4, 1965)[2] is an American actor and singer. His career has included critical and popular success in his youth, followed by a period of substance abuse and legal troubles, and a resurgence of commercial success in middle age. For three consecutive years from 2012 to 2015, Downey topped the Forbes list of Hollywood\'s highest-paid actors, making an estimated $80 million in earnings between June 2014 and June 2015.[3][4]\n' +
    //     '\n' +
    //     'Making his acting debut at the age of five, appearing in his father\'s film Pound (1970), Downey Jr. appeared in roles associated with the Brat Pack, such as the teen sci-fi comedy Weird Science (1985) and the drama Less Than Zero (1987). He starred as the title character in the 1992 film Chaplin, which earned him a nomination for the Academy Award for Best Actor and won him the BAFTA Award for Best Actor in a Leading Role. After being released in 2000 from the California Substance Abuse Treatment Facility and State Prison where he was on drug charges, Downey joined the cast of the TV series Ally McBeal playing Calista Flockhart\'s love interest. This earned him a Golden Globe Award. His character was written out when Downey was fired after two drug arrests in late 2000 and early 2001. After his last stay in a court-ordered drug treatment program, Downey achieved sobriety.',
    //     isModerated: true,
    //     id: 'asasdsqqsd',
    //     title: 'Robert Downey Jr.',
    //     number: 4,
    //     responsesRequired: true
    // },

];
const storiesReducer = (state = storiesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_STORY':
            return [
                ...state,
                ...action.story
            ];
        case 'SET_STORY':
            return action.story;
        default:
            return state;
    }
};

export default storiesReducer;