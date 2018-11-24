import React, {Component} from "react";
import logo from '../../../../logo.svg';
import classes from "./RegisterForm.css";

class RegisterForm extends Component {

    render(){
        return(
        <div className={classes.wrapper}>
        <img src={logo}></img>
            <form onSubmit={this.props.submit} className={classes.form}>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Email" type="text"></input>
                </div>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Name" type="text"></input>
                </div>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Phone Number" type="text"></input>
                </div>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Password" type="password"></input>
                </div>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Retype password" type="password"></input>
                </div>
                <div>
                    <button className={classes.button}>REGISTER</button>
                </div>
            </form>
        </div>
        );
    }

}

export default RegisterForm;