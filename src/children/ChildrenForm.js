//@flow
import React from 'react';
import { LocalForm } from 'react-redux-form';
import ChildrenFields from './ChildrenFields';
import type {Child} from './ChildrenTypes';
import {Button} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import {Trans, translate} from "react-i18next";

type Props = {
    initialState: ?Child,
    onSubmit: Function,
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


class ChildrenForm extends React.Component<Props> {
    render() {
        const { classes } = this.props;
        return (
            <div>
                <h1>Afegir un nou menor</h1>
                <div className="FormContainer">
                    <LocalForm
                        onSubmit={this.props.onSubmit}
                        initialState={this.props.initialState}>
                        <ChildrenFields />
                        <Button variant="raised" color="secondary" className={classes.button} onClick={this.props.onCancel}><Trans>Cancelar</Trans></Button>
                        <Button variant="raised" color="primary" className={classes.button} type="submit"><Trans>Validar</Trans></Button>
                    </LocalForm>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(translate('translations')(ChildrenForm));
