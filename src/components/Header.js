import {Link} from "react-router-dom"
import React from 'react'

const Header = () => {
  return (
    <div className= "header"  >
     <nav >
        <ul>
            <li>
                <Link className="Links" to= "/">Home</Link> </li>
       
       
       <li> <Link className="Links" to= "/about">About</Link> </li>
       
       
        <li> <Link className="Links" to= "/contact">Contact</Link> </li>
      </ul>
     </nav>
   
    </div>
  )
}

export default Header;
