# 📋 react-use-clipboard

[![NPM version](https://badgen.net/npm/v/react-use-clipboard)](https://www.npmjs.com/package/react-use-clipboard) [![Test build status](https://github.com/danoc/react-use-clipboard/workflows/Test/badge.svg)](https://github.com/danoc/react-use-clipboard/actions?query=workflow%3ATest) [![Bundle size](https://badgen.net/bundlephobia/min/react-use-clipboard?label=size)](https://bundlephobia.com/result?p=react-use-clipboard) [![Bundle size](https://badgen.net/bundlephobia/minzip/react-use-clipboard?label=gzip%20size)](https://bundlephobia.com/result?p=react-use-clipboard)

> A React Hook that provides copy to clipboard functionality.

## Install

You can install `react-use-clipboard` with NPM or Yarn.

```bash
npm install react-use-clipboard
```

```bash
yarn add react-use-clipboard
```

## Usage

Here's how to use `react-use-clipboard`:

```jsx
import useClipboard from "react-use-clipboard";

function App() {
  const [isCopied, setCopied] = useClipboard();

  return (
    <button onClick={() => setCopied("Text to copy")}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
  );
}
```

You can reset the `isCopied` value after a certain amount of time with the `successDuration` option.

```jsx
import useClipboard from "react-use-clipboard";

function App() {
  const [isCopied, setCopied] = useClipboard({
    // `isCopied` will go back to `false` after 1000ms.
    successDuration: 1000,
  });

  return (
    <button onClick={() => setCopied("Text to copy")}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
  );
}
```

This package only works in versions of React that support Hooks.
