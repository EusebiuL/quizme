import React, {Component} from "react";
import logo from '../../../../logo.svg';
import "./LoginForm.css";

class LoginForm extends Component {

    render(){
        return(
        <div className="wrapper">
        <img src={logo}></img>
            <form onSubmit={this.props.submit} className="form">
                <div className="inputField">
                    <input onChange={this.props.change} placeholder="Email" type="text"></input>
                </div>
                <div className="inputField">
                    <input onChange={this.props.change} placeholder="Password" type="password"></input>
                </div>
                <div>
                    <button className="button">LOGIN</button>
                </div>
            </form>
        </div>
        );
    }

}

export default LoginForm;