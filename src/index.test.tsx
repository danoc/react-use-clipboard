import React from "react";
import { cleanup, fireEvent, render, act } from "@testing-library/react";
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

describe("successDuration", () => {
  test("`isCopied` becomes false after `successDuration` time ellapses", () => {
    jest.useFakeTimers();
    const successDuration = 1000;

    const Component = () => {
      const [isCopied, setCopied] = useClipboard("Text to copy", {
        successDuration
      });

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

    // Fast-forward half-way
    jest.advanceTimersByTime(successDuration / 2);

    expect(button.textContent).toBe("Yes");

    act(() => {
      // Go to the end
      jest.advanceTimersByTime(successDuration / 2);
    });

    expect(button.textContent).toBe("Nope");
  });

  test("`isCopied` is always true if `successDuration` is not provided", () => {
    jest.useFakeTimers();

    const Component = () => {
      const [isCopied, setCopied] = useClipboard("Text to copy", {});

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

    // Fast-forward half-way
    jest.runAllTimers();

    expect(button.textContent).toBe("Yes");
  });
});
