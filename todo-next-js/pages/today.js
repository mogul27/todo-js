import Link from 'next/Link'
import Head from 'next/Head'
import Layout from '../components/layout';

export default function TodayList() {
    return (
    <Layout>
    <Head>
        <title>Today's list</title>
    </Head>

     <h1>Todo today</h1>
     <h2>
         <Link href="/">Back to home</Link>
     </h2>

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

     </Layout>
    );
}