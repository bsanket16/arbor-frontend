import React from 'react'

import { API } from '../backend'
import '../styles.css'

export default function Home() {

    console.log('API IS', API)

    return (
        <div>
            <h1 className='text-white'>Hello Frontend { API }</h1>
        </div>
    )
}
