import React, { Component } from "react";
import axios from "axios";
import FavouriteCards from "./FavouriteCards";
import { Row } from "react-bootstrap";
import Form from "./Form";
export class Favourite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favDataApi: [],
			showFavData: false,
			title: "",
			dealRating: "",
			slug: "",
			showForm: false,
		};
	}

	componentDidMount = async () => {
		const request = await axios.get("http://localhost:8000/game/favourite");
		this.setState({
			favDataApi: request.data,
			showFavData: true,
		});
	};

	deleteFAvourite = async (slug) => {
		const request = await axios.delete(
			`http://localhost:8000/game/favourite/${slug}`
		);

		this.setState({
			favDataApi: request.data,
			showFavData: true,
		});
	};

	showFormUpdate = async (slug, title, dealRating) => {
		this.setState({
			slug: slug,
			title: title,
			dealRating: dealRating,
			showForm: true,
		});
	};

	updateTitle = (e) => {
		this.setState({
			title: e.target.value,
		});
	};

	updateRate = (e) => {
		this.setState({
			dealRating: e.target.value,
		});
	};
	updateData = async () => {
		const request = await axios.put(
			`http://localhost:8000/game/favourite/${this.state.slug}`,
			{ title: this.state.title },
			{ dealRating: this.state.dealRating }
		);
		this.setState({
			favDataApi: request.data,
			showFavData: true,
		});
	};
	render() {
		return (
			<Row>
				{this.state.showForm && (
					<Form
						slug={this.state.slug}
						title={this.state.title}
						dealRating={this.dealRating}
						updateTitle={this.updateTitle}
						updateRate={this.updateRate}
						updateData={this.updateData}
					/>
				)}
				{this.state.showFavData && (
					<FavouriteCards
						favDataApi={this.state.favDataApi}
						deleteFAvourite={this.deleteFAvourite}
						showFormUpdate={this.showFormUpdate}
					/>
				)}
			</Row>
		);
	}
}

export default Favourite;
