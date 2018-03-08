//@flow
import React, {Component} from 'react';
import {Adult} from "../adults/AdultsTypes";
import {Map} from 'immutable';
import type {AdultId} from "../adults/AdultsTypes";
import {LocalForm} from 'react-redux-form';

type Props = {
    personesQuePodenTenirAjuts: Map<AdultId, Adult>,
    onAddIncomeDataClick: Function
};

class BenefitsViewer extends Component<Props, void> {
    renderIncomeDataList(personesQuePodenTenirRendes: Map<AdultId, Adult>) {
        return (
            <ul className="ItemList">
                {personesQuePodenTenirRendes.valueSeq().map((adult:Adult) => (
                    <li className="Item" key={adult.id}>
                        <div style={{float: 'left'}}>
                            {adult.nom} - {adult.data_naixement}
                        </div>
                        <div className="field" style={{float: 'right', maxWidth: '200px'}}>
                            <LocalForm model="benefitsForm"
                                       onChange={(e) => this.props.onAddIncomeDataClick(e)}
                                       initialState={{id: adult.id, ingressos_bruts: adult.ingressos_bruts}}
                            >
                                <button>Afegir Ajuts</button>
                            </LocalForm>
                        </div>
                    </li>
                ))}
            </ul>);
    }

    render() {
        return (
            <div>
                <h1>Ingressos de la unitat de convivència</h1>
                <div className="FormContainer">
                    {this.renderIncomeDataList(this.props.personesQuePodenTenirAjuts)}
                </div>
            </div>
        );
    }
}

export default BenefitsViewer;