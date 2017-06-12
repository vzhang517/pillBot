import React, { Component } from 'react';

class Details extends Component {

	constructor (props){
    super (props);

  }








render() {
  return (
  	<div className="fadeInUp">
  		<p>
   		{this.props.result}
   		</p>
    </div>
  );
}
}


export default Details;
