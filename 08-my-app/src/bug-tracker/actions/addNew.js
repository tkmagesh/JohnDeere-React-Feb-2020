let currentBugId = 0;
export function addNew(bugName) {
    const newBug = { id: ++currentBugId, name: bugName, isClosed: false, createdAt: new Date() };
    const action = { type: 'ADD_NEW', payload: newBug };
    return action;
}