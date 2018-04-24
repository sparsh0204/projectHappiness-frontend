const filtersReducerDefaultState= {
    text: '',
    password:false,
    condition:false,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'PASSWORD_ACCEPTED':
            return {
                ...state,
                password: true
            };
        case 'CONDITIONS_ACCEPTED':
            return {
                ...state,
                condition: true
            };
        case 'RESET_PASSWORD_CONDITION':
            return {
                ...state,
                password: false
            };
        case 'RESET_CONDITION':
            return {
                ...state,
                condition: false
            };
        default:
            return state;
    }
};

export default filtersReducer;
