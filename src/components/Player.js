import React, { Component } from "react";

import Players from "../shared/Players"

export default function PlayersPresentation({players}) {
        return (

            <div className="container player">
                 <div className="row row-content">
                 {players.map((player) => (
                       
                            <div className="col col-sm-4 col-md-4" key={player.id}>
                                <div className="card">
                                    <img src={player.img} />
                                    <h3>{player.name}</h3>
                                    <p className="title">{player.club}</p>
                                    <p><button className="btn btn-dark btn-lg btn-block">Detail</button></p>
                                </div>
                            </div>

                        
                      

        

                   





                ))}



                 </div>
               



            </div>
        )


}