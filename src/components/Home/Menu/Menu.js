import React, {Component} from "react";
import axios from "axios";
import "./Menu.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Menu extends Component {
    render(){
        return (
            <header className="menuWrapper">
                <ul>
                    <li><Link to="/pool/questions" className="link">Questions pool</Link></li>
                    <li><Link to="/pool/events" className="link">Events pool</Link></li>
                    <li><Link to="/dashboard/questions" className="link">Questions dashboard</Link></li>
                    <li><Link to="dashboard/events"className="link">Events dashboard</Link></li>
                </ul>
            </header>
        );
    }
}

export default Menu;