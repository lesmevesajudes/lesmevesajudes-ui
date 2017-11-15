import React, {Component} from 'react';
import "./AppHeader.css";
import AcceptCookiesBanner from "./AcceptCookiesBanner";

class AppHeader extends Component {
    render() {
        return (
            <header>
                <AcceptCookiesBanner/>
                <div className="HeaderLogo"/>
                <p className="HeaderText">lesmevesajudes.barcelona</p>
            </header>
        );
    }
}

export default AppHeader;