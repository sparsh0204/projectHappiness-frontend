export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text

});

export const passwordEntered = () => ({
    type: 'PASSWORD_ACCEPTED'
});

export const conditionsAccepted = () => ({
    type: 'CONDITIONS_ACCEPTED'
});

export const resetCondition = () => ({
    type: 'RESET_CONDITION'
});

export const resetPasswordCondition = () => ({
    type: 'RESET_PASSWORD_CONDITION'

});