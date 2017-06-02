import React, { Component } from 'react';
import Details from './details'
import helper from "../utils/helpers";


class Buttons extends Component {

	constructor (props){
    super (props);

    this.state = { result: "" };

    this.handleDescription = this.handleDescription.bind(this);
    this.handleWarnings = this.handleWarnings.bind(this);
  }

	handleDescription (event) {
		event.preventDefault();
		helper.descriptionQuery(this.props.term);
	}

	handleWarnings (event) {
		event.preventDefault();
		helper.warningsQuery(this.props.term)
		.then((response) => {
			this.setState({ result: response[0]});

		}

			)
	}






render() {
  return (
  	<div>
    <button className="btn btn-primary btn-lg" onClick={this.handleDescription}>Description</button>
    <button className="btn btn-primary btn-lg" onClick={this.handleWarnings}>Warnings</button>
    <Details result= {this.state.result}/>
    </div>
  );
}
}

export default Buttons;
