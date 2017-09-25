import React, { Component } from 'react';
import ChildrenViewer from './ChildrenViewer';
import { Link } from 'react-router-dom';

class ChildrenPage extends Component {
    render() {
        return (
            <div>
                <h1>Family children list</h1>
                <ChildrenViewer/>
                <Link to="/household/">
                    <button>
                        back
                    </button>
                </Link>
            </div>
        );
    }
}

export default ChildrenPage;