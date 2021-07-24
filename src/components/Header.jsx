import React from 'react'
import Navbar from './Navbar'

const Header = () => {
    return (
    <>
    <div id="main">
    <Navbar/>
    <div className="name">
        <h1><span>Launch Your App</span>With Confidence And Caritivity</h1>
        <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestias ea adipisci nemo eaque veritatis.
        </p>
        <a className='cv-btn'>Download</a>
    </div>
    </div>
    </>
    )
}

export default Header
