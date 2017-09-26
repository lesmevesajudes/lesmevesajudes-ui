import React, { Component } from 'react';
import ChildrenViewer from './ChildrenViewer';
import { Link } from 'react-router-dom';

class ChildrenPage extends Component {
    render() {
        return (
            <div>
                <h1>Menor de la unitat de convivència</h1>
                <ChildrenViewer/>
                <Link to="/household/">
                    <button>
                        Tornar
                    </button>
                </Link>
            </div>
        );
    }
}

export default ChildrenPage;