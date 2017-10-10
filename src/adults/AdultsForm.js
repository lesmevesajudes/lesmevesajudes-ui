//@flow
import React, { Component } from 'react';
import { LocalForm } from 'react-redux-form';
import AdultsFields from './AdultsFields';
import type {Adult} from './AdultsTypes';


type Props = {
    initialState: ?Adult,
    onCancel: Function,
    onSubmit: Function,
}

class AdultsForm extends Component<Props> {
    render() {
        return (
            <div>
                <h1>Afegir un nou adult a la unitat de convivència</h1>
                <LocalForm
                    onSubmit={this.props.onSubmit}
                    initialState={this.props.initialState}
                >
                    <AdultsFields />
                    <button type="submit">Validar</button>
                    <button onClick={this.props.onCancel}>Cancelar</button>
                </LocalForm>
            </div>
        );
    }
}

export default AdultsForm;
