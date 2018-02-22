import concatString from '../src/TestJest'

test(`should concat two strings`, () => {
    expect(concatString("Hello", "Test")).toEqual("HelloTest");
});
