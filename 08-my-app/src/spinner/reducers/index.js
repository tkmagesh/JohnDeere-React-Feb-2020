function spinnerReducer(currentState = 0, action) {
    if (action.type && action.type === 'UP') return currentState + action.payload;
    if (action.type && action.type === 'DOWN') return currentState - action.payload;
    return currentState;
}

export default spinnerReducer;