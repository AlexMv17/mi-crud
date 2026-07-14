import React from "react";

function Item({ item, deleteItem, editItem, toggleCompleted }) {
  return (
    <li className="task-item">
      <span className={item.completed ? "completed" : ""}>
        {item.value}
      </span>

      <div>
        <button className="edit-button" onClick={() => editItem(item)}>Editar</button>
        <button className="delete-button" onClick={() => deleteItem(item.id)}>Eliminar</button>
        <button className="complete-button"onClick={() => toggleCompleted(item.id)}>{item.completed ? "Pendiente" : "Completar"}</button>
      </div>
    </li>
  );
}

export default Item;