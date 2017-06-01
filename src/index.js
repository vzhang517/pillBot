import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import Buttons from './components/buttons';
import Details from './components/details';


const App = () => {
  return(
    <div>
      <SearchBar />
      <Buttons />
      <Details />
    </div>
    );
}



ReactDOM.render(<App />, document.querySelector('.container'));
