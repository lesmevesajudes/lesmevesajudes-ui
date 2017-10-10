import React, {Component} from 'react';
import {LocalForm, Control} from 'react-redux-form';
import {connect} from 'react-redux';
import {addFinancialData} from './FinancialDataActions';
import * as UUID from '../shared/UUID';

class FinancialDataAdder extends Component {
    handleSubmit(values) {
        this.props.addFinancialData({...values, 'id': UUID.create()});
    }

    render() {
        return (
            <div>
                <h1>Afegir ingressos</h1>
                <LocalForm model="financialData"
                           onSubmit={(values) => this.handleSubmit(values)}
                           onUpdate={(values) => console.log(values)}
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
                            <label>Descripció</label>
                            <Control.text
                                model=".description"
                                placeholder='Wage'/>
                        </div>
                        <div className="field">
                            <label>Quantia</label>
                            <Control.text
                                model=".amount"
                                placeholder="100"/>
                        </div>
                    </div>
                    <button type="submit">
                        Validar
                    </button>
                </LocalForm>
            </div>
        );
    }
}

export default connect(null, {addFinancialData})(FinancialDataAdder);
