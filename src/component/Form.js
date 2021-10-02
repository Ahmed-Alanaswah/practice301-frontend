import React, { Component } from "react";

export class Form extends Component {
	render() {
		return (
			<form onSubmit={this.props.updateData}>
				<input
					type="text"
					onChange={this.props.updateTitle}
					value={this.props.title}
				/>
				<input
					type="text"
					onChange={this.props.updateRate}
					value={this.props.dealRating}
				/>
				<input type="submit" value="update" />
			</form>
		);
	}
}

export default Form;
