import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import fetchSimulation from './FetchSimulationAction';
import {serialize as serialize_adults} from "../adults/AdultsReducer";
import {serialize  as serialize_children} from "../children/ChildrenReducer";
import isDevelopment from '../shared/isDevelopment';

class PersonalBenefits extends React.Component {

    renderPersonalBenefitList(personsData, personsWithBenefits) {
        let possibleBenefits = ["AE_230_mensual", "EG_233_mensual", "GE_051_01_mensual", "GE_051_02_mensual", "GE_051_03_mensual", "GG_270_mensual", "HG_077_mensual"];

        let renderAPersonalBenefit= function(benefit, personWithBenefits) {
            return (<li key={benefit}> {benefit} - {personWithBenefits[benefit]["2017-01"]}</li>);
        };

        let renderPersonalBenefits = function(person, personsData) {
            return (
                    <li key={person.id}>
                        <p>{person.id} - {personsData[person.id].nom}</p>
                        <ul>
                            {possibleBenefits.map((benefit)  => renderAPersonalBenefit(benefit, person))}
                        </ul>
                    </li>);
        };

        return (
            <ul>
                {personsWithBenefits.map((person) => renderPersonalBenefits(person, personsData))}
            </ul>);
    }

    render() {
        return (
            <div>
                {this.renderPersonalBenefitList(this.props.persons, this.props.benefitsForPersons)}
            </div>
        );
    }
}


class FamilyBenefits extends React.Component {

    renderFamilyBenefitList(family) {
        let possibleBenefits = [];
        return (
            <ul>
                {possibleBenefits.map((benefit, family)  => (<li> {benefit} - {family[benefit]}</li>))}
            </ul>);
    }

    render() {
        return (
            <div>
                {this.renderFamilyBenefitList(this.props.family)}
            </div>
        );
    }
}

class ResultsPage extends React.Component {
    componentDidMount() {
        let url = isDevelopment ?
            'http://localhost:2000/api/1/calculate':
            'https://les-meves-ajudes-api.herokuapp.com/api/1/calculate';

        this.props.fetchSimulation(this.props.simulationData, url);
    }

    render() {
        if ( typeof this.props.resultsData.value === 'undefined' ) {
            return (<div>Loading....</div>);
        } else {
            return (
                <div>
                    <h1>Results!</h1>
                    <div>
                        <div>
                            <p>Benefits for persons:</p>

                            <PersonalBenefits persons={this.props.persons} benefitsForPersons={this.props.resultsData.value[0].persones}/>
                        </div>
                        <div>
                            <p>Benefits for households:</p>
                            <FamilyBenefits benefits={this.props.resultsData.value[0].families}/>
                        </div>
                    </div>
                    <div>
                        <Link to="/">
                            <button>
                                back
                            </button>
                        </Link>
                    </div>
                </div>
            );

        }

    }
}
function mapStateToProps(state) {
    return {
        simulationData: state,
        resultsData: state.results,
        persons: [...serialize_adults(state.adults), ...serialize_children(state.children)].reduce(function(acc, element){acc[element.id]=element;return acc;}, {})
    };
}

export default connect(mapStateToProps, {fetchSimulation})(ResultsPage);