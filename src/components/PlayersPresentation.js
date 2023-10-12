import React, { Component } from "react";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CartProvider, { CartContext } from "./CartContext";
import { useContext } from "react";

export default function PlayersPresentation({players}) {
    const[player, setPlayer] = useState([]);
    const[showPopup, setShowPopup] = useState(false);

    const{count,addToCart} = useContext(CartContext);
    

        return (

            <div className="container player" >
               
                 <div  className="row row-content player">
                 {players.map((player) => (
                       
                            <div className="col col-sm-4 col-md-4" key={player.id}>
                                <div className="card">
                                    <img src={player.img} />
                                    <h3>{player.name}</h3>
                                    <p className="title">{player.club}</p>
                                    <Link to={`detail/${player.id}`}>
                            

                                        <p><button className="btn btn-dark btn-lg btn-block">
                                        Detail</button></p>
                                    </Link>
                                    
                                        <p><button onClick={addToCart} className="btn btn-primary btn-lg btn-block">
                                        Add To Cart</button></p>
                                </div>
                            </div>
                ))}

                {/* <div id="popup" className="overlay">
                    <div className="popup">
                        <img src={player.img}/>
                        <h2>{player.name}</h2>
                        <a className="close" href="#">&times;</a>
                        <div className="content">
                            {player.info}
                        </div>
                    </div>


                </div> */}



                 </div>
               



            </div>
        )


}