import React from "react";
// import "./Login.css";


class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    login = e => {
        localStorage.setItem("username", this.state.username);
        localStorage.setItem("password", this.state.password)

        }

    handleChangeUsername = e => {
        e.preventDefault();
        this.setState({
            username: e.target.value
        })
    }

    handleChangePassword = e => {
        e.preventDefault();
        this.setState({
            password: e.target.value
        })
    }



    render(){
        return (
            <div className = "loginPage">
            <img
                src = {require("./instagramLogInPhoto.png")}/>
            <form>
                <input
                    placeholder= "Username"
                    onChange={this.handleChangeUsername}
                    value={this.state.username}
                    />
                <input
                    placeholder= "Password"
                    onChange={this.handleChangePassword}
                    value={this.state.password}
                
                    />
                <button
                    onClick={this.login}>Login</button>    

            </form>
            </div>
        )
    }
}

export default Login;