import React, { useState, useEffect } from "react";

function Form({ addOrUpdateItem, itemToEdit }) {
  const [inputValue, setInputValue] = useState("");
  const [aviso, setAviso] = useState("");

  useEffect(() => {
    if (itemToEdit) {
      setInputValue(itemToEdit.value);
    } else {
      setInputValue("");
    }
  }, [itemToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() === "") {
      setAviso("No puedes agregar un elemento vacío.");
      return;
    }

    addOrUpdateItem(inputValue.trim());
    setInputValue("");
    setAviso("");
  };

  return (
    <>
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          className="task-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Escribe una tarea"
        />

        <button className="add-button" type="submit">
          {itemToEdit ? "Actualizar" : "Agregar"}
        </button>
      </form>

      {aviso && <p className="aviso">{aviso}</p>}
    </>
  );
}

export default Form;