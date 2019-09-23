import React from "react";
import "./SearchBar.css";
import styled from 'styled-components';

class SearchBar extends React.Component {
    state = {
        searchTerm: "",
    };

handleChange = e => {   
    e.preventDefault();    
    this.setState({      
        searchTerm: e.target.value 
    })};

searchBarFilter = e => {
    e.preventDefault();

    this.props.searchBarFilter(this.state.searchTerm);

    this.setState({
        searchTerm: ""
        })
}

    render(){
    return (
        <div className = "SearchBar">
            <div className ="left-side-icons">
                <img 
                    className="left-side-logos"
                    src= {require("./instagramLogo.png")} 
                    alt="Instagram Logo"/>

                <hr width=".5" size="50"></hr>  

                <img
                    className="left-side-logos"
                    src={require("./instagramLetters.png")}
                    alt = "Instagram Letters" />
                    
            </div>

            <form
                onSubmit={this.searchBarFilter}>
                <SearchInput
                    onChange={this.handleChange}
                    value={this.state.searchTerm}
                    className="searchInput"
                    placeholder="Search"></SearchInput></form>

            <div className = "right-side-icons">
                <img
                    className="right-side-logos" 
                    src = {require("./instagramCompass.png")}/>
                <img
                    className="right-side-logos" 
                    src = {require("./instagramHeart.png")}/>
                <img 
                    className="right-side-logos"
                    src = {require("./instagramUser.png")}/>
            </div>
        </div>
    )}
}

const SearchInput = styled.input `
    text-align: center;
    width: 100%;
    font-size: 1rem;
`

export default SearchBar;