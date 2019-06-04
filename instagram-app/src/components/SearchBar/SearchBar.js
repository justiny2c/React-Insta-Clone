import React from "react";
import "./SearchBar.css";

function SearchBar (){
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
                    alt = "Instagram Letters"/>
                    
            </div>

            <form><input
                    placeholder="Search"></input></form>

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
    )
}

export default SearchBar