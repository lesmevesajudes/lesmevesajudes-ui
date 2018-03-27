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
    classes: Object,
};

class AdultsViewer extends Component<Props, void> {
    renderAdultsList(adults: Array<Adult>) {
        return (
            <Grid item xs={12}>
                <Grid container alignItems={'stretch'} justify={'space-between'} spacing={40}>
                    <Grid item xs sm={10}>
                        <Grid container wrap={"wrap"} spacing={40} >
                            <Grid  className={"border-family"} item sm={6}>
                            {
                                adults.filter((adult)=> adult.rol === "pares").map((adult) => (
                                                    <li className={'PersonItems'} key={adult.id}>
                                                        <Grid container alignItems={'center'} justify={'space-between'} direction={'row'}>
                                                            <Grid className="Item" item xs={12}>
                                                            <span onClick={() => this.props.onUpdateClick(adult.id)}>
                                                                <Grid container justify={'space-between'}>
                                                                    <Grid className="personNameAlign" item>
                                                                            {adult.nom}
                                                                    </Grid>
                                                                </Grid>
                                                            </span>
                                                                <button className="littlebutton" key={"delete" + adult.id}
                                                                        onClick={() => this.props.onRemoveClick(adult.id)}>
                                                                    <i className="material-icons">delete</i>
                                                                 </button>
        
                                                            </Grid>
                                                        </Grid>
                                                    </li>
                                ))
                            }
                            {adults.length != 2 &&  
                                <Button id='AddAdultButton' class="addButton" onClick={() => this.props.onAddAdultClick("pares")}>
                                    <Trans><span> Afegir una persona  </span><Icon>add_circle</Icon></Trans>
                                </Button>
                             }
                                                               
                            </Grid>
                            <Grid className={"border-family"} item sm={6}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at atque aut deserunt, distinctio facilis itaque modi nisi officia porro praesentium quis similique soluta tempore totam ut voluptas voluptate voluptatem.
                            </Grid>
                        </Grid>
                        <Grid container wrap={"wrap"} spacing={40}>
                            <Grid className={"border-family"} item sm={12}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut, dolorem nam perferendis quod suscipit voluptatibus. Consequuntur corporis delectus dolorum enim error expedita impedit neque nihil odit quam, tempore voluptates!
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid className={"border-family"} item xs sm={2}>
                            hola amics
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    render() {
        return (
            <div className="bg-container">
                <h1><Trans>Persones de la unitat de convivència</Trans></h1>
                <Grid container className="AdultsViewerPage" spacing={24}>
                    <Grid item xs={12}>
                        <Grid alignItems={'center'} justify={'space-between'}>
                            {this.renderAdultsList(this.props.adults)}
                        </Grid>
                        <Grid container justify={"flex-start"}>

                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default translate('translations')(withStyles(styles)(AdultsViewer));