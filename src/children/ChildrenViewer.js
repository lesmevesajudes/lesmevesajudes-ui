//@flow
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {serialize} from './ChildrenReducer';
import {removeChild} from './ChildrenActions';
import type {Child} from './ChildrenTypes';

type Props = {
    removeChild: Function ;
    children: Array<Child>;
};

class ChildrenViewer extends React.Component<Props> {
    handleRemoveClicked(childId){
        this.props.removeChild(childId);
    }

    renderChildrenList(children) {
        return (
            <ul>
                {children.map((child) => (
                    <li key={child.id}>
                        <Link to={'/children/'+ child.id}>
                            {child.id} - {child.nom} - {child.data_naixement}
                        </Link>
                        <button key={child.id} onClick={e => this.handleRemoveClicked(child.id)}>
                            Remove
                        </button>
                    </li>
                ))}
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