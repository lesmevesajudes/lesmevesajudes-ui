import React, {Component} from "react";
import "./Footer.css";
import {Grid} from 'material-ui';

class AppFooter extends Component {
  render() {
    return (
        <footer>
          <Grid container className="footer">
            <Grid item className="footer-content">
              <ul>
                <li className="city-council">© Ajuntament de Barcelona</li>
                <li className="department">
                  <a href="http://www.barcelona.cat/dretssocials/ca/">
                    Drets Socials
                  </a>
                </li>
                <li>
                  <a href="/ca/avis-legal">Avís legal</a>
                </li>
                <li>
                  <a href="/ca/accessibilitat">Accessibilitat</a>
                </li>
              </ul>
            </Grid>
          </Grid>
        </footer>
    );
  }
}

export default AppFooter;
