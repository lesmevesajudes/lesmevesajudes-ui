import React, {Component} from 'react';
import CookieBanner, { BannerContent, cookie } from 'react-cookie-banner';
import './AcceptCookiesBanner.css';


cookie('accepts-cookies', '');


class AcceptCookiesBanner extends Component {
    render() {
        const cookieProps = {
            dismissOnScroll: true,
            onAccept: () => {}
        };
        const bannerContentProps = {
            message: 'Aquest lloc web fa servir cookies per millorar l’experiència de navegació. En continuar entenem que s’accepta',
            link: { msg: 'la política de cookies', url: '#' },
            buttonMessage: 'D\'acord'
        };
        return (
            <CookieBanner {...cookieProps}>
                {(onAccept) => (
                    <div onClick={onAccept}>
                        <BannerContent {...bannerContentProps} onAccept={onAccept} />
                    </div>
                )}
            </CookieBanner>
        );
    }
}
export default AcceptCookiesBanner;