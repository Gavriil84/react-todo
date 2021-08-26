import React from "react";

const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "36px"
  };
  return (
    <>
      <h1 style={contentStyle}>Hello World</h1>
      <p>How are you?</p>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};

export default App;
