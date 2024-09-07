test("ciphers based on key", () => {
  expect(caesarCipher("hello", 3)).toBe("khoor");
  expect(caesarCipher("hello", 4)).toBe("lipps");
});
test("cipher preserves case", () => {
  expect(caesarCipher("hELlo", 3)).toBe("kHOor");
  expect(caesarCipher("heLLo", 4)).toBe("liPPs");
});
test ('cipher preserves punctuation',()=>{
  expect(caesarCipher("HeLLo WoRLd!", 3)).toBe("KhOOr ZrUOg!");
})
