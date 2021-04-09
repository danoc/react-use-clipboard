import useClipboard from "react-use-clipboard";

export default function App() {
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
