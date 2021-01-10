/* import React from "react"; */
import { render, fireEvent, waitFor } from "@testing-library/react";

import Login from "../../pages/Login";

describe("<Login />", () => {
  test("dummy", async () => {
    let result = 1;
    expect(result).toBe(1);
  });

  test("submit button exists and can be fired", async () => {
    const { getByTestId } = render(<Login />);

    const submitButton = getByTestId("submit-button");
    fireEvent.click(submitButton);
  });
});
