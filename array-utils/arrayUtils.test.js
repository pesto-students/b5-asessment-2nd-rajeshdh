// Write your own test cases.
const { forEach, map, filter, reduce } = require("./arrayUtils.js");

Array.prototype._forEach = forEach;
Array.prototype._map = map;
Array.prototype._reduce = reduce;
Array.prototype._filter = filter;

let list;
beforeEach(() => {
  list = Array(1, 2, 3, 4, 5);
});

describe("forEach", () => {
  it("should be a function", () => {
    expect(typeof list._forEach).toBe("function");
  });

  let counter = 0;
  it("should execute callback function on all elements", () => {
    list._forEach(ele => (counter += ele));
    expect(counter).toBe(15);
  });
});

describe("map", () => {
  it("should be a function", () => {
    expect(typeof list._map).toBe("function");
  });

  it("should iterate through each element, apply the function and return an array", () => {
    const updatedArray = list._map(item => item + 1);
    expect(updatedArray).toEqual([2, 3, 4, 5, 6]);
  });
});

describe("filter", () => {
  it("should be a function", () => {
    expect(typeof list._filter).toBe("function");
  });

  it("should filter the array using a condition", () => {
    const updatedArray = list._filter(item => item > 3);
    expect(updatedArray).toEqual([4, 5]);
  });
});

describe("reduce", () => {
  it("should be a function", () => {
    expect(typeof list._reduce).toBe("function");
  });

  it("should reduce the array items to one return value based on provided function, and accumulator", () => {
    const reducedValue = list._reduce((acc, item) => acc + item);
    expect(reducedValue).toBe(15);
  });
});