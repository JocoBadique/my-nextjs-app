import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const notfound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout (() => {
        router.push('/');
        }, 3000)
    },[])

    return (
    <>
        <Head>
            <title>Ninja Not Found</title>
        </Head>
        <div className='not-found'>
            <h1>Oooppss...</h1>
            <h2>That page cannot be found!</h2>
            <p>Go back to the <Link href='/'><a>Home</a></Link></p>    
        </div>
    </>
    )
}

export default notfound
