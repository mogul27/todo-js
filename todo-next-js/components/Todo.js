import React, { useState } from "react"
import styles from "../styles/eachDay.module.css"

{/* Components represent a chunk of the app that gets reused often */}
export default function Todo(props){
    const [isEditing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');

    function handleChange(e) {
        setNewName(e.target.value);
      }

    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName);
        setNewName("");
        setEditing(false)
    }
      
    const editingTemplate = (
        <form className="stack-small" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="todo-label" htmlFor={props.id}>
               New name for {props.name} <span> </span>
            </label>
            <input id={props.id} className="todo-text" type="text"
            value={newName}
            onChange={handleChange} />
          </div>
          <div className="btn-group">
            <button type="button" className={styles.defbtn} onClick={() => setEditing(false)}>
              Cancel
              <span className="visually-hidden">  renaming {props.name}</span>
            </button>
            <button type="submit" className={styles.defbtn}>
              Save 
              <span className="visually-hidden"> new name for {props.name}</span>
            </button>
          </div>
        </form>
      );

      const viewTemplate = (
        <div className="stack-small">
          <div className="c-cb">
              <label className="todo-label" htmlFor={props.id}>
                {props.name}
              </label>
              <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
              />
            </div>
            <div className="btn-group">
              <button type="button" className={styles.defbtn} onClick={() => setEditing(true)}>
                Edit <span className="visually-hidden">{props.name}</span>
              </button>
              <button
                type="button"
                className={styles.defbtn}
                onClick={() => props.deleteTask(props.id)}
              >
                Delete <span className="visually-hidden">{props.name}</span>
              </button>
            </div>
        </div>
      );
      
    return (
        // Conditional Rendering
        <li className="todo">{isEditing ? editingTemplate : viewTemplate}</li>
    )
}