import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends React.Component {
  constructor(){
  super();
  this.state = {
    postDataArray: []

  }
} 
componentDidMount () {
  this.setState ({
    postDataArray: dummyData,
  })
}

searchBarFilter = (e, searchTerm) => {
  e.preventDefault();
  const newFilter = this.state.postDataArray.filter(
    searchTerm => this.postArray === searchTerm
  )
}

render(){
  return (
    <div className="App">
      <div className = "Search-bar">
        <SearchBar 
          searchBarFilter={this.searchBarFilter}/>
      </div>
      
      <div className = "Post-container">
        <PostContainer postArray = {this.state.postDataArray} />
      </div>
    </div>
  );
  }
}

export default App;
