import capitalizeFirstLetter from "../code/capitalize"

test('capitalize first character in a string',()=>{
    let input = 'flex'
    expect(capitalizeFirstLetter(input)).toBe('Flex')
})