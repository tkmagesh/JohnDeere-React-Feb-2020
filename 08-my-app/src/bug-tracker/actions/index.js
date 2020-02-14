/* 
export { addNew } from './addNew';
export { toggle } from './toggle';
export { removeClosed } from './removeClosed' 
*/

//the above will be imported as
//import * as bugActionCreators from './actions

import { addNew } from './addNew';
import { toggle } from './toggle';
import { removeClosed } from './removeClosed' 
import { sort } from './sort';
import { load } from './load';

export default { addNew, toggle, removeClosed, sort, load };

//the above will be imported as
// import bugActionCreators from './actions'