import bugApi from '../services/bugApi';

export function removeClosed()/* fixed */ {
    return function(dispatch, getState){
        const bugs = getState().bugsData.bugs;
        const closedBugs = bugs.filter(bug => bug.isClosed);
        const allPromises = closedBugs.map(closedBug => bugApi.remove(closedBug));
        Promise.all(allPromises)
            .then(() => {
                const action = { type : 'REMOVE_ALL', payload : closedBugs };
                dispatch(action);
            });
    }
}