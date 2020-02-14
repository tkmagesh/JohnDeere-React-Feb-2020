import { createStore, combineReducers, applyMiddleware } from 'redux';
import bugsReducer from '../bug-tracker/reducers';
import { spinnerReducer, filterReducer } from '../spinner/reducers';

const rootReducer = combineReducers({
    bugsData : bugsReducer,
    spinnerData : spinnerReducer,
    filterData : filterReducer
});

function loggerMiddleware(store){
    return function(next){
        return function(action){
            console.group(JSON.stringify(action));
            console.group('Before');
            console.log(store.getState());
            console.groupEnd();
            next(action);
            console.group('After');
            console.log(store.getState());
            console.groupEnd();
            console.groupEnd();
        }
    }
}
const appStore = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default appStore;
