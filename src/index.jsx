import { useState } from "react";
import copy from "copy-to-clipboard";

export default function useCopyClipboard(text) {
  const [isCopied, setIsCopied] = useState(false);

  return [
    isCopied,
    () => {
      const didCopy = copy(text);
      setIsCopied(didCopy);
    }
  ];
}
