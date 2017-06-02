import React, { Component } from 'react';
import Buttons from './buttons';

class SearchBar extends Component {

  constructor (props){
    super (props);

    this.state = { term: '' };
  }



  render() {

    return (
      <div>
      <input 
        value= {this.state.term}
        onChange={(event) => this.setState({ term: event.target.value })} />
     


      <Buttons term= {this.state.term}/>

      </div>



    );
  
  }

}


export default SearchBar;