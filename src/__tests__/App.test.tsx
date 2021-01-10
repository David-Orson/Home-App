/* npm install @types/jest @testing-library/react @testing-library/jest-dom jest ts-jest */

import React from "react";
import App from "../App";

test("Dummy test", () => {
  let result = 2 * 3;
  expect(result).toBe(6);

  let result2 = true;
  expect(result2).toBe(true);

  let truthy = true;
  expect(truthy).toBeTruthy();

  let falsy = false;
  expect(falsy).toBeFalsy();

  let object = { name: "David", age: 29 };
  expect(object).toEqual({ name: "David", age: 29 });

  let badNum = 7;
  expect(badNum).not.toBe(5);
});
