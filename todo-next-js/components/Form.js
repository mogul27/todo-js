import React, { useState } from "react"
import styles from "../styles/eachDay.module.css"


export default function Form(props) {

    // initial name and a function to modify the name
    const [name, setName] = useState('')
    
    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        props.addTask(name)
        setName("")
    }

    return (
        <form onSubmit={handleSubmit}>

        <h2 className="label-wrapper">
            <label htmlFor="new-todo-input"
                className="label_lg">
            Add to today's Todolist
            </label>

        </h2>
        <input
        type="text"
        id="new-todo-input"
        className="input input_lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
        />

        <button type="submit" className={styles.defbtn}>
        Add
        </button>
    </form>
    );
}