import React,{Component} from "react";
export default class User extends Component
{
    render()
    {
        return(
            <div>
                <h1>Hello User</h1>
                <button onClick={this.props.clickdata}>Logout</button>
            </div>
            )
    }
}