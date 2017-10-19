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
            "RGC": "renda de ciutadania garantida"
        };

        return typeToDescriptionMapping[type];
    }

    render() {
        console.log(JSON.stringify(this.props.persons));
        return (
            <div>
                <h1>Afegir {this.typeToDescription(this.props.initialState.type)}</h1>
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
                            <Control.select
                                model=".receptorId">
                                <option disabled selected>seleccioni una persona</option>
                                {this.props.persons.map((person) => (
                                    <option value={person.id}>{person.nom}</option>
                                ))}
                            </Control.select>
                        </div>
                        <div className="field">
                            <label>Quantia</label>
                            <Control.text
                                model=".amount"
                                placeholder="100"/>
                        </div>
                    </div>
                    <button type="submit">Validar</button>
                    <button onClick={this.props.onCancel}>Cancelar</button>
                </LocalForm>
            </div>
        );
    }
}

export default FinancialDataForm;
