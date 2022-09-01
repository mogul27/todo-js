import React from "react"

export default function Form(props) {
    return (
        <form>
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
        />
        <button type="submit" className="btn btn_primary btn_lg">
        Add
        </button>
    </form>
    );
}