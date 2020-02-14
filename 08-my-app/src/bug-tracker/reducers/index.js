const defaultState = {
    bugs : [],
    sortAttrName : '',
    sortDesc : false
};

function bugsReducer(currentState = defaultState, action) {
    if (action.type === 'ADD_NEW') {
        const newState = {...currentState, bugs : [...currentState.bugs, action.payload] };
        return newState;
    }
    if (action.type === 'REPLACE') {
        const bugToReplace = action.payload;
        const newState = {...currentState, bugs : currentState.bugs.map(existingBug => existingBug.id === bugToReplace.id ? bugToReplace : existingBug) };
        return newState;
    }
    if (action.type === 'REMOVE_ALL') {
        const bugsToRemove = action.payload;
        const newState = { ...currentState, bugs : currentState.bugs.filter(existingBug => !bugsToRemove.find(bug => bug.id === existingBug.id)) };
        return newState;
    }
    if (action.type === 'SORT_BUGS'){
        const { attrName, isDesc } = action.payload;
        return { ...currentState, sortAttrName : attrName, sortDesc : isDesc };
    }
    if (action.type === 'LOAD_BUGS'){
        return { ...currentState, bugs : action.payload };
    }
    if (action.type = 'REMOVE_ONE'){
        const bugToRemove = action.payload;
        const newState = { ...currentState, bugs: currentState.bugs.filter(existingBug => existingBug.id !== bugToRemove.id) };
        return newState;
    }

    return currentState;
}
export default bugsReducer;