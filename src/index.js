import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import Buttons from './components/buttons';
import Details from './components/details';


class App extends Component {
    constructor(props) {
    super(props);






  return(
    <div>
      <SearchBar />
 
      <Details />
    </div>
    );
}
}



ReactDOM.render(<App />, document.querySelector('.container'));
