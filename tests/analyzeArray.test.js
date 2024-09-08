// test for average of an array
// test for smallest number in array
//  test for largest number in array
// test for length of array
import analyzeArray from "../code/analyzeArray"

test('return the average,smallest number, largest number, and length of array in an object',()=>{
    const inputArray= [5,1,3,2,8,10,6]
    const expectedOutput = {
        average : 5,
        min : 1,
        max : 10,
       length : 7
    }
    expect(analyzeArray(inputArray)).toEqual(expectedOutput)
})