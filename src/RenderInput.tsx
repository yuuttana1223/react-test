import { ChangeEvent, FunctionComponent, useCallback, useState } from "react";

type Props = {
  outputConsole: (text: string) => void;
};

export const RenderInput: FunctionComponent<Props> = ({ outputConsole }) => {
  const [text, setText] = useState("");

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
    if (text !== "") {
      outputConsole(text);
    }
  }, [outputConsole, text]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter"
        value={text}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Console</button>
    </div>
  );
};
