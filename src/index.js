import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './routers/AppRouter';
import configureStore from "./store/configureStore";
import 'semantic-ui-css/semantic.min.css';


const store = configureStore();

const App = () => (
    <Provider store={store}>
            <AppRouter/>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
