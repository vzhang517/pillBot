import React, { Component } from 'react';
import Details from './details'
import helper from "../utils/helpers";


class Buttons extends Component {

	constructor (props){
    super (props);

    this.state = { result: "" };

    this.handleDescription = this.handleDescription.bind(this);
    this.handleWarnings = this.handleWarnings.bind(this);
    this.handleInteractions = this.handleInteractions.bind(this);
  }

	handleDescription (event) {
		event.preventDefault();
		helper.descriptionQuery(this.props.term)
		.then((response) => {
			this.setState({ result: response[0]});

		}

			)
	}

	handleWarnings (event) {
		event.preventDefault();
		helper.warningsQuery(this.props.term)
		.then((response) => {
			this.setState({ result: response[0]});

		}

			)
	}

	handleInteractions (event) {
		event.preventDefault();
		helper.drug_interactionsQuery(this.props.term)
		.then((response) => {
			this.setState({ result: response[0]});

		}

			)
	}





render() {
  return (
  	<div>
    <button button type="button" onClick={this.handleDescription}>Description</button>
    <button button type="button" onClick={this.handleWarnings}>Warnings</button>
    <button button type="button" onClick={this.handleInteractions}>Interactions</button>
    <Details result= {this.state.result}/>
    </div>
  );
}
}

export default Buttons;
