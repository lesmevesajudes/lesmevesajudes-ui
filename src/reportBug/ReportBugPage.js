//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {reportBug} from './ReportBugActions';
import { withRouter } from 'react-router-dom';
import {Field, reduxForm} from 'redux-form';
import { TextField } from 'redux-form-material-ui';
import { Button } from 'material-ui';
import {withStyles} from "material-ui/styles/index";
import type {Adult} from "../adults/AdultsTypes";


type Props = {
    currentState: any,
    handleSubmit: Function,
    onCancel: Function,
    classes: Object
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },
});


const handleSubmitForm = (formValues: Adult) => {
    console.log("Submitting:");
    console.log(formValues);
};

const ReportBug = (props: Props) => {
    const { handleSubmit, currentState, classes } = props;
    return (
        <div>
            <h1>Informar d'un error de l'aplicació</h1>
            <div className="FormContainer">
                <form name="ReportBug"
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
                                value={JSON.stringify(currentState, null, 4)}
                                placeholder='...'/>
                        </div>
                        <Button variant="raised" color="primary" type="submit">Informar d'error</Button>
                        <Button variant="raised" color="secondary" className={classes.button} onClick={props.onCancel}>Cancelar</Button>                        </div>
                </form>
            </div>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        currentState: state,
    };
}

export default withStyles(styles)(connect(mapStateToProps, {reportBug})(withRouter(reduxForm({
    form: 'ReportBug',
    onSubmit: (values: Object, dispatch: Function, props: Object) => dispatch(handleSubmitForm(values))
})(ReportBug))));
