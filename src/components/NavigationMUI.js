import React from "react";
import { Icon, Navbar } from "react-materialize";
import { Link } from "react-router-dom";

export default function NavigationMUI() {

    return(
       
            <Navbar className="menu"
            alignLinks="right"
            brand={<span className="brand-logo">Player Cards</span>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}>

            <ul>
                <li><Link to='/'><Icon left>home</Icon>Home</Link></li>
                <li to='/about'><Link to='/about'>
                    <Icon left>info_outline</Icon>About</Link></li>

                <li to='/news'><Link to='/news'>
                    <Icon left>dvr</Icon>News</Link></li>

                <li to='/contact'><Link to='/contact'>
                    <Icon left>contacts</Icon>Contact</Link></li>


            </ul>



            </Navbar>
       
    )
}