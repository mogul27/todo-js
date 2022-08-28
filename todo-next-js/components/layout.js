import styles from './layout.module.css';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const date = "Date here"
export const siteTitle = "Todo list"

export default function Layout({ children, home }) {
    return (
     <div className={styles.container}>
        <Head>
            <meta
                name="description"
                content="Personal Todo list website"
            />
            <meta
                name="author"
                content="Mogul"
            />
            <meta name="og:title" content={siteTitle} />
        </Head>
        
        <div className={styles.main}>
        <main>{children}</main>
    </div>
    
    </div>
    )
}