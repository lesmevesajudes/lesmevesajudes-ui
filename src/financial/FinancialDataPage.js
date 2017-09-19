import React, { Component } from 'react';
import FinancialDataViewer from './FinancialDataViewer';
import { Link } from 'react-router-dom';

class FinancialDataPage extends Component {
    render() {
        return (
            <div>
                <h1>Financial data</h1>
                <FinancialDataViewer/>
                <button>
                    <Link to="/household/">
                        back
                    </Link>
                </button>
            </div>
        );
    }
}

export default FinancialDataPage;