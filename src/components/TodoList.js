import "./TodoList.css";
import React, { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([
    { id: 1, text: "Go to gym", checked: true },
    { id: 2, text: "youtube", checked: false },
    { id: 3, text: "instagram", checked: true },
    { id: 4, text: "facebook", checked: true },
  ]);

  const addItem = () => {
    if (input === "") {
      return;
    }

    const newItem = {
      id: items.length + 1,
      text: input,
      checked: false,
    };

    setItems([...items, newItem]);
    setInput("");
  };

  const removeItem = () => {
    const updatedItems = items.filter((item) => !item.checked);
    setItems(updatedItems);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleCheckboxChange = (itemId) => {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    setItems(updatedItems);
  };

  return (
    <div id="container">
      <div className="controls">
        <h1>My Todo</h1>
        <input
          type="text"
          id="input"
          value={input}
          onChange={handleInputChange}
        />
        <br />
        <button type="button" id="add" onClick={addItem}>
          Add Todo
        </button>
        <button type="button" id="remove" onClick={removeItem}>
          Remove Todo
        </button>
      </div>
      <ul id="list">
        {items.map((item) => (
          <TodoItem
            key={item.id}
            item={item}
            onCheckboxChange={handleCheckboxChange}
          />
        ))}
      </ul>
    </div>
  );
};

const TodoItem = ({ item, onCheckboxChange }) => {
  const { id, text, checked } = item;

  return (
    <li className={checked ? "mycheck visual" : "mycheck"}>
      <input
        type="checkbox"
        id={`check-${id}`}
        checked={checked}
        onChange={() => onCheckboxChange(id)}
      />
      <label htmlFor={`check-${id}`}>{text}</label>
    </li>
  );
};

export default TodoList;
