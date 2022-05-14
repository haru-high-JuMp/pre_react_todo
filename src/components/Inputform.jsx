import React, { useState } from "react";

export default function Inputform({ taskList, setTaskList }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(inputText);
    setTaskList([
      ...taskList,
      {
        id: taskList.length,
        text: inputText,
        completed: false,
      },
    ]);
    // console.log(taskList);

    setInputText("");
  };

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  return (
    <div className="inputForm">
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={inputText} />
        <button>
          <i className="fa-solid fa-square-plus"></i>
        </button>
      </form>
    </div>
  );
}
