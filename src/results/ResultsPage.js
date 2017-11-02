import React from 'react';
import {connect} from 'react-redux';
import fetchSimulation from './FetchSimulationAction';
import {serialize as serialize_adults} from "../adults/AdultsReducer";
import {serialize  as serialize_children} from "../children/ChildrenReducer";
import isDevelopment from '../shared/isDevelopment';

const isEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

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
                { Object.entries(personsWithBenefits).map(([id, person]) => renderPersonalBenefits({ ...person, id:id}, personsData)) }
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


class FamilyBenefits extends React.Component<void> {
    // There are no family benefits (At least in codeas HG_077_mensual should be familia benefit)
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

    enoughDataForSimulation() {
        return Object.keys(this.props.persons).length > 0;
    }

    componentDidMount() {
        let url = isDevelopment ?
            'http://localhost:2000/calculate' :
            'https://les-meves-ajudes-api.herokuapp.com/calculate';
        if (this.enoughDataForSimulation()) {
            this.props.fetchSimulation(this.props.simulationData, url);
        }

    }

    render() {
        if ( ! this.enoughDataForSimulation()  ) {
            return (<div>Falten dades per a executar la simulació....</div>);
        }

        if ( isEmpty(this.props.resultsData) ) {
            return (<div>Loading....</div>);
        } else {
            return (
                <div>
                    <h1>Results!</h1>
                    <div>
                        <div>
                            <p>Ajudes per a persones:</p>

                            <PersonalBenefits benefitsForPersons={this.props.resultsData.persones} persons={this.props.persons}/>
                        </div>
                        <div>
                            <p>Ajudes per a la familía:</p>
                            <FamilyBenefits benefits={this.props.resultsData.families}/>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

function listPersons(state) {
    return [
        ...serialize_adults(state.adults),
        ...serialize_children(state.children)].reduce(function(acc, element){acc[element.id]=element;return acc;}, {})
}
function mapStateToProps(state) {
    return {
        simulationData: state,
        resultsData: state.results,
        persons: listPersons(state)
    };
}

export default connect(mapStateToProps, {fetchSimulation})(ResultsPage);