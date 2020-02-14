export function sort(attrName, isDesc){
    const action = { type : 'SORT_BUGS', payload : { attrName, isDesc }};
    return action;
}