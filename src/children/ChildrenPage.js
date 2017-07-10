import React, { Component } from 'react';
import ChildrenViewer from './ChildrenViewer';

class ChildrenPage extends Component {
    render() {
        return (
            <div>
                <h1>Family children list</h1>
                <ChildrenViewer/>
            </div>
        );
    }
}

export default ChildrenPage;