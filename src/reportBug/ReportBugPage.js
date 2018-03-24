//@flow
import React from 'react';
import {connect} from 'react-redux';
import {reportBug} from './ReportBugActions';
import { withRouter } from 'react-router-dom';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import { TextField, Checkbox } from 'redux-form-material-ui';
import {Button} from 'material-ui';
import {withStyles} from "material-ui/styles/index";

type Props = {
    currentState: any,
    handleSubmit: Function,
    onCancel: Function,
    classes: Object,
    resultatIncorrecte: Boolean
}

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        minWidth: '700px'
    },
    hiddenInput: {
        display: 'none'
    }
});

const ReportBug = (props: Props) => {
    const { classes, handleSubmit, resultatIncorrecte} = props;
    return (
        <div>
            <h1>Informar del resultat de la simulació</h1>
            <div className="FormContainer">
                <div class="bg-container extra-padding">
                <form name="ReportBug" onSubmit={handleSubmit}>
                    <div>
                        <div className='field'>
                            <label><Field name='invalid_result' component={Checkbox}/> El resultat de la simulació NO és correcte.</label>
                        </div>
                        {resultatIncorrecte &&
                            <div className="field">
                                <label>Resultat esperat</label>
                                <Field
                                    name="resultat_esperat"
                                    component={TextField}
                                    className={classes.input}
                                    placeholder='...'/>
                            </div>
                        }

                        <div className='field'>
                            <label>Comentaris</label>
                            <Field
                                name='comments'
                                placeholder='...'
                                className={classes.input}
                                component={TextField}
                            />
                        </div>
                        <Field
                            name='application_state'
                            className={classes.hiddenInput}
                            component={TextField}
                        />
                        <Button variant="raised" color="primary" type="submit">Informar</Button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    );
};

const selector = formValueSelector('ReportBug');
function mapStateToProps(state) {
    return {
        initialValues: {application_state: JSON.stringify(state)},
        resultatIncorrecte: selector(state, 'invalid_result')
    };
}

export default withStyles(styles)(connect(mapStateToProps, {reportBug})(withRouter(reduxForm({
    form: 'ReportBug'
})(ReportBug))));
