export function removeClosed(bugs)/* to be fixed */ {
    const closedBugs = bugs.filter(bug => bug.isClosed);
    const action = { type: 'REMOVE_ALL', payload: closedBugs };
    return action;
}