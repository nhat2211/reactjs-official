import { useParams } from "react-router-dom";
import Players from "../shared/Players";

export default function Detail() {

    const userName = useParams();
    const player = Players.find(player=>{
        return player.id == userName.id;
    });

    let cost = player.cost.toLocaleString();

    return(
        <div className="container">
            <div className="product-card">

                <div className= "badge">{player.name}</div>
                <div className="product-tumb">
                    <img src={`../${player.img}`} alt='' />
                </div>
                <div className="product-details">
                    <h4>{player.club}</h4>
                    <div className="product-price">Market Value: ${cost}</div>
                    <p>{player.info}</p>
                    <div className="product-bottom-details"></div>

                </div>
            </div>

        </div>
    )

}