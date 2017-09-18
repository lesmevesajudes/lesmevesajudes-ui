import React, {Component} from 'react';
import {LocalForm, Control} from 'react-redux-form';
import {connect} from 'react-redux';
import {addFinancialData} from './FinancialDataActions';
import * as UUID from '../shared/UUID';

class FinancialDataAdder extends Component {
    handleSubmit(values) {
        this.props.addFinancialData({...values, 'id': UUID.create()});
        this.props.history.push('/financial');
    }

    render() {
        return (
            <div>
                <h1>Add a new financial data</h1>
                <LocalForm model="financialData"
                           onSubmit={(values) => this.handleSubmit(values)}
                >
                    <div>
                        <div className="field">
                            <Control.text
                                model=".id"
                                type="hidden"
                                value={UUID.create()}
                            />
                        </div>
                        <div className="field">
                            <label>Description</label>
                            <Control.text
                                model=".description"
                                placeholder='Wage'/>
                        </div>
                        <div className="field">
                            <label>Amount</label>
                            <Control.text
                                model=".amount"
                                placeholder="100"/>
                        </div>
                    </div>
                    <button type="submit">
                        Add
                    </button>
                </LocalForm>
            </div>
        );
    }
}

export default connect(null, {addFinancialData})(FinancialDataAdder);
