import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {serialize} from './FinancialDataReducer';
import {removeFinancialData} from './FinancialDataActions';

class FinancialDataViewer extends Component {
    handleRemoveClicked(financialDataId){
        this.props.removeFinancialData(financialDataId);
    }
    renderFinancialDataList(financialData) {
        return (
            <ul>
                {financialData.map((financialData) => (
                    <li key={financialData.id}>
                        <Link to={'/financial/'+ financialData.id}>
                            {financialData.id} - {financialData.description} - {financialData.amount}
                        </Link>
                        <button key={financialData.id} onClick={e => this.handleRemoveClicked(financialData.id)}>
                            Remove
                        </button>
                    </li>
                ))}
                <li key="new">
                    <Link to="/financial/new">Create a new financial data record</Link>
                </li>
            </ul>);
    }

    render() {
        return (
            <div>
                {this.renderFinancialDataList(this.props.financialData)}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        financialData: serialize(state.financialData)
    };
}

export default connect(mapStateToProps, {removeFinancialData})(FinancialDataViewer);