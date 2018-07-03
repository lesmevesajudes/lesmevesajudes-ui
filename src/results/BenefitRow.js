import Grid from "@material-ui/core/Grid";
import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import {Link} from "react-router-dom";
import {Trans} from "react-i18next";
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

type Props = {
  benefit: Object,
};

export const BenefitRow = (props: Props) =>
    <Grid
        className='ResultPage'
        container
        justify='center'
        alignItems='center'
        key={props.benefit.ID}
    >
      <Grid container direction='row' justify='center' alignItems='center' key={props.benefit.ID}
            className='ItemResult'>
        <Grid item style={{margin: 'auto'}} xs={1}>
          <DoneIcon className="resultIconSuccess"/>
        </Grid>
        <Grid item xs={9}>
          <Typography style={{color: '#004a8e', fontSize: '1rem'}}>{props.benefit.name}</Typography>
        </Grid>
        <Grid item className='Separator' xs={2}>
          <Link className={"linkBenefits"} to={props.benefit.url}>
            <Tooltip id="mes-info-tooltip"
                     title="Si vol saber si reuneix tots els requisits necessaris per accedir a aquest ajut, cliqui aquí"
                     placement="right">
              <Button variant="contained" color="primary" key={props.benefit.ID}>
                <Typography style={{color: '#ffffff'}}>
                  <Trans>
                    Més informació
                  </Trans>
                </Typography>
              </Button>
            </Tooltip>
          </Link>
        </Grid>
      </Grid>
    </Grid>;

export const NoBenefitRow = () =>
    <Grid container justify='center' alignItems='center' className='ItemResult'>
      <Grid item xs={1}>
        <ClearIcon className="resultIconError"/>
      </Grid>
      <Grid item xs={11}>
        <Typography style={{color: '#004a8e', fontSize: '1rem'}}>
          <Trans>No opta a cap ajuda</Trans>
        </Typography>
      </Grid>
    </Grid>;

export default BenefitRow;
