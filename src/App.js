import React from "react";

const App = () => {
  const [text, setText] = React.useState("Hello World!");
  const changeText = () => {
    if (text === "Hello World!") {
      setText("Hi Earth!");
    } else {
      setText("Hello World!");
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <div className="wrap">
        <button type="button" className="btn" onClick={changeText}>
          Change Text
        </button>
      </div>
    </>
  );
};

export default App;
