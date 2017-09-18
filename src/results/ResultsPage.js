import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import fetchSimulation from './FetchSimulationAction';

class ResultsPage extends React.Component {
    componentDidMount() {
        console.log(this.props.simulationData);
        this.props.fetchSimulation(this.props.simulationData);
    }

    render() {
        if ( typeof this.props.resultsData === 'undefined' ) {
            return (<div>Loading....</div>);
        } else {
            return (
                <div>
                    <h1>Results!</h1>
                    <div>
                        <p>params: {JSON.stringify(this.props.resultsData.params)}</p>
                        <p>value: {JSON.stringify(this.props.resultsData.value)}</p>
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
        simulationData: state,
        resultsData: state.results
    };
}

export default connect(mapStateToProps, {fetchSimulation})(ResultsPage);