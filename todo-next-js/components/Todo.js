import React from "react"

{/* Components represent a chunk of the app that gets reused often */}
export default function Todo(props){
    return (
        <li className="todo stack-small">
        <div className="c-cb">
                <label className="todo-label" htmlFor="todo-0">
                {props.name}
                </label>
            <input id={props.id} type="checkbox" defaultChecked={props.completed}></input>
            
        </div>
        <div className="btn-group">
            {/* This is how you label buttons */}
            <button type="button" className="btn">
                Edit 
            <span className="visually-hidden"> {props.name} </span>
            </button>

            <button type="button" className="btn btn_danger">
                Delete <span className="visually-hidden">
                {props.name}
                </span>
            </button>
        </div>
    </li>
    )
}