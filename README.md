# 📋 `react-use-clipboard`

> React hook that provides copy to clipboard functionality.

## Install

You can install `react-use-clipboard` with NPM or Yarn.

```bash
npm install react-use-clipboard --save-exact
```

```bash
yarn add react-use-clipboard --exact
```

We encourage pinning the version number until `react-use-clipboard` reaches `1.0.0`. We may ship breaking changes in `0.x.x` versions.

## Usage

Here's how to use `ClickableBox` to make a clickable SVG:

```jsx
import useClipboard from "react-use-clipboard";

function App() {
  const [isCopied, setCopied] = useClipboard("Text to copy");

  return (
    <button onClick={setCopied}>
      Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
    </button>
  );
}
```
