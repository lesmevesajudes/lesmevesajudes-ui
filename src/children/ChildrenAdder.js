//@flow
import React, { Component } from 'react';
import { LocalForm } from 'react-redux-form';
import ChildrenFields from './ChildrenFields';
import { connect } from 'react-redux';
import { addChild } from './ChildrenActions';
import type {Child} from './ChildrenTypes';
import * as UUID from '../shared/UUID';

class ChildrenAdder extends Component {
    handleSubmit(formValues: Child) {
        this.props.addChild({...formValues, 'id': UUID.create()});
        this.props.history.push('/children');
    }

    componentWillMount() {}
    render() {
        return (
            <div>
                <h1>Afegir un nou menor</h1>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}
                >
                    <ChildrenFields />
                    <button type="submit">
                        Validar
                    </button>
                </LocalForm>
            </div>
        );
    }
}

export default connect(null, {addChild})(ChildrenAdder);
