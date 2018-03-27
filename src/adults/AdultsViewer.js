//@flow
import React, {Component} from 'react';
import type {Adult} from './AdultsTypes';
import {Trans, translate} from "react-i18next";
import {Button, Grid} from "material-ui";
import {withStyles} from "material-ui/styles/index";
import Icon from 'material-ui/Icon';

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
            <Grid item xs={12}>
                <ul className="ItemList">
                    {adults.map((adult) => (
                        <li className={'PersonItems'} key={adult.id}>
                            <Grid container alignItems={'center'} justify={'space-between'} direction={'row'}>
                                <Grid item xs={10}>
                                <span className="Item" onClick={() => this.props.onUpdateClick(adult.id)}>
                                    <Grid container justify={'space-between'}>
                                        <Grid className="personNameAlign" item xs={6} sm={5}>
                                                  {adult.nom}
                                        </Grid>
                                        <Grid item xs={4} sm={2}>
                                            {adult.rol.toUpperCase()}
                                        </Grid>
                                        <Grid item xs={2} sm={3}>
                                            {adult.data_naixement}
                                        </Grid>
                                    </Grid>
                                </span>
                                </Grid>
                                <Grid item xs={2} sm={2}>
                                    <Grid container justify={'flex-end'}>
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
                        </li>
                    ))}
                </ul>
            </Grid>
        );
    }

    render() {
        return (
            <div className="bg-container">
                <h1><Trans>Persones de la unitat de convivència</Trans></h1>
                <Grid container className="AdultsViewerPage">
                    <Grid item xs={12}>
                        <Grid container>
                            {this.renderAdultsList(this.props.adults)}
                        </Grid>
                        <Grid container justify={"flex-start"}>
                            <Button id='AddAdultButton' class="addButton" onClick={this.props.onAddAdultClick}>
                                <Trans><span> Afegir una persona  </span><Icon>add_circle</Icon></Trans>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default translate('translations')(withStyles(styles)(AdultsViewer));