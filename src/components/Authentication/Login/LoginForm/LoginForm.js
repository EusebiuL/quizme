import React, {Component} from "react";
import logo from '../../../../logo.svg';
import classes from "./LoginForm.css";

class LoginForm extends Component {

    render(){
        return(
        <div className={classes.wrapper}>
        <img src={logo}></img>
            <form onSubmit={this.props.submit} className={classes.form}>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Email" type="text"></input>
                </div>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Password" type="password"></input>
                </div>
                <div>
                    <button className={classes.button}>LOGIN</button>
                </div>
            </form>
        </div>
        );
    }

}

export default LoginForm;