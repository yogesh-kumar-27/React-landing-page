import React,{useState} from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const changeBackground = () =>{
        if(window.scrollY >= 50){
            setNav(true)
        }
        else{
            setNav(false)
        }
    }

    window.addEventListener('scroll', changeBackground);
    return (
       <>
       <nav className={nav ? 'nav active' : 'nav'}>
           <a className="logo"><img src={logo} alt=''/></a>
           <input type="checkbox" className='menu-btn' id='menu-btn'/>
           <label className='menu-icon' htmlFor='menu-btn'>
                <span className='nav-icon'></span>
           </label>
           <ul className='menu'>
               <li><a className='active'>Home</a> </li>
               <li><a>features</a> </li>
               <li><a>About</a> </li>
               <li><a>Contact</a> </li>
               <li><a>Download</a> </li>
           </ul>
       </nav>
       </>
    )
}

export default Navbar
