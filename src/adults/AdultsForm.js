//@flow
import React, { Component } from 'react';
import { LocalForm } from 'react-redux-form';
import {Adult} from './AdultsTypes';
import AdultsFields from './AdultsFields';
import {Trans, translate} from "react-i18next";
import { withStyles } from 'material-ui/styles';
import {Button} from 'material-ui';


type Props = {
    initialState: ?Adult,
    onCancel: Function,
    onSubmit: Function,
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
        const { classes } = this.props;
        return (
            <div>
                <h1><Trans>Afegir una persona a la unitat de convivència</Trans></h1>
                <div className="FormContainer">
                    <LocalForm
                        onSubmit={this.props.onSubmit}
                        onChange={this.onChange}
                        initialState={this.props.initialState}>
                        <AdultsFields state={(typeof this.state === "undefined")? this.props.initialState:this.state}/>
                        <Button variant="raised" color="secondary" className={classes.button} onClick={this.props.onCancel}><Trans>Cancelar</Trans></Button>
                        <Button variant="raised" color="primary" type="submit" className={classes.button}><Trans>Validar</Trans></Button>
                    </LocalForm>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(translate('translations')(AdultsForm));
