import React from "react";
import Item from "./Item";

function List({ items, deleteItem, editItem, toggleCompleted }) {
  return (
    <ul className="task-list">
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          editItem={editItem}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
}

export default List;