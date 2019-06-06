import React from "react";
import App from "../../App";
import Login from "../Login/Login";



const withAuthenticate = App => Login => 
    class extends React.Component {
        constructor(){
            super();
            this.state = {
                loggedIn: false,
            }
        }


componentDidMount(){
    if(localStorage.getItem("username") && localStorage.getItem("password")){
        this.setState({
            loggedIn: true
        })
    }
}


    render(){
        if(this.state.loggedIn === true){
            return (
                <App />
            )
        }
        else {
            return(
                <Login />
            )
        }

    }
}

export default withAuthenticate; 