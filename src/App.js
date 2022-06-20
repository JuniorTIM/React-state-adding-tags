import React, { useState } from "react";
import "./styles.css";

function App() {
  const [text, setText] = useState("");
  const [disable, setDisable] = useState(false);
  const [arr, setArr] = useState([]);

  const handleText = (e) => {
    if (!e.target.value) {
      setDisable(true);
    }

    if (setText(e.target.value)) {
      setDisable(false);
    }
    setDisable(false);
  };

  function handleSubmit() {
    if (text !== '') {
      setArr([...arr, text]);
      console.log(arr);
    }
  }

  function handleDeleteTag (i) {
    setArr(arr.filter((item, index) => {
      if (index !== i) {
        return true
      }
      return false
    }))
  }

  return (
    <div className="App">
      <div className="container">
        <input
          value={text}
          onChange={handleText}
          className={!text ? "is-error" : "input"}
        ></input>
        <button
          onClick={handleSubmit}
          disabled={disable}
          className={text ? "button-on" : "button-off"}
        >
          Отправить
        </button>
      </div>
      <div className="error-message">
        {!text ? "Поле ввода не должно быть пустым" : ""}
      </div>
      <div className='contTags'>
      {arr.map((item, i) => {
        return <div className="tag">{item}<button onClick={() => handleDeleteTag(i)} className="delTag">x</button></div>
      })}
      </div>
    </div>
  );
}

export default App;
