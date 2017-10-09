import React from 'react';
import { Link } from 'react-router-dom';

const BackButtonHOC = (ChildComponent, backButtonLink, backButtonText) => {
    return props => {
        const { match, location, history, staticContext, ...rest } = props;
        return (
            <div>
                <ChildComponent {...rest} />
                <Link to={backButtonLink}>
                    <button>
                        {backButtonText}
                    </button>
                </Link>
            </div>);
    }
};

export default BackButtonHOC;