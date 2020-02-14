import { createStore, combineReducers } from 'redux';
import bugsReducer from '../bug-tracker/reducers';
import { spinnerReducer, filterReducer } from '../spinner/reducers';

const rootReducer = combineReducers({
    bugsData : bugsReducer,
    spinnerData : spinnerReducer,
    filterData : filterReducer
});

const appStore = createStore(rootReducer);

export default appStore;
