import React,{Component} from "react";
/*
The this.props.name is fetching the name props from the app file which is passing the name as the argument.
Similarly we are pasing the onclick data in this file from the app.
*/ 
export default class Guest extends Component
{
    render()
    {
        return(
            <div>
                <h1>Hello {this.props.name}</h1>
                <button onClick={this.props.clickdata}>Login</button>
                <button>SignUp</button>
            </div>
            )
    }
}