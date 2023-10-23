import { useState, useEffect } from "react";
import copy from "copy-to-clipboard";

interface IOptions {
  /**
   * Reset the status after a certain number of milliseconds. This is useful
   * for showing a temporary success message.
   */
  successDuration?: number;
}

export default function useClipboard(
  text: string,
  options?: IOptions
): [boolean, () => void];

export default function useCopyClipboard(
  options?: IOptions
): [boolean, (text: string) => void];

export default function useCopyClipboard(...args: any): any {
  const defaultText = typeof args[0] === "string" ? args[0] : undefined;
  const options = defaultText ? args[1] : args[0];

  const [isCopied, setIsCopied] = useState(false);
  const successDuration = options && options.successDuration;

  useEffect(() => {
    if (isCopied && successDuration) {
      const id = setTimeout(() => {
        setIsCopied(false);
      }, successDuration);

      return () => {
        clearTimeout(id);
      };
    }
  }, [isCopied, successDuration]);

  return [
    isCopied,
    (text?: string) => {
      const textToCopy = text || defaultText;

      if (!textToCopy) {
        throw Error("Didn't provide text for `react-use-clipbaord` to copy.");
      }

      const didCopy = copy(textToCopy);
      setIsCopied(didCopy);
    },
  ];
}
