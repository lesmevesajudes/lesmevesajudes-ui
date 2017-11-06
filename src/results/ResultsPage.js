import React from 'react';
import {connect} from 'react-redux';
import fetchSimulation from './FetchSimulationAction';
import {serialize as serialize_adults} from "../adults/AdultsReducer";
import {serialize  as serialize_children} from "../children/ChildrenReducer";
import isDevelopment from '../shared/isDevelopment';

const isEmpty = obj => Object.keys(obj).length === 0 && obj.constructor === Object;

class PersonalBenefits extends React.Component {
    constructor() {
        super();
        this.possibleBenefits = ["AE_230_mensual", "EG_233_mensual", "GE_051_01_mensual", "GE_051_02_mensual", "GE_051_03_mensual", "GG_270_mensual", "HG_077_mensual"];
        this.period = "2017-01";

    }


    hasAnyBenefit(personWithBenefits) {
        return this.possibleBenefits.reduce((acc, benefit) => {return acc + personWithBenefits[benefit][this.period]}, 0) > 0
    }

    renderAPersonalBenefit(benefit, personWithBenefits) {
        if (personWithBenefits[benefit][this.period] > 0) {
            return (<li className="Item" key={benefit}> {benefit} - {personWithBenefits[benefit][this.period]} €</li>);
        }
    };

    renderPersonalBenefits(person, personsData) {
        if (this.hasAnyBenefit(person)) {
            return (
                <li className="ItemGreen" key={person.id}>
                    <span>{personsData[person.id].nom}</span>
                    <ul className="ItemList">
                        {this.possibleBenefits.map((benefit) => this.renderAPersonalBenefit(benefit, person))}
                    </ul>
                </li>);
        } else {
            return (
                <li className="ItemGreen" key={person.id}>
                    <span>{personsData[person.id].nom} no té cap ajuda</span>
                </li>);
        }
    }

    renderPersonalBenefitList(personsData, personsWithBenefits) {

        return (
            <ul className="ItemList">
                { Object.entries(personsWithBenefits).map(([id, person]) => this.renderPersonalBenefits({ ...person, id:id}, personsData)) }
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
            <ul className="ItemList">
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
        const divStyle={'marginTop': '32px', 'marginBottom': '32px'};
        if ( ! this.enoughDataForSimulation()  ) {
            return (<div style={divStyle}>Falten dades per a executar la simulació...</div>);
        }

        if ( isEmpty(this.props.resultsData) ) {
            return (<div style={divStyle}>Loading....</div>);
        } else {
            return (
                <div>
                    <h1>Results!</h1>
                    <div>
                        <div className="FormContainer">
                            <span>Ajudes per a persones:</span>

                            <PersonalBenefits benefitsForPersons={this.props.resultsData.persones} persons={this.props.persons}/>
                        </div>
                        <div>
                            <span>Ajudes per a la familía:</span>
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