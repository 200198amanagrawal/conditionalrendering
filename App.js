import React,{Component} from "react";
//import Guest from "./Guest";
import User from "./User";
export default class App extends Component
{
    render()
    {
        const isprime=this.props.prime;
        return(
            <>
            <h3>Welcome User</h3>
            {isprime && <User/>}
            </>
            )
        }
}