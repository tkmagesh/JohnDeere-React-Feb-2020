import bugApi from '../services/bugApi';

export function removeClosed()/* fixed */ {
    return function(dispatch, getState){
        const bugs = getState().bugsData.bugs;
        const closedBugs = bugs.filter(bug => bug.isClosed);
        /* 
        //Batch operation
        const allPromises = closedBugs.map(closedBug => bugApi.remove(closedBug));
        Promise.all(allPromises)
            .then(() => {
                const action = { type : 'REMOVE_ALL', payload : closedBugs };
                dispatch(action);
            }); 
        */

        //Individual bug removal
        closedBugs
            .forEach(closedBug => {
                bugApi
                    .remove(closedBug)
                    .then(function(){
                        const action = { type: 'REMOVE_ONE', payload : closedBug };
                        dispatch(action);
                    });
            });
    }
}