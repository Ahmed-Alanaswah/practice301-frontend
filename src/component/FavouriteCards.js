import React, { Component } from "react";
import { Col, Card, Button } from "react-bootstrap";
export class FavouriteCards extends Component {
	render() {
		return this.props.favDataApi.map((obj, idx) => {
			return (
				<Col>
					<Card style={{ width: "18rem" }}>
						<Card.Img variant="top" src={obj.thumb} />
						<Card.Body>
							<Card.Title>{obj.title}</Card.Title>
							<Card.Title>{obj.dealRating}</Card.Title>
							<Card.Text>{obj.salePrice}.</Card.Text>
							<Button
								variant="primary"
								onClick={(e) => {
									this.props.deleteFAvourite(obj.slug);
								}}
							>
								delete
							</Button>
							<Button
								variant="primary"
								onClick={(e) => {
									this.props.showFormUpdate(
										obj.slug,
										obj.title,
										obj.dealRating
									);
								}}
							>
								update
							</Button>
						</Card.Body>
					</Card>
				</Col>
			);
		});
	}
}

export default FavouriteCards;
