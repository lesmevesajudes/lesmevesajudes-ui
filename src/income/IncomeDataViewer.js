//@flow
import React, {Component} from 'react';
import {Adult} from "../adults/AdultsTypes";
import {Map} from 'immutable';
import type {AdultId} from "../adults/AdultsTypes";
import {Control, LocalForm} from 'react-redux-form';
import {Input} from "material-ui";

type Props = {
    personesQuePodenTenirRendes: Map<AdultId, Adult>,
    onAddIncomeDataClick: Function
};

class IncomeDataViewer extends Component<Props, void> {
    renderIncomeDataList(personesQuePodenTenirRendes: Map<AdultId, Adult>) {
        return (
            <ul className="ItemList">
                {personesQuePodenTenirRendes.valueSeq().map((adult:Adult) => (
                    <li className="Item" key={adult.id}>
                        <div style={{float: 'left'}}>
                            {adult.nom} - {adult.data_naixement}
                        </div>
                        <div className="field" style={{float: 'right', maxWidth: '200px'}}>
                            <LocalForm model="PersonalIncomeData"
                                       onChange={(e) => this.props.onAddIncomeDataClick(e)}
                                       initialState={{id: adult.id, ingressos_bruts: adult.ingressos_bruts}}
                            >
                                <Control.text
                                    model='.adult_id'
                                    type="hidden"
                                />
                                <label>Ingressos bruts anuals (&euro;)</label>
                                <Control.text
                                    id='ingressos_bruts'
                                    model='.ingressos_bruts'
                                    component={Input}
                                    placeholder='0'/>
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
                    {this.renderIncomeDataList(this.props.personesQuePodenTenirRendes)}
                </div>
            </div>
        );
    }
}

export default IncomeDataViewer;