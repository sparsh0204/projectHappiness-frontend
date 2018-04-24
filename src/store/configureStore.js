import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import storiesReducer from "../reducers/stories";
import responsesReducer from '../reducers/responses';
import quotesReducer from "../reducers/quotes";
import filtersReducer from "../reducers/filters";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default () => {
    const store = createStore(
        combineReducers({
            // Reducers here
            stories: storiesReducer,
            responses: responsesReducer,
            quotes: quotesReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    );
    return store;
};
