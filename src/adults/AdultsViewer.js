//@flow
import React, {Component} from 'react';
import type {Adult} from './AdultsTypes';
import {Trans, translate} from "react-i18next";
import {Button, Grid} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import AddIcon from "material-ui-icons/AddCircle"

const styles = () => ({
    root: {
        flexGrow: 1
    }
});

type Props = {
    adults: Array<Adult>,
    onRemoveClick: Function,
    onUpdateClick: Function,
    onAddAdultClick: Function,
    classes: Object
};
class AdultsViewer extends Component<Props, void> {
    renderAdultsList(adults: Array<Adult>) {
        return (
            <Grid item xs={12} >
                <ul className="ItemList">
                    {adults.map((adult) => (
                    <li className={'PersonItems'} key={adult.id}>
                        <span className="Item" onClick={() => this.props.onUpdateClick(adult.id)}>
                                                            <Grid item xs={12}>
                        <Grid container alignItems={'center'} justify={'space-between'} direction={'row'}>
                                <Grid className="personNameAlign" item xs={5} sm={5}>
                                          {adult.nom}
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    {adult.rol.toUpperCase()}
                                </Grid>
                                <Grid item xs={3} sm={3}>
                                    {adult.data_naixement}
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <Grid container justify={'flex-end'} >
                                        <Grid item xs={6} sm={6}>
                                    <button className="littlebutton" key={"delete" + adult.id}
                                            onClick={() => this.props.onRemoveClick(adult.id)}>
                                        <i className="material-icons">delete</i>
                                    </button>
                                        </Grid>
                                        <Grid item xs={6} sm={6}>
                                    <button className="littlebutton" key={"edit" + adult.id}
                                            onClick={() => this.props.onUpdateClick(adult.id)}>
                                        <i className="material-icons">edit</i>
                                    </button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                </Grid>

                        </Grid>
                            </span>
                    </li>
                ))}
                    </ul>
            </Grid>
);
    }

    render() {
        const { classes } = this.props;

        return (
            <div className="bg-container">
                <h1><Trans>Persones de la unitat de convivència</Trans></h1>
                <Grid container className="AdultsViewerPage">
                    <Grid item xs={12}>
                        <Grid container>
                            {this.renderAdultsList(this.props.adults)}
                        </Grid>
                        <Grid container justify={"center"}>
                            <Button  id='AddAdultButton' class="addButton" onClick={this.props.onAddAdultClick}>
                                <Trans><span> Afegir una persona  </span><AddIcon  /></Trans>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default translate('translations')(withStyles(styles)(AdultsViewer));