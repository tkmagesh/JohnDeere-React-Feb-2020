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
    return function(dispatch){
        //const bugs = getLocalBugs();
        var p = axios.get('http://localhost:3030/bugs')
        var p2= p.then(function(response){ 
            return response.data;
        });
        p2.then(function(bugs){
            const action = { type: 'LOAD_BUGS', payload: bugs };
            dispatch(action);
        })
    }    
}