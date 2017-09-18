//@flow
import React, {Component} from 'react';
import {LocalForm} from 'react-redux-form';
import AdultsFields from './AdultsFields';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class AdultsUpdater extends Component {
    render() {
        return (
            <div>
                <h1>Update Adult information</h1>
                <LocalForm >
                    <AdultsFields {...this.props.adult} />
                    <Link to="/adults">
                        <button>
                        Update
                        </button>
                    </Link>
                </LocalForm>
            </div>);
    }
}


function mapStateToProps(state, ownProps) {
    console.log("adult: "+JSON.stringify(state.adults.get(ownProps.match.params.id)));
    return {adult: state.adults.get(ownProps.match.params.id)};
}

export default connect(mapStateToProps, null)(AdultsUpdater);
