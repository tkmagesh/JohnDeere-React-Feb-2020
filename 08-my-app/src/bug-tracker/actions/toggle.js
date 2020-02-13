export function toggle(bugToToggle) {
    const toggledBug = { ...bugToToggle, isClosed: !bugToToggle.isClosed };
    const action = { type: 'REPLACE', payload: toggledBug };
    return action;
}