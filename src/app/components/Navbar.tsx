import Link from "next/link"
import "../style/Navbar.css"
import Image from "next/image"


export default function Navbar(){
    return(
           <div className="header">
             <div className="logo-div">
                <Image src={"/images/logo.jpg"}
                width={80}
                height={80}
                alt="Profile Pic" 
                className="logo-image"
                />
                  </div>
                 <div className="right-header">
                    <ul className="header-links">
                     <li>
                       <Link className="nav-links" href={"/"}>Home</Link>
                      </li>
                    <li>
                  <Link className="nav-links" href={"/about"}>About Us</Link>
                 </li>
                <li>
             <Link className="nav-links" href={"/contact"}>Contact</Link>
        </li>
        
      </ul>
        </div>
        </div>
    )
}