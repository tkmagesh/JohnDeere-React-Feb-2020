import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';

import appStore from './store';
import BugTracker from './bug-tracker';
import Spinner from './spinner';

import axios from 'axios';
window['axios'] = axios;


ReactDOM.render(
    <Provider store={appStore}>
        <div>
            <h1>My App</h1>
            <hr />
            <Spinner/>
            <hr />
            <BugTracker></BugTracker>
        </div>
    </Provider>,
    document.getElementById('root')
);

/*
import { bindActionCreators } from 'redux';

import bugActionCreators from './bug-tracker/actions';
import spinnerActionCreators from './spinner/actions';


//creating action dispatchers
const bugActionDispatchers = bindActionCreators(bugActionCreators, appStore.dispatch);
const spinnerActionDispatchers = bindActionCreators(spinnerActionCreators, appStore.dispatch);

function renderApp() {
    //extraction data 
    const storeState = appStore.getState(),
        bugs = storeState.bugsData,
        spinnerValue = storeState.spinnerData;

    //pass the actionDispatchers and data to the component
    ReactDOM.render(
        <div>
            <h1>My App</h1>
            <hr/>
            <Spinner value={spinnerValue} {...spinnerActionDispatchers}/>
            <hr/>
            <BugTracker bugs={bugs} {...bugActionDispatchers}></BugTracker>
        </div>,
        document.getElementById('root')
    );
}
renderApp();
appStore.subscribe(renderApp);
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
