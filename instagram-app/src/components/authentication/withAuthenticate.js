import React from "react";


const withAuthenticate = PostsPage => Login => 
    class extends React.Component {
        constructor(){
            // state = {
            //     loggedIn: "",
            // }
        }


componentDidMount(){}


    render(){
        return (
            <div>
                <PostsPage 
                    filteredArray = {this.props.filteredArray}
                    postDataArray = {this.props.postDataArray}/>
            </div>
        )
    }
}

export default withAuthenticate; 