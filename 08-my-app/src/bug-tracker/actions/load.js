import axios from 'axios';
function getLocalBugs(){
    return [
        {
            id : 1,
            name : 'Bug - 1',
            isClosed : false,
            createdAt : new Date(),
        },
        {
            id: 2,
            name: 'Bug - 2',
            isClosed: true,
            createdAt: new Date(),
        }
    ]
}
export function load(){
    const bugs = getLocalBugs();
    const action = { type : 'LOAD_BUGS', payload : bugs };
    return action;
}