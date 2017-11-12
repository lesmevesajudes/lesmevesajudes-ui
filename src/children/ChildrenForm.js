//@flow
import React from 'react';
import { LocalForm } from 'react-redux-form';
import ChildrenFields from './ChildrenFields';
import type {Child} from './ChildrenTypes';

type Props = {
    initialState: ?Child,
    onSubmit: Function,
    onCancel: Function,
}

class ChildrenForm extends React.Component<Props> {
    render() {
        return (
            <div>
                <h1>Afegir un nou menor</h1>
                <div className="FormContainer">
                    <LocalForm
                        onSubmit={this.props.onSubmit}
                        initialState={this.props.initialState}>
                        <ChildrenFields />
                        <button className="CancelButton" onClick={this.props.onCancel}>Cancelar</button>
                        <button type="submit">Validar</button>
                    </LocalForm>
                </div>
            </div>
        );
    }
}

export default ChildrenForm;
