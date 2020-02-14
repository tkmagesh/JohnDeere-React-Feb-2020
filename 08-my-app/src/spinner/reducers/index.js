export function spinnerReducer(currentState = 0, action) {
    if (action.type && action.type === 'UP') return currentState + action.payload;
    if (action.type && action.type === 'DOWN') return currentState - action.payload;
    return currentState;
}

const defaultFilterState = {
    applyFilter : false
}
export function filterReducer(currentState = defaultFilterState, action){
    if (action.type === 'APPLY_FILTER'){
        return { ...currentState, applyFilter : action.payload }
    }
    return currentState;
}

//export default { spinnerReducer, filterReducer };