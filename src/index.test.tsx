import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import useClipboard from "./";

afterEach(cleanup);

test("display sucess message if the copy worked", () => {
  const Component = () => {
    const [isCopied, setCopied] = useClipboard("Text to copy");

    return (
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
