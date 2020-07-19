import React from 'react'

import { API } from '../backend'
import '../styles.css'
import Base from './Base'

export default function Home() {

    console.log('API IS', API)

    return (
        <Base title='Arbor'>
            <h1 className='text-white'>Hello Frontend { API }</h1>
        </Base>
    )
}
