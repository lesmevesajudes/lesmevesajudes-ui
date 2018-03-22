//@flow
import React, {Component} from 'react';
import type {Adult} from './AdultsTypes';
import {Trans, translate} from "react-i18next";
import {Button, Grid} from "material-ui";

type Props = {
    adults: Array<Adult>,
    onRemoveClick: Function,
    onUpdateClick: Function,
    onAddAdultClick: Function
};
class AdultsViewer extends Component<Props, void> {
    renderAdultsList(adults: Array<Adult>) {
        return (
            <ul className="ItemList">
                {adults.map((adult) => (
                    <li key={adult.id}>
                        <Grid container xs sm alignItems={"center"}>
                            <Grid item xs={12} sm={12}>
                                <span className="Item" onClick={() => this.props.onUpdateClick(adult.id)}>
                                    <Grid container xs sm alignItems={"center"}>
                                        <Grid item xs={6} sm={4}>
                                            {adult.nom}
                                        </Grid>
                                        <Grid item xs={2} sm={3}>
                                            {adult.rol.toUpperCase()}
                                        </Grid>
                                        <Grid item xs={3} sm={3}>
                                            {adult.data_naixement}
                                        </Grid>
                                        <Grid item xs={2} sm={2} alignItems={"center"}>
                                            <button className="littlebutton" key={"delete" + adult.id}
                                                    onClick={() => this.props.onRemoveClick(adult.id)}>
                                                <i className="material-icons">delete</i>
                                            </button>
                                            <button className="littlebutton" key={"edit" + adult.id}
                                                    onClick={() => this.props.onUpdateClick(adult.id)}>
                                                <i className="material-icons">edit</i>
                                            </button>
                                        </Grid>
                                    </Grid>
                                </span>
                            </Grid>
                        </Grid>
                        <div>

                        </div>
                    </li>
                ))}
            </ul>
);
    }

    render() {
        return (
            <div >
                <h1><Trans>Persones de la unitat de convivència</Trans></h1>
                <div>
                            {this.renderAdultsList(this.props.adults)}
                </div>
                <Button variant="raised" color="primary" id='AddAdultButton'
                        onClick={this.props.onAddAdultClick}><Trans>Afegir una persona</Trans></Button>
            </div>
        );
    }
}

export default translate('translations')(AdultsViewer);