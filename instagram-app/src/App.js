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
    postDataArray: [],
    newComment:[]
  }
} 
componentDidMount () {
  this.setState ({
    postDataArray: dummyData,
  })
}

searchBarFilter = searchTerm => {
  const newFilter = this.state.postDataArray.filter(
    postObject => postObject.username === searchTerm  
  )
  this.setState({
    postDataArray: newFilter
  })
}

addComment = newComment => {
  const comments = this.state.postDataArray.comments
  this.setState({
      comments: [...comments, newComment]
  })
} 

render(){
  return (
    <div className="App">
      <div className = "Search-bar">
        <SearchBar 
          searchBarFilter={this.searchBarFilter}/>
      </div>
      
      <div className = "Post-container">
        <PostContainer 
          postArray = {this.state.postDataArray}
          addComment = {this.addComment} />
      </div>
    </div>
  );
  }
}

export default App;
