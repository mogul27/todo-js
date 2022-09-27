import React from "react";
import styles from "../styles/eachDay.module.css"

export default function FilterButton(props){

    return(
    <button type="button" className={styles.defbtn}
    aria-pressed={props.isPressed} onClick={() => props.setFilter(props.name)}> 

    <span className="visually-hidden">
        Show
    </span>
    <span> {props.name}</span>
    <span className="visually-hidden"> tasks</span>
    </button>
    )
}