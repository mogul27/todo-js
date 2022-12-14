import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { useState, useEffect } from "react";


export default function Home() {
  return (
    <div>
    <div className={styles.container}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Todo list
        </h1>

        <button className={styles.defbtn}>
          <Link href="/today"> Today's list</Link>
        </button>
      </main>
    </div>
    </div>
  )
}
