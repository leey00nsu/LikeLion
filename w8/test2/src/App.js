import React, { useState, useMemo, useEffect, useCallback } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const clickHandler = useCallback(() => {
    setNumber((current) => {
      return current + 1;
    });
  }, [number]);

  const changeHandler = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text]
  );

  useEffect(() => {
    console.log("리렌더링");
  }, [number]);
  return (
    <div>
      <div>
        {number}
        <button onClick={clickHandler}>+</button>
      </div>
      <hr />
      <div>
        {text}
        <br />
        <input value={text} onChange={changeHandler}></input>
      </div>
    </div>
  );
};

export default App;
