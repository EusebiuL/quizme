import React, { Component } from 'react';
import classes from './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Authentication/Login/Login";
import Register from "../components/Authentication/Register/Register";
import Home from "../components/Home/Home";
import QuizBuilder from "../components/UserQuiz/QuizBuilder/QuizBuilder";
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className={classes.App}>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={Home} />
            <Route path="/quiz" component={QuizBuilder} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
