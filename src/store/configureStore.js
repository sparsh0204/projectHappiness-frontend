import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import storiesReducer from "../reducers/stories";
import responsesReducer from '../reducers/responses';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const store = createStore(
        combineReducers({
            // Reducers here
            stories: storiesReducer,
            responses: responsesReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    );
    return store;
};
