
export const storyExist = (stories, id) => {
    return stories.some(story => story.id === id)
};

export const particularStory = (stories, slug) => {
    return stories.filter(story => story.slug === slug)
};

export const getVisibleStories = (stories, {text}) => {
    return stories.filter(story => {
        const titleMatch = story.title.toLowerCase().includes(text.toLowerCase());
        const numberMatch = parseInt(text,10) === story.id;

        return titleMatch || numberMatch;
    })
};