import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const home = () => {
  return (
<>
 <Head>
    <title>Ninja List | Home</title>
 </Head>
 <div>
    <h1 className={styles.title}>Home</h1>
    <p className={styles.text}>This is a cool ninja application that calls Ninja API</p>
    <Link href='/ninjas'>
      <a className={styles.btn}>See Ninja Listing</a>
    </Link>
 </div>
</>
  )
}

export default home
