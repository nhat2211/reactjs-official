import { Component } from "react";
import Players from "../shared/Players";
import PlayersPresentation from "./PlayersPresentation";

export class Main extends Component {
    constructor() {
        super();
        this.state ={
            players:Players
        };
    }

    render() {
        return <PlayersPresentation players={this.state.players}/>
    }


}
export default Main