//@flow
import React, {Component} from 'react';
import type {Adult} from './AdultsTypes';
import {Trans, translate} from "react-i18next";
import {Grid} from "material-ui";
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
                <Grid container>
                    <Grid item xs sm={10}>
                        <Grid container wrap={"wrap"} >
                            <Grid  className={"border-family"} item sm={6}>
                            <Grid container >
                                    {
                                        adults.filter((adult)=> adult.rol === "pares").map((adult) => (
                                            <Grid item sm={6}>
                                                <Grid category justify={'space-jutify'} >
                                                            <li className={'ItemParent'} key={adult.id}>
                                                            <Grid item sm={12}>
                                                                    <span onClick={() => this.props.onUpdateClick(adult.id)}>
                                                                                    {adult.nom}
                                                                    </span>
                                                            </Grid>
                                                            <Grid item sm={12}>
                                                                    <button className="littlebutton" key={"delete" + adult.id}
                                                                            onClick={() => this.props.onRemoveClick(adult.id)}>
                                                                        <i className="material-icons">delete</i>
                                                                    </button>
                                                            </Grid>

                                                            </li>
                                                </Grid>
                                            </Grid>
                                        ))
                                    }
     
                            {adults.length !== 2 &&  
                                <Grid item sm={12}>
                                <span id='AddAdultButton' class="addButton" onClick={() => this.props.onAddAdultClick("pares")}>
                                    <Icon>add_circle</Icon>
                                </span>
                                </Grid>
                             }
                            </Grid>                           
                            </Grid>
                            <Grid className={"border-family"} item sm={6}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at atque aut deserunt, distinctio facilis itaque modi nisi officia porro praesentium quis similique soluta tempore totam ut voluptas voluptate voluptatem.
                            </Grid>
                        </Grid>
                        <Grid container wrap={"wrap"}>
                            <Grid className={"border-family"} item sm={12}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aut, dolorem nam perferendis quod suscipit voluptatibus. Consequuntur corporis delectus dolorum enim error expedita impedit neque nihil odit quam, tempore voluptates!
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid  item xs sm={2}>
                         <Grid container wrap={"wrap"}> 
                            <Grid  className={"border-family"} item sm={6}>
                                <Grid container direction={'column'} spacing={6}>
                         hola amics
                            </Grid>
                                </Grid>
                         </Grid>
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