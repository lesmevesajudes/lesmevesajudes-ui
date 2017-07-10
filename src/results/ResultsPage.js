import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import fetchSimulation from './FetchSimulationAction';

class ResultsPage extends React.Component {
    componentDidMount() {
        console.log(this.props.simulationData);
        this.props.fetchSimulation(this.props.simulationData.income);
    }

    render() {
        if ( typeof this.props.resultsData.values === 'undefined' ) {
            return (<div>Loading....</div>);
        } else {
            return (
                <div>
                    <h1>Results!</h1>
                    <div>
                        <p>Salary: {this.props.simulationData.name}</p>
                        <p>Income Tax: {this.props.resultsData.values.income_tax}</p>
                    </div>
                    <div>
                        <button>
                            <Link to="/">
                                back
                            </Link>
                        </button>
                    </div>
                </div>
            );

        }

    }
}
function mapStateToProps(state) {
    return {
        simulationData: state.user,
        resultsData: state.results
    };
}

export default connect(mapStateToProps, {fetchSimulation})(ResultsPage);