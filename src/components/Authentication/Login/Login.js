import React, {Component} from "react";
import axios from "axios";
import LoginForm from "./LoginForm/LoginForm";
import "./Login.css";

class Login extends Component {
    state = {
        email: "",
        password: "",
        authError: ""
    };
    
    handleChange = e => {
        this.setState({
          [e.target.id]: e.target.value,
          authError: false
        });
      };

      handleSubmit = e => {
        e.preventDefault();
        axios
          .get(
            "http://localhost:8080/api/user/" +
              this.state.email +
              "/" +
              this.state.password
          )
          .then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({
              authError: false
            });
            this.props.authStatus(true, this.state.email);
            this.props.history.push("/");
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
        <div className="outerdiv">
            <LoginForm 
                change={this.handleChange} 
                submit={this.handleSubmit}  
            />
            <div className="error">{error}</div>
            {/* <div className="forgotPassword"><h5>Forgot your password?</h5></div> */}

        </div>
          );
        
    }

}

export default Login;
