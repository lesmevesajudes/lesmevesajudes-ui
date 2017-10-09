//@flow
import React, { Component } from 'react';
import { LocalForm } from 'react-redux-form';
import AdultsFields from './AdultsFields';
import { connect } from 'react-redux';
import { addAdult } from './AdultsActions';
import type {Adult} from './AdultsTypes';
import * as UUID from '../shared/UUID';

type Props = {
    addAdult: Function,
    onFinishAdding: Function,
}

class AdultsAdder extends Component<Props> {
    handleCancel: Function;
    handleSubmit: Function;
    render: Function;

    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleSubmit(formValues: Adult) {
        this.props.addAdult({...formValues, 'id': UUID.create()});
        this.props.onFinishAdding();
    }

    handleCancel() {
        this.props.onFinishAdding();
    }

    render() {
        return (
            <div>
                <h1>Afegir un nou adult a la unitat de convivència</h1>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}
                >
                    <AdultsFields />
                    <button type="submit">Validar</button>
                    <button onClick={this.handleCancel}>Cancelar</button>

                </LocalForm>
            </div>
        );
    }
}

export default connect(null, {addAdult})(AdultsAdder);
