import Link from 'next/Link';
import Head from 'next/Head';
import Layout from '../components/layout';
import Todo from '../components/Todo';
import Form from "../components/Form";
import FilterButton from "../components/FilterButton";
import React, { useState } from "react";

function addTask(name) {
    alert(name);
}

export default function TodayList() {
    
    const [tasks, setTasks] = useState(require('../today_tasks.json'))
    const taskList = tasks.map((task) => <Todo key={task.id}  id={task.id}
    name={task.name} completed={task.completed} />);

    return (
    <Layout>
    <Head>
        <title>Today's list</title>
    </Head>

     <h1>Todo today</h1>
     <h2>
         <Link href="/">Back to home</Link>
     </h2>

     <Form addTask={addTask}/>

    {/* These are the buttons for filtering tasks */}
    <div className="filters btn-group stack-exception">
    
    <FilterButton />
    <FilterButton />
    <FilterButton />

    </div>

    <h2 id="list-heading">
        X tasks remaining
    </h2>

    <ul role='list' className="todo-list stack-large stack-exception"
    aria-labelledby="list-heading">
        {taskList}
    </ul>
    </Layout>
    );
}