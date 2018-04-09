
export const storyExist = (stories, id) => {
    return stories.some(story => story.id === id)
};

export const particularStory = (stories, id) => {
    return stories.filter(story => story.id === id)
};

