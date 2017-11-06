import React from 'react';
import { Link } from 'react-router-dom'

class IndexPage extends React.Component {
    render() {
        return (
            <div style={{paddingTop: '32px'}}>
                <button>
                    <Link to="/wizard/">
                        Troba a quines ajudes pots optar!
                    </Link>
                </button>
            </div>
        );
    }
}

export default IndexPage;