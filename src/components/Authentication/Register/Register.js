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
        retypedPassword: "",
        authError: ""
    };
    
    handleChange = e => {
        this.setState({
          [e.target.id]: e.target.value
        });
      };
    
      handleSubmit = e => {
        e.preventDefault();
    
        if(this.state.password===this.state.retypedPassword && this.state.password !==''&& this.state.retypedPassword!==''){
        axios
          .post("http://108fb526.ngrok.io/api/user", {
            email: this.state.email,
            name: this.state.name,
            phoneNumber: this.state.phone,
            password: this.state.password
          }).then( res => {
            this.props.history.push("/login");
          },
          err => {console.log("eroare")});
        }
        else {
          this.authError = true;
        }

      };
    render() {
        const error = this.state.authError ? (
            <p>bad credentials, try again</p>
          ) : null;

          return (
        <div className={classes.outerdiv}>
            <RegisterForm 
                change={(event) => this.handleChange(event)} 
                submit={this.handleSubmit}  
            />
            
            <div className={classes.error}>{error}</div>
        </div>
          );
        
    }

}

export default Register;
