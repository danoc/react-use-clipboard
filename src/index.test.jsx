import React from "react";
import { cleanup, render, fireEvent } from "react-testing-library";
import useClipboard from "./index";

afterEach(cleanup);

test("display sucess message if the copy worked", () => {
  const Component = () => {
    const [isCopied, setCopied] = useClipboard("Text to copy");

    return (
      // eslint-disable-next-line react/button-has-type
      <button onClick={setCopied} data-testid="btn-example">
        {isCopied ? "Yes" : "Nope"}
      </button>
    );
  };

  const { getByTestId } = render(<Component />);
  const button = getByTestId("btn-example");

  expect(button.textContent).toBe("Nope");

  fireEvent.click(button);

  expect(button.textContent).toBe("Yes");
});
