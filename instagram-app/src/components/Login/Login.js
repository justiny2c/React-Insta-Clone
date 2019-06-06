import React from "react";
import styled from 'styled-components';
// import SearchBar from "./SearchBar/SearchBar";


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
            <LoginDiv className = "loginPage">
            <img
                src = {require("./instagramLogInPhoto.png")}/>
            <Form>
                <IGLetters
                    src = {require("../SearchBar/instagramLetters.png")}/>
                <Input
                    placeholder= "Username"
                    onChange={this.handleChangeUsername}
                    value={this.state.username}
                    />
                <Input
                    placeholder= "Password"
                    onChange={this.handleChangePassword}
                    value={this.state.password}
                
                    />
                <Button
                    onClick={this.login}>Login</Button>    

            </Form>
            </LoginDiv>
        )
    }
}

const LoginDiv = styled.div `
    display: flex;
    flex-flow: row;
    // border: 2px solid black;
    background: #e6e6e6;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const Form = styled.form `
    margin: 0;
    padding: 0;
`

const Input = styled.input `
    width: 100%;
    margin-bottom: 10px;
    padding: 10px 0;
    background: #f2f2f2;
    font-size: 1rem;
    font-family: 'proxima-nova', sans-serif;
    text-align: center;
    `

const Button = styled.button `
    width: 100%;
    margin-top: 10px;
    border-radius: 5px;
    font-family: 'proxima-nova', sans-serif;
    // font-weight: bold;
    color: white;
    background: #4da6ff;
    font-size: 1rem;
    padding:5px 0;
`
const IGLetters = styled.img `
    height: 50px;
    width: auto;
    margin-bottom: 10px;
    `

export default Login;