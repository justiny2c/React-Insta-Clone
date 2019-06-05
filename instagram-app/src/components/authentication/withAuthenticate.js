import React from "react";


// const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)

const withAuthenticate = SomeComponent => 
    class extends React.Component {
    render(){
        return (
            <div>
                <SomeComponent />
            </div>
        )
    }
}

export default withAuthenticate; 