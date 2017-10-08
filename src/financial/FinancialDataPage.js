import React, { Component } from 'react';
import FinancialDataViewer from './FinancialDataViewer';
import { Link } from 'react-router-dom';

class FinancialDataPage extends Component {
    render() {
        return (
            <div>
                <h1>Dades econòmiques</h1>
                <FinancialDataViewer/>
                <Link to="/admin/">
                    <button>
                        Tornar
                    </button>
                </Link>
            </div>
        );
    }
}

export default FinancialDataPage;