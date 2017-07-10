import React, {Component} from 'react';
import {Form, track} from 'react-redux-form';
import ChildrenFields from './ChildrenFields';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class ChildrenUpdater extends Component {
    render() {
        return (
            <div>
                <h1>QQ</h1>
                <Form model={track("user.children[]", (children) => children.id === this.props.childID)}>
                    <ChildrenFields/>
                    <Link to="/children">
                        <button>
                        Update
                        </button>
                    </Link>
                </Form>
            </div>);
    }
}


function mapStateToProps(state, ownProps) {
    return {childID: ownProps.match.params.id};
}

export default connect(mapStateToProps, null)(ChildrenUpdater);
