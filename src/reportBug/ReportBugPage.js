//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reportBug} from './ReportBugActions';
import { withRouter } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import { TextField } from 'redux-form-material-ui';
type Props = {
    currentState: any
}
class ReportBugPage extends Component<Props> {
    handleSubmit(values) {
        //this.props.reportBug({...values, application_state: this.props.currentState});
        //this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h1>Informar d'un error de l'aplicació</h1>
                <div className="FormContainer">
                    <form name="ReportBug"
                               onSubmit={(values) => this.handleSubmit(values)}
                    >
                        <div>
                            <div className="field">
                                <label>Nom de l'informador</label>
                                <Field
                                    component={TextField}
                                    name="nom_informador"
                                    placeholder='Nom'/>
                            </div>
                            <div className="field">
                                <label>Correu electrònic de l'informador</label>
                                <Field
                                    component={TextField}
                                    type="email"
                                    name="correu_informador"
                                    placeholder='nom@domini.tld'/>
                            </div>
                            <div className="field">
                                <label>Resultat esperat</label>
                                <Field
                                    rows="20"
                                    cols="50"
                                    name="resultat_esperat"
                                    component={TextField}
                                    placeholder='...'/>
                            </div>
                            <div className="field">
                                <label>Estat de la aplicació</label>
                                <textarea
                                    readonly={true}
                                    rows="40"
                                    cols="50"
                                    value={JSON.stringify(this.props.currentState, null, 4)}
                                    placeholder='...'/>
                            </div>
                            <button type="submit">Informar d'error</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        currentState: state,
    };
}

export default connect(mapStateToProps, {reportBug})(withRouter(reduxForm({form: 'ReportBug'})(ReportBugPage)));
