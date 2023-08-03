const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World, I am Queenette from Nigeria\nHow y'all doing?");
  });
});
