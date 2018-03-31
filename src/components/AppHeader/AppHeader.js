import React, {Component} from "react";
import "./AppHeader.css";
import Link from "react-router-dom/es/Link";

class AppHeader extends Component {
  render() {
    return (
        <div className="AppHeaderContainer">
          <div className="AppHeader">
            <Link to="/">
              <div className="AppLogoPetit"/>
            </Link>
          </div>
        </div>
    );
  }
}

export default AppHeader;
