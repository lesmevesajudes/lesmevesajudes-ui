//@flow
import React, { Component } from 'react';
import { LocalForm } from 'react-redux-form';
import {Adult} from './AdultsTypes';
import AdultsFields from './AdultsFields';
import {Trans, translate} from "react-i18next";



type Props = {
    initialState: ?Adult,
    onCancel: Function,
    onSubmit: Function,
}

class AdultsForm extends Component<Props, {}> {
    state = {};
    onChange: Function;

    constructor() {
        super();
        this.onChange = this.onChange.bind(this);
    }
    onChange(e: any) {
        this.setState(e);
    }
    render() {
        return (
            <div>
                <h1><Trans>Afegir un nou adult a la unitat de convivència</Trans></h1>
                <div className="FormContainer">
                    <LocalForm
                        onSubmit={this.props.onSubmit}
                        onChange={this.onChange}
                        initialState={this.props.initialState}>
                        <AdultsFields state={this.state}/>
                        <button className="CancelButton" onClick={this.props.onCancel}><Trans>Cancelar</Trans></button>
                        <button type="submit"><Trans>Validar</Trans></button>
                    </LocalForm>
                </div>
            </div>
        );
    }
}

export default translate('translations')(AdultsForm);
