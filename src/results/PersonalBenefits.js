import React from "react";
import Link from "react-router-dom/es/Link";
import {Map} from "immutable";
import type {AdultId} from "../adults/AdultsTypes";
import {Adult} from "../adults/AdultsTypes";

type Props = {
    benefitsForPersons: any,
    persons: Map<AdultId, Adult>
}

class PersonalBenefits extends React.Component<Props> {
    constructor() {
        super();
        this.possibleBenefits = [
            {ID: "AE_230_mensual", name: "Fons infància", periode: "mes",url: "/ajuts/fons_infancia"},
            {ID: "AE_230_01_mensual", name: "Fons infància ajut famílies monoparentals", periode: "any",url: "/ajuts/fons_infancia"},
            {ID: "EG_233_mensual", name: "Ajuts individuals de menjador", periode: "dia", url: "/ajuts/menjador"},
            /*{ID: "GE_051_01_mensual", name: "Renda activa d'inserció discapacitat 33%", periode: "mes", url:"/ajuts/rai"},
            {ID: "GE_051_02_mensual", name: "Renda activa d'inserció per a emigrants retornats", periode: "mes", url:"/ajuts/rai"},
            {ID: "GE_051_03_mensual", name: "Renda activa d'inserció per a víctimes de violència de gènere o domèstica", periode: "mes", url:"/ajuts/rai"},
            {ID: "GG_270_mensual", name: "Renda Garantida Ciutadana", periode: "mes", url:"/ajuts/rgc"}*/];
        this.period = "2017-01";

    }


    hasAnyBenefit(personWithBenefits) {
        if ( typeof personWithBenefits === 'undefined') return false; //TODO hackish. this happends due some inconsistency in the request processing. On
        return this.possibleBenefits.reduce((acc, benefit) => {return acc + personWithBenefits[benefit.ID][this.period]}, 0) > 0
    }

    renderAPersonalBenefit(benefit, personWithBenefits) {
        if (personWithBenefits[benefit.ID][this.period] > 0) {
            return (
                <li className="Item" key={benefit.ID}>
                    {benefit.name} - {personWithBenefits[benefit.ID][this.period]} € / {benefit.periode}
                    <Link to={benefit.url}>
                        <button style={{float: 'right'}} className="littlebutton" key={benefit.ID}><i className="material-icons">info</i>
                        </button>
                    </Link>
                </li>);
        }
    };

    renderPersonalBenefits(person: Adult, personBenefits: any) {
        if (this.hasAnyBenefit(personBenefits)) {
            return (
                <li className="ItemGreen" key={person.id}>
                    <span>{person.nom}</span>
                    <ul className="ItemList">
                        {this.possibleBenefits.map((benefit) => this.renderAPersonalBenefit(benefit, personBenefits))}
                    </ul>
                </li>);
        } else {
            return (
                <li className="ItemGreen" key={person.id}>
                    <span>{person.nom} no opta a cap ajuda</span>
                </li>);
        }
    }

    renderPersonalBenefitList(personsData: Map<AdultId, Adult>, personsWithBenefits:any) {

        return (
            <ul className="ItemList">
                { personsData.valueSeq().map((person:Adult) => this.renderPersonalBenefits(person, personsWithBenefits[person.id])) }
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

export default PersonalBenefits;