//@flow
import React from 'react';
import {connect} from 'react-redux';
import {reportBug} from './ReportBugActions';
import { withRouter } from 'react-router-dom';
import {Field, formValueSelector, reduxForm} from 'redux-form';
import { TextField, Checkbox } from 'redux-form-material-ui';
import {Button, Grid, Hidden} from "material-ui";
import '../styles/main.css';

type Props = {
    currentState: any,
    handleSubmit: Function,
    onCancel: Function,
    classes: Object,
    resultatIncorrecte: Boolean
}


const ReportBug = (props: Props) => {
    const { classes, handleSubmit, resultatIncorrecte} = props;
    return (
        <Grid container>
                <Grid container direction={"column"}>
                    <h1>Informar del resultat de la simulació</h1>
                    <form name='ReportBug' onSubmit={handleSubmit}>
                        <Grid container alignItems={'stretch'}>
                          <Grid item xs={12}>
                            <Grid container direction={"column"} alignItems={"stretch"}>
                                <Grid item>
                                    <label><Field name='invalid_result' component={Checkbox}/> El resultat de la simulació NO és correcte.</label>
                                    {resultatIncorrecte &&
                                        <Grid item xs={12}>
                                            <label>Resultat esperat</label>
                                            <Field
                                                name="resultat_esperat"
                                                component={TextField}
                                                fullWidth
                                                placeholder='...'
                                            />
                                        </Grid>
                                    }
                                    <label>Comentaris</label>
                                    <Field
                                        name='comments'
                                        placeholder='...'
                                        fullWidth
                                        component={TextField}
                                    />
                                    <Hidden xsUp>
                                        <Field
                                            name='application_state'
                                            fullWidth
                                            component={TextField}
                                        />
                                    </Hidden>
                                    <Grid item>
                                        <Button variant="raised" color="primary" type="submit">Informar</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                            </Grid>
                        </Grid>
                    </form>
            </Grid>
        </Grid>
    );
};

const selector = formValueSelector('ReportBug');
function mapStateToProps(state) {
    return {
        initialValues: {application_state: JSON.stringify(state)},
        resultatIncorrecte: selector(state, 'invalid_result')
    };
}

export default connect(mapStateToProps, {reportBug})(withRouter(reduxForm({
    form: 'ReportBug'
})(ReportBug)));
