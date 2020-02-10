function parseArg(n){
    if (Array.isArray(n)) return add.apply(this, n);
    if (typeof n === 'function') return parseArg(n());
    return isNaN(n) ? 0 : parseInt(n);
}
function add(){
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments, 1));
}

//function invoked as a method of an obj
//    this -> obj

//function invoked as a function
//     this -> global (window in the browser)