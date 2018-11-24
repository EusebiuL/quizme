import React, {Component} from "react";
import axios from "axios";
import classes from "./Menu.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
    render(){
        return (
            <header className={classes.menuWrapper}>
                <ul>
                    <li><Link to="/pool/questions" className={classes.link}>Questions pool</Link></li>
                    <li><Link to="/pool/events" className={classes.link}>Events pool</Link></li>
                    <li><Link to="/dashboard/questions" className={classes.link}>Questions dashboard</Link></li>
                    <li><Link to="dashboard/events"className={classes.link}>Events dashboard</Link></li>
                </ul>
            </header>
        );
    }
}

export default Menu;