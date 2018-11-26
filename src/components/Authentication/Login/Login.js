import React, {Component} from "react";
import axios from "axios";
import LoginForm from "./LoginForm/LoginForm";
import classes from "./Login.css";

class Login extends Component {
    state = {
        email: "",
        password: "",
        authError: "",
        access_token: "",
        expires_in: "",
        refresh_token: "",
        scope: "",
        token_type: ""
    };
    /* 
    http://108fb526.ngrok.io/oauth/token?
    grant_type=password&
    username=alexandrupetrutstoica1@gmail.com
    &password=admin
    */
    handleChange = e => {
        this.setState({
          [e.target.id]: e.target.value,
          authError: false
        });
      };

      handleSubmit = e => {
        var basicAuth = 'Basic ' + 
        e.preventDefault();
        axios
          .get(
            "http://108fb526.ngrok.io/oauth/token?grant_type=password&username=" +
              this.state.email +
              "&password=" +
              this.state.password
              ,
              {
                auth: {
                  username: 'my-trusted-client',
                  password: 'secret'
                }
              }
          )
          .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({
              authError: false,
              access_token: res.data.access_token
            });
            localStorage.setItem("Authorization", res.data.access_token);
            this.props.history.push("/home");

          })
          .catch(error => {
            this.setState({
              authError: true
            });
          });
      };

    render() {
        const error = this.state.authError ? (
            <p>bad credentials, try again</p>
          ) : null;

          return (
        <div className={classes.outerdiv}>
            <LoginForm 
                change={this.handleChange} 
                submit={this.handleSubmit}  
            />
            <div className={classes.error}>{error}</div>
        </div>
          );
        
    }

}

export default Login;
