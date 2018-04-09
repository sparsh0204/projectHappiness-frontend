import uuid from 'uuid';

// Add a new story
export const addStory = (story) => ({
    type: 'ADD_STORY',
    story: {
        id: uuid(),
        ...story
    }
});