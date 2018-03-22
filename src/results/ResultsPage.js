import React from 'react';
import {connect} from 'react-redux';
import {fetchSimulation} from './FetchSimulationAction';
import {Link} from "react-router-dom";
import PersonalBenefits from "./PersonalBenefits";
import FamilyBenefits from "./FamilyBenefits";
import type {AdultId, Adult} from "../adults/AdultsTypes";


type Props = {
    isError: boolean,
    isRequestDone: boolean,
    simulationData: any,
    resultsData: any,
    persons: Map<AdultId, Adult>
}
class ResultsPage extends React.Component <Props> {

    enoughDataForSimulation() {
        return this.props.persons.count() > 0;
    }

    componentDidMount() {
        if (this.enoughDataForSimulation()) {
            this.props.fetchSimulation(this.props.simulationData);
        }
    }

    render() {
        const divStyle = {'marginTop': '32px', 'marginBottom': '32px'};
        if (!this.enoughDataForSimulation()) {
            return (<div style={divStyle}>Falten dades per a executar la simulació...</div>);
        }

        if (!this.props.isRequestDone) {
            return (<div style={divStyle}>Carregant...</div>);
        }

        if (this.props.isError) {
            return (<div>
                <h1>Error fent la petició</h1>
                <p>{this.props.resultsData.message}</p>
                <p>Details:</p>
                <p>
                    {JSON.stringify(JSON.parse(this.props.resultsData.response.request.responseText), null, 2)}
                </p>
            </div>);
        }

        return (
            <div>
                <h1>Ajudes a les que podria optar</h1>
                <div>
                    <div className="FormContainer">
                        <PersonalBenefits benefitsForPersons={this.props.resultsData.persones}
                                          persons={this.props.persons}/>
                    </div>
                    <div>
                        <FamilyBenefits benefits={this.props.resultsData.families}/>
                    </div>
                </div>
                <div>
                    <Link to="/reportBug/">
                        <button>
                            <b>Informar d'un error</b>
                        </button>
                    </Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isError: state.results.isError,
        isRequestDone: state.results.isRequestDone,
        simulationData: state,
        resultsData: state.results.response,
        persons: state.adults
    };
}

export default connect(mapStateToProps, {fetchSimulation})(ResultsPage);