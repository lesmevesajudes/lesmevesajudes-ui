import React, {Component} from 'react';
import {LocalForm, Control} from 'react-redux-form';

type Props = {
    initialState: any,
    persons: Array<any>,
    onCancel: Function,
    onSubmit: Function,
}

class FinancialDataForm extends Component<Props> {
    typeToDescription(type: string):string {
        const typeToDescriptionMapping = {
            "SALARI": "salari",
            "PENSIO_RAI": "pensió Rai",
            "PENSIO_VIUDETAT": "pensió viudetat",
            "PENSIO_ALIMENTICIA": "pensió alimentícia",
            "AJUDA_MENJADOR": "ajuda Menjador",
            "AJUDA_AL_LLOGUER": "ajuda al lloguer",
            "RGC": "renda de ciutadania garantida",
            "FACTURACIO_NEGOCI_FAMILIAR": "facturació del negoci familiar",
            "RENDIMENTS_PATRIMONI_FAMILIAR": "rendiments del patrimoni familiar",
            "PRESTACIO_RESIDENCIAL": "prestació residencial",
            "PRESTACIO_INCOMPATIBLE_AMB_EL_TREBALL": "mostra de prestació incompatible amb el treball"
        };

        return typeToDescriptionMapping[type];
    }

    render() {
        console.log(JSON.stringify(this.props.persons));
        return (
            <div>
                <h1>Afegir {this.typeToDescription(this.props.initialState.type)}</h1>
                <div className="FormContainer">
                    <LocalForm model="financialData"
                               onSubmit={this.props.onSubmit}
                               initialState={this.props.initialState}
                    >
                        <div>
                            <Control.text
                                model=".id"
                                type="hidden"
                            />
                            <Control.text
                                model=".tipus"
                                type="hidden"
                                placeholder='Tipus'/>
                            <div className="field">
                                <label>Receptor</label>
                                <div className="custom-select">
                                    <Control.select
                                        required
                                        model=".receptorId">
                                        <option defaultValue value="" >seleccioni una persona</option>
                                        {this.props.persons.map((person) => (
                                            <option key={person.id} value={person.id}>{person.nom}</option>
                                        ))}
                                    </Control.select>
                                </div>
                            </div>
                            <div className="field">
                                <label>Quantia</label>
                                <Control.text
                                    required
                                    className="RegularTextInput"
                                    model=".amount"
                                    placeholder="100"/>
                            </div>
                        </div>
                        <button type="submit">Validar</button>
                        <button onClick={this.props.onCancel}>Cancelar</button>
                    </LocalForm>
                </div>
            </div>
        );
    }
}

export default FinancialDataForm;
