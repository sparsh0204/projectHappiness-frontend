
const storyExist = (stories, id) => {
    return stories.some(story => story.id === id)
};

export default storyExist;