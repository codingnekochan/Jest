import reverseString from "../code/reverse"

test('reverse single string',()=>{
    const input = 'string'
 expect(reverseString(input)).toBe('gnirts')
})
test ('reverse sentence',()=>{
    const input = 'Hello World'
    expect (reverseString(input)).toBe('dlroW olleH')
})