var StateManager = (function(){
    var _currentState = undefined,
        _subscribers = [],
        _reducer = undefined,
        _init_action = '@@INIT/ACTION';

    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        if (typeof callback === 'function')
            _subscribers.push(callback);
    }

    function triggerChange(){
        _subscribers.forEach(callback => callback());
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        triggerChange();
    }

    function createStore(reducer){
        _reducer = reducer;
        _currentState = reducer(_currentState, _init_action);
        var store = {
            getState,
            subscribe,
            dispatch
        };
        return store;
    }

    function bindActionCreators(actionCreators, dispatch) {
        var actionDispatchers = {};
        for (let methodName in actionCreators) {
            actionDispatchers[methodName] = function (...args) {
                const action = actionCreators[methodName](...args);
                dispatch(action);
            }
        }
        return actionDispatchers;
    }

    return { createStore, bindActionCreators };
})();