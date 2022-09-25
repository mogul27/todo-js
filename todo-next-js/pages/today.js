import Link from 'next/Link';
import Head from 'next/Head';
import Layout from '../components/layout';
import Todo from '../components/Todo';
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import styles from "../styles/eachDay.module.css"

const FILTER_MAP = {All: () => true, 
                    Active: (task) => !task.completed,
                    Completed: (task) => task.completed};

const FILTER_NAMES = Object.keys(FILTER_MAP);

export default function TodayList() {
    
    const [tasks, setTasks] = useState(require('../today_tasks.json'))

    const [filter, setFilter] = useState('All');

    const taskList = tasks.filter(FILTER_MAP[filter]).map((task) =>
    (<Todo key={task.id}  id={task.id}
    name={task.name} completed={task.completed} 
    toggleTaskCompleted={toggleTaskCompleted} 
    deleteTask={deleteTask}
    editTask={editTask}/>));

    const filterList = FILTER_NAMES.map((name) => 
    (<FilterButton key={name}
                   name={name}
                   isPressed={name==filter}
                   setFilter={setFilter}/>));

    // Displaying the number of tasks or task left
    const taskNoun = taskList.length !== 1 ? 'tasks' : 'task';
    const headingText = `${taskList.length} ${taskNoun} remaining`;

    function addTask(name) {
        const newTask = { id: nanoid(), name, completed: false };
        // ... is kind of like unpacking the objects of each new task
        // into a Task structure
        setTasks([...tasks, newTask])
        // Write data structure to JSON
    }

    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map((task) => {
            if (id == task.id) {
                // Overwrites completed value with the opposite value
                return {...task, completed: !task.completed}
            }
            return task;
        });
        setTasks(updatedTasks)
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks)
    }

    function editTask(id, newName) {
        const editedTaskList = tasks.map((task) => {
            if (id == task.id){
                return {...task, name: newName}
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    return (
    <div>
    <div className={styles.header}>
    <Head>
        <title>Today's list</title>
    </Head>

     <h1 className={styles.h1}>Todo today </h1>
     <h2>
         <Link href="/">Back to home</Link>
     </h2>
    </div>

    <div>
     <Form addTask={addTask}/>

    {/* These are the buttons for filtering tasks */}
    <div className="filters btn-group stack-exception">
    {filterList}
    </div>

    <h2 id="list-heading">
        {headingText}
    </h2>

    <ul role='list' className="todo-list stack-large stack-exception"
    aria-labelledby="list-heading">
        {taskList}
    </ul>
    </div>
    </div>
    );
}