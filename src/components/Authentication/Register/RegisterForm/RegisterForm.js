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
                    <input onChange={this.props.change} placeholder="Email" type="text" id="email"></input>
                </div>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Name" type="text" id="name"></input>
                </div>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Phone Number" type="text" id="phone"></input>
                </div>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Password" type="password" id="password"></input>
                </div>
                <div className={classes.inputField}>
                    <input onChange={this.props.change} placeholder="Retype password" type="password" id="retypedPassword"></input>
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