import React, {Component} from 'react';
import CookieBanner from 'react-cookie-banner';
import './AcceptCookiesBanner.css';


class AcceptCookiesBanner extends Component {
    render() {
        return (
            <CookieBanner disableStyle={true}
                          dismissOnScroll={true}
                          message={'Aquest lloc web fa servir cookies pròpies i de tercers per millorar l’experiència de navegació, i oferir continguts i serveis d’interès. En continuar la navegació entenem que s’accepta la nostra'}
                          link={{msg: 'política de cookies.', url: '#' }}
                          buttonMessage={'D\'acord'}
            />
        );
    }
}
export default AcceptCookiesBanner;