import React from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
// import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import PostsPage from "./components/PostContainer/PostsPage";
import withAuthenticate from "./components/authentication/withAuthenticate";
import Login from "./components/Login/Login";

class App extends React.Component {
  constructor(){
  super();
  this.state = {
    postDataArray: [],
    filteredArray: [],

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
    filteredArray: newFilter
  })
}

render(){
  return (
    <div className="App">
      <div className = "Search-bar">
        <SearchBar 
          searchBarFilter={this.searchBarFilter}/>
      </div>

      <div className="Posts-Page">
        <ComponentFromWithAuthenticate 
          filteredArray = {this.state.filteredArray}
          postDataArray = {this.state.postDataArray}/>
      </div>
    
    </div>
  );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

export default withAuthenticate(PostsPage)(Login)
