import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import "./App.css";

function App() {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("items");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [itemToEdit, setItemToEdit] = useState(null);
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addOrUpdateItem = (value) => {
    if(itemToEdit){
      setItems(items.map((item)=>
        item.id === itemToEdit.id
        ? {...item, value}
        : item
      ));
      setItemToEdit(null);
    }else{
      setItems([
        ...items,
        {
          id: Date.now(),
          value
        }
      ]);
    }
  };

  const deleteItem = (id) => {
    const confirmar = window.confirm("¿Estás seguro de eliminar este elemento?");

    if (confirmar) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const editItem = (item) => {
    setItemToEdit(item);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">
        CRUD con LocalStorage
      </h1>

      <Form
        addOrUpdateItem={addOrUpdateItem}
        itemToEdit={itemToEdit}
      />

      <p className="contador">
        Total: {items.length}        
      </p>

      <List
        items={items}
        deleteItem={deleteItem}
        editItem={editItem}
      />

    </div>
  );
}

export default App;