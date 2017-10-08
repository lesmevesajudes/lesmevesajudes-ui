import React from 'react';
import { Link } from 'react-router-dom'

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <Link to="/household/">
                    Troba a quines ajudes et pots acollir!
                </Link>
            </div>
        );
    }
}

export default IndexPage;