import { spinnerReducer } from './index';

test('UP action on Spinner Reducer', () => {
    //arrange
    const currentState = 0,
        up_action = { type : 'UP', payload : 2 },
        expectedState = 2;
    
    //act
    const resultState = spinnerReducer(currentState, up_action);

    //assert
    expect(resultState).toBe(expectedState);

})