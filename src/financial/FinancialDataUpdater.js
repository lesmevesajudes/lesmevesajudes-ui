import React, {Component} from 'react';
import {Form, track} from 'react-redux-form';
import FinancialDataFields from './FinancialDataFields';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class FinancialDataUpdater extends Component {
    render() {
        return (
            <div>
                <h1>QQ</h1>
                <Form model={track("user.financialData[]", (financialData) => financialData.id === this.props.financialDataId)}>
                    <FinancialDataFields/>
                    <Link to="/financial">
                        <button>
                            Update
                        </button>
                    </Link>
                </Form>
            </div>);
    }
}


function mapStateToProps(state, ownProps) {
    return {financialDataId: ownProps.match.params.id};
}

export default connect(mapStateToProps, null)(FinancialDataUpdater);
