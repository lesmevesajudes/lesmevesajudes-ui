import React, { Component } from 'react';
import FinancialDataViewer from './FinancialDataViewer';

class FinancialDataPage extends Component {
    render() {
        return (
            <div>
                <h1>Dades econòmiques</h1>
                <FinancialDataViewer/>
            </div>
        );
    }
}

export default FinancialDataPage;