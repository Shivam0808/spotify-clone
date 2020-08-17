import React from 'react'
import Sidebar from './Sidebar'
import './Player.css'
import Body from './Body'
import Footer from './Footer'

function player({ spotify }) {
    return (
        <div className='player'>
            <div className='player__body'>
            <Sidebar />
            <Body spotify={spotify} />
            </div>
            <Footer spotify={spotify} />           
        </div>
    )
}

export default player 
