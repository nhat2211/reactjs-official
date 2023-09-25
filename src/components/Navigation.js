import  React,{ Component } from "react"



export default class Navigation extends Component {
    render() {
      return(
       <div>
        <nav className="navbar navbar-dark navbar-expand-sm fixed-top">
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
                <span class="fa fa-info fa-lg"></span>About</a></li>
                <li className="nav-item"><a className="nav-link"  href="#contact">
                <span class="fa fa-address-card fa-lg"></span>Contact</a></li>
            </ul>

        </div>
            
        </nav>
       </div>
  
      )
    }
  }