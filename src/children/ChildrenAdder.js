//@flow
import React from 'react';
import { LocalForm } from 'react-redux-form';
import ChildrenFields from './ChildrenFields';
import { connect } from 'react-redux';
import { addChild } from './ChildrenActions';
import type {Child} from './ChildrenTypes';
import * as UUID from '../shared/UUID';

type Props = {
    addChild: Function,
    onFinishAdding: Function,
}
class ChildrenAdder extends React.Component<Props> {
    handleSubmit(formValues: Child) {
        this.props.addChild({...formValues, 'id': UUID.create()});
        this.props.onFinishAdding();
    }

    handleCancel() {
        this.props.onFinishAdding();
    }

    render() {
        return (
            <div>
                <h1>Afegir un nou menor</h1>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}
                >
                    <ChildrenFields />
                    <button type="submit">Validar</button>
                    <button onClick={this.handleCancel}>Cancelar</button>
                </LocalForm>
            </div>
        );
    }
}

export default connect(null, {addChild})(ChildrenAdder);
