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

     </Layout>
    );
}