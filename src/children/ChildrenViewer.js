//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {serialize} from './ChildrenReducer';
import {removeChild} from './ChildrenActions';

class ChildrenViewer extends Component {
    handleRemoveClicked(childId){
        this.props.removeChild(childId);
    }
    renderChildrenList(children) {
        return (
            <ul>
                {children.map((child) => (
                    <li key={child.id}>
                        <Link to={'/children/'+ child.id}>
                            {child.id} - {child.name} - {child.dateBorn}
                        </Link>
                        <button key={child.id} onClick={e => this.handleRemoveClicked(child.id)}>
                            Remove
                        </button>
                    </li>
                ))}
                <li key="new">
                    <Link to="/children/new">Create a new child</Link>
                </li>
            </ul>);
    }

    render() {
        return (
            <div>
                {this.renderChildrenList(this.props.children)}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        children: serialize(state.children)
    };
}

export default connect(mapStateToProps, {removeChild})(ChildrenViewer);