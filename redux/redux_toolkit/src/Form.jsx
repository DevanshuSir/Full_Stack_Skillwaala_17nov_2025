import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addText, deleteText } from "./feature/form/formSlice";

const Form = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const textList = useSelector((state) => state.Form.list);

  function handleForm(e) {
    e.preventDefault();
    dispatch(addText({ userInput: text }));
  }

  return (
    <div>
      <form onSubmit={handleForm}>
        <input
          type="text"
          name=""
          id=""
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {textList.map((item, index) => (
          <div key={index}>
            {item.userInput}
            <button onClick={()=>{dispatch(deleteText(index))}}>❌</button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Form;
