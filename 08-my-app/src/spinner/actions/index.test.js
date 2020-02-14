import spinnerActionCreators from './index';

describe("Spinner Actions", function(){
    it("should return the UP action", function(){
        //Arrange
        const delta = 2,
            expectedResult = { type : 'UP', payload : delta };
        //Act
        const actualResult = spinnerActionCreators.up(delta);

        //Assert
        expect(actualResult.type).toBe(expectedResult.type);
        expect(actualResult.payload).toBe(expectedResult.payload);
    });
});