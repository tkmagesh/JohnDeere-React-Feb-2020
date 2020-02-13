function bugsReducer(currentState = [], action) {
    if (action.type === 'ADD_NEW') {
        const newState = [...currentState, action.payload];
        return newState;
    }
    if (action.type === 'REPLACE') {
        const bugToReplace = action.payload;
        const newState = currentState.map(existingBug => existingBug.id === bugToReplace.id ? bugToReplace : existingBug);
        return newState;
    }
    if (action.type === 'REMOVE_ALL') {
        const bugsToRemove = action.payload;
        const newState = currentState.filter(existingBug => !bugsToRemove.find(bug => bug.id === existingBug.id));
        return newState;
    }

    return currentState;
}
export default bugsReducer;