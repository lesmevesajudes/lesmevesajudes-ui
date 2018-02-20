//@flow
import React, {Component} from 'react';
import type {Renda} from './IncomeDataTypes';
import {Adult} from "../adults/AdultsTypes";
import {Map} from 'immutable';

type Props = {
    personesQuePodenTenirRendes: Map<Adult>,
    ingressosDeclarats: Map<Renda>,
    onRemoveClick: Function,
    onUpdateClick: Function,
    onAddIncomeDataClick: Function
};

class IncomeDataViewer extends Component<Props, void> {
    renderIncomeDataList(personesQuePodenTenirRendes: Map<Adult>, ingressosDeclarats: Map<Renda>) {
        return (
            <ul className="ItemList">
                {personesQuePodenTenirRendes.valueSeq().map((adult) => (
                    <li className="Item" key={adult.id}>
                        <span style={{float: 'left'}} onClick={() => this.props.onUpdateClick(adult.id)}>
                            {adult.nom} - {adult.data_naixement} -
                        </span>
                        <button style={{float: 'right'}} key={adult.id} onClick={() => this.props.onUpdateClick(adult.id)}>
                            Modificar
                        </button>
                    </li>
                ))}
            </ul>);
    }

    render() {
        return (
            <div>
                <h1>Ingressos de la unitat de convivència</h1>
                <div className="FormContainer">
                    {this.renderIncomeDataList(this.props.personesQuePodenTenirRendes)}
                </div>
            </div>
        );
    }
}

export default IncomeDataViewer;