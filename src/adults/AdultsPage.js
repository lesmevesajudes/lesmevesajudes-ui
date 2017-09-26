import React, { Component } from 'react';
import AdultsViewer from './AdultsViewer';
import { Link } from 'react-router-dom';

class AdultsPage extends Component {
    render() {
        return (
            <div>
                <h1>Adults de la unitat de convivència</h1>
                <AdultsViewer/>
                <Link to="/household/">
                    <button>
                        Tornar
                    </button>
                </Link>
            </div>
        );
    }
}

export default AdultsPage;