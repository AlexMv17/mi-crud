import React from "react";

function Item({ item, deleteItem, editItem }) {
  return (
    <li className="task-item">
      <span>{item.value}</span>

      <div>
        <button className="edit-button" onClick={() => editItem(item)}>Editar</button>
        <button className="delete-button" onClick={() => deleteItem(item.id)}>Eliminar</button>
      </div>
    </li>
  );
}

export default Item;