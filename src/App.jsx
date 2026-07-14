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
  const [busqueda, setBusqueda] = useState("");

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
          value,
          completed: false
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

  const toggleCompleted = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, completed: !item.completed }
          : item
      )
    );
  };

  const deleteAllItems = () => {
    const confirmar = window.confirm(
      "¿Estás seguro de borrar todos los elementos?"
    );

    if (confirmar) {
      setItems([]);
    }
  };

  const itemsFiltrados = items.filter((item) =>
    item.value.toLowerCase().includes(busqueda.toLowerCase())
  );

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

      <input
        className="task-input"
        type="text"
        placeholder="Buscar tarea..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <button
        className="delete-all-button"
        onClick={deleteAllItems}
      >
        Borrar todo
      </button>

      <List
        items={itemsFiltrados}
        deleteItem={deleteItem}
        editItem={editItem}
        toggleCompleted={toggleCompleted}
      />

    </div>
  );
}

export default App;