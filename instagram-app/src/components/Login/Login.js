import React from "react";
import styled from 'styled-components';


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
    // background: blue;
    align-items: center;
    justify-content: center;
`

const Form = styled.form `
    margin: 0;
    padding: 0;
`

const Input = styled.input `
    margin-bottom: 10px;
    padding: 10px;
    background: #f2f2f2;
    `

const Button = styled.button `
    padding: 5px 10px;
    margin-top: 10px;
    border-radius: 5px;
    font-family: 'proxima-nova', sans-serif;
    font-weight: bold;
`

export default Login;