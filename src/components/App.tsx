import "./App.css";
import { RenderInput } from "./RenderInput";
import { useCallback } from "react";
import { FrameworkList } from "./FrameworkList";
import { UseEffectRender } from "./UseEffectRender";
import { Counter } from "../features/counter/Counter";
import { MockServer } from "./MockServer";
import { Redux } from "./Redux";

export const frameworkList = [
  {
    id: 1,
    text: "React",
  },
  {
    id: 2,
    text: "Angular",
  },
  {
    id: 3,
    text: "Vue",
  },
];

function App() {
  const outputConsole = useCallback((text: string) => {
    console.log(text);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <RenderInput outputConsole={outputConsole} />
        <FrameworkList frameworkList={frameworkList} />
        <UseEffectRender />
        <MockServer />
        <Redux />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
