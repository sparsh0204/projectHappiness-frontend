import uuid from 'uuid';

// Add a new story
export const addResponse = (response) => ({
    type: 'ADD_RESPONSE',
    response: {
        id: uuid(),
        ...response
    }
});