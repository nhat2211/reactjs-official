import  React,{ Component } from "react"
import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"



export default function Navigation() {
  const{theme,toggle,dark} = useContext(ThemeContext);
      return(
      
        <nav style={{backgroundColor: theme.backgroundColor, color: theme.color}}
         className="navbar navbar-expand-sm fixed-top">
        <button className="navbar-toggler" type="button" data-toggle="collapse"
        data-target="#Navbar">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="Navbar">
        <ul className="navbar-nav mr-auto">
                <li className="nav-item active"><a className="nav-link" href="#home">
                <span className="fa fa-home fa-lg"></span>Home</a></li>
                <li className="nav-item"><a className="nav-link"  href="#new">
                <span className="fa fa-list fa-lg"></span>New</a></li>
                <li className="nav-item"><a className="nav-link"  href="#about">
                <span className="fa fa-info fa-lg"></span>About</a></li>
                <li className="nav-item"><a className="nav-link"  href="#contact">
                <span className="fa fa-address-card fa-lg"></span>Contact</a></li>
            </ul>

            <div style={{position: 'relative'}}>

            <input type="checkbox" checked data-toggle="toggle" data-size="lg"/>
            
          <a className='switch-mode' href='#' onClick={toggle}
          style={{
            backgroundColor: theme.backgroundColor,
            color: theme.color,
            outline: 'none'
          }} data-testid="toggle-theme-btn"
        >
          Switch Nav to {!dark ? 'Dark' : 'Light'} mode
         </a>
         </div>

        </div>
            
        </nav>
      
  
      )
   
  }