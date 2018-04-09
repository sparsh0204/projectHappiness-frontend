
export const storyResponsesOnly = (responses,storyId) => {
    return responses.filter(response => response.storyId === storyId)
};