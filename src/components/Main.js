import { Component } from "react";
import Players from "../shared/Players";
import PlayersPresentation from "./PlayersPresentation";
import PlayersPresentationMUI from "./PlayersPresentationMUI";

export class Main extends Component {
    constructor() {
        super();
        this.state ={
            players:Players
        };
    }

    render() {
        return <PlayersPresentationMUI players={this.state.players}/>
    }


}
export default Main