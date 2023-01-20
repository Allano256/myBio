import {Link} from "react-router-dom"
import React from 'react'

const Footer = () => {
  return (
    <div className= "foot"  >
     <nav >
        <ul>
            <li>
                <Link className="media" to= "/facebook">Facebook</Link> </li>
       
       
       <li> <Link className="media" to= "/instagram">Instagram</Link> </li>
       
       
        <li> <Link className="media" to= "/Twitter">Twitter</Link> </li>
      </ul>
     </nav>
   
    </div>
  )
}

export default Footer;