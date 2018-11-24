import React, {Component} from "react";
import axios from "axios";
import RegisterForm from "./RegisterForm/RegisterForm";
import classes from "./Register.css";

class Register extends Component {
    state = {
        email: "",
        name:"",
        phone:"",
        password: "",
        authError: ""
    };
    
    handleChange = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
      };
    
      handleSubmit = e => {
        e.preventDefault();
    
        axios
          .post("http://localhost:8090/api/user", {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName
          })
          .then(res => {
            console.log(res);
            console.log(res.data);
            this.props.authStatus(true, this.state.email);
            this.props.history.push("/");
          });
      };
    render() {
        const error = this.state.authError ? (
            <p>bad credentials, try again</p>
          ) : null;

          return (
        <div className={classes.outerdiv}>
            <RegisterForm 
                change={this.handleChange} 
                submit={this.handleSubmit}  
            />
            
            <div className={classes.error}>{error}</div>
        </div>
          );
        
    }

}

export default Register;
