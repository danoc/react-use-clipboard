import useClipboard from "react-use-clipboard";

/**
 * Provides the text to copy to `useClipboard`.
 */
const ExampleA = () => {
  const [isCopied, setCopied] = useClipboard("Text to copy", {
    // `isCopied` will go back to `false` after 1000ms.
    successDuration: 1000,
  });

  <button onClick={setCopied}>
    Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
  </button>;
};

/**
 * Provides the text to copy to `setCopied`.
 */
const ExampleB = () => {
  const [isCopied, setCopied] = useClipboard({
    // `isCopied` will go back to `false` after 1000ms.
    successDuration: 1000,
  });

  <button onClick={() => setCopied("Text to copy")}>
    Was it copied? {isCopied ? "Yes! 👍" : "Nope! 👎"}
  </button>;
};

export default function App() {
  return (
    <div>
      <h1>
        <code>react-use-clipboard</code>
      </h1>
      <h2>
        Passing text into <code>useClipboard</code>
      </h2>

      <ExampleA />

      <h2>
        Passing text into <code>setCopied</code>
      </h2>

      <ExampleB />
    </div>
  );
}
