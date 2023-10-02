import React, { Component } from "react";

import Players from "../shared/Players"

import { useState, useEffect } from "react";

export default function PlayersPresentation({players}) {
    const[player, setPlayer] = useState([]);
    const[showPopup, setShowPopup] = useState(false);

    // const[showPopup, setShowPopup] = useState(false);

    // useEffect(()=>{
       
       
    // },[showPopup]);

    const hidePopup = () => {
        setShowPopup(false);
      
        if(!showPopup) window.location.href = "/#";
    }


        return (

            <div onClick={hidePopup} className="container player" >
                <a href="#"></a>
                 <div className="row row-content">
                 {players.map((player) => (
                       
                            <div className="col col-sm-4 col-md-4" key={player.id}>
                                <div className="card">
                                    <img src={player.img} />
                                    <h3>{player.name}</h3>
                                    <p className="title">{player.club}</p>
                                    <p><button onClick={()=>{setPlayer(player);setShowPopup(true)}} className="btn btn-dark btn-lg btn-block">
                                        <a href="#popup" id="openPopup">Detail</a></button></p>
                                </div>
                            </div>
                ))}

                <div id="popup" className="overlay">
                    <div className="popup">
                        <img src={player.img}/>
                        <h2>{player.name}</h2>
                        <a className="close" href="#">&times;</a>
                        <div className="content">
                            {player.info}
                        </div>
                    </div>


                </div>



                 </div>
               



            </div>
        )


}