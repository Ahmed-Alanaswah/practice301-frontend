import axios from "axios";
import React, { Component } from "react";
import GameCards from "./GameCards";
import { Row } from "react-bootstrap";
export class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gameDataApi: [],
			showDataGame: false,
		};
	}

	componentDidMount = async () => {
		const reques = await axios.get("http://localhost:8000/game");
		this.setState({
			gameDataApi: reques.data,
			showDataGame: true,
		});
	};

	addToFAvourite = async (obj) => {
		const postrequest = await axios.post(
			"http://localhost:8000/game/favourite",
			obj
		);

		console.log(obj);
	};
	render() {
		return (
			<Row>
				{this.state.showDataGame && (
					<GameCards
						gameDataApi={this.state.gameDataApi}
						addToFAvourite={this.addToFAvourite}
					/>
				)}
			</Row>
		);
	}
}

export default Main;
