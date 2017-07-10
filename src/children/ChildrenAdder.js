import React, {Component} from 'react';
import {LocalForm, Control} from 'react-redux-form';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router-dom';
import {addChild} from './ChildrenActions';
import * as UUID from './UUID';

class ChildrenAdder extends Component {
    handleSubmit(values) {
        this.props.addChild({...values, 'id': UUID.create()});
        this.props.history.push('/children');
    }

    render() {
        return (
            <div>
                <h1>Add a new child</h1>
                <LocalForm model="children"
                           onSubmit={(values) => this.handleSubmit(values)}
                >
                    <div>
                        <div className="field">
                            <Control.text
                                model=".id"
                                type="hidden"
                                value={UUID.create()}
                            />
                        </div>
                        <div className="field">
                            <label>Child name</label>
                            <Control.text
                                model=".name"
                                placeholder='First Name'/>
                        </div>
                        <div className="field">
                            <label>Date born</label>
                            <Control.text
                                model=".born"
                                placeholder="10-10-2005"/>
                        </div>
                    </div>
                    <button type="submit">
                        Add
                    </button>
                </LocalForm>
            </div>
        );
    }
}

export default connect(null, {addChild})(ChildrenAdder);
