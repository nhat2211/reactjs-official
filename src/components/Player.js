import React,  {Component} from "react";

export default class Player extends Component {
    render() {
        return (
           
            <div className="container player">
                <div className="row row-content">

                <div className="col col-sm-4 col-md-4">
                    <div className="card">
                        <img src='assets/images/cr.jpg'/>
                        <h3>Cristiano Ronaldo</h3>
                        <p className="title">Manchester United</p>
                        <p><button className="btn btn-dark btn-lg btn-block">Detail</button></p>
                    </div>
                </div>

                <div className="col col-sm-4 col-md-4">
                    <div className="card">
                        <img src='assets/images/m.jpg'/>
                        <h3>Kylaa Mpappe</h3>
                        <p className="title">PSG</p>
                        <p><button className="btn btn-dark btn-lg btn-block">Detail</button></p>
                    </div>
                </div>

                <div className="col col-sm-4 col-md-4">
                    <div className="card">
                        <img src='assets/images/haaland.jpg'/>
                        <h3>haaland</h3>
                        <p className="title">Manchester City</p>
                        <p><button className="btn btn-dark btn-lg btn-block">Detail</button></p>
                    </div>
                </div>



                </div>

                <div className="row row-content">

                <div className="col col-sm-4 col-md-4">
                    <div className="card">
                        <img src='assets/images/cr.jpg'/>
                        <h3>Cristiano Ronaldo</h3>
                        <p className="title">Manchester United</p>
                        <p><button className="btn btn-dark btn-lg btn-block">Detail</button></p>
                    </div>
                </div>

                <div className="col col-sm-4 col-md-4">
                    <div className="card">
                        <img src='assets/images/m.jpg'/>
                        <h3>Kylaa Mpappe</h3>
                        <p className="title">PSG</p>
                        <p><button className="btn btn-dark btn-lg btn-block">Detail</button></p>
                    </div>
                </div>

                <div className="col col-sm-4 col-md-4">
                    <div className="card">
                        <img src='assets/images/haaland.jpg'/>
                        <h3>haaland</h3>
                        <p className="title">Manchester City</p>
                        <p><button className="btn btn-dark btn-lg btn-block">Detail</button></p>
                    </div>
                </div>



                </div>

                
                


            </div>
        )
    }

   
} 