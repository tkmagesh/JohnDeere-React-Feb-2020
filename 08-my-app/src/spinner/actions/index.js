const spinnerActionCreators = {
    up(delta) {
        const action = { type: 'UP', payload: delta };
        return action;
    },
    down(delta) {
        const action = { type: 'DOWN', payload: delta };
        return action;
    },
    applyFilter(toApply = false){
        const action = { type : 'APPLY_FILTER', payload : toApply}
        console.log(action);
        return action;
    }
};
export default spinnerActionCreators;