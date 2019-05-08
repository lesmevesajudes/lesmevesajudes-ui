//@flow
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import DoneIcon from "@material-ui/icons/Done";
import React, {Fragment} from "react";
import {Trans} from "react-i18next";
import {dateToString} from "../shared/dateUtils";
import {styles} from "../styles/theme";

type Props = {
  benefit: Object,
  classes: Object,
  subject: Object
};

type BenefitStatus = "permanent" | "active" | "outOfPeriodNextUnknown" | "outOfPeriodNextKnown";

function benefitStatus(benefit): BenefitStatus {
  const now = Date.now();

  if (typeof benefit.from === "undefined") {
    return "permanent";
  } else if (now >= benefit.from && now <= benefit.to) {
    return "active";
  } else if (now > benefit.to) {
    return "outOfPeriodNextUnknown";
  } else if (now < benefit.from) {
    return "outOfPeriodNextKnown";
  } else { // Just to keep flow happy
    return "outOfPeriodNextUnknown"
  }
}

const Period = ({benefit}) => {
  const status = benefitStatus(benefit);

  if (status === "permanent") {
    return <Typography variant='caption'><Trans i18nKey='convocatoria_permanent'>Convocatòria
      permanent</Trans></Typography>;
  } else if (status === "active") {
    return <Typography variant='caption'>
      <Trans i18nKey='convocatoria_entre'>Convocatòria entre {dateToString(benefit.from)} i {dateToString(benefit.to)}
      </Trans></Typography>;
  } else if (status === "outOfPeriodNextUnknown") {
    return <Typography variant='caption'>
      <Trans i18nKey='convocatoria_finalitzada'>Convocatòria finalitzada</Trans>
    </Typography>;
  } else if (status === "outOfPeriodNextKnown") {
    return <Typography variant='caption'>
      <Trans i18nKey='propera_convocatoria'>
        Propera convocatòria entre {dateToString(benefit.from)} i {dateToString(benefit.to)}
      </Trans>
    </Typography>;
  }
};

export const BenefitRow = ({benefit, subject, classes}: Props) =>
    <Grid container direction='row' key={benefit.ID} className={classes.ItemResult}>
      <Grid item container xs={1} justify='center' alignItems='center'>
        <DoneIcon className={
          benefitStatus(benefit) === "active" || benefitStatus(benefit) === "permanent"
              ? classes.greenText
              : classes.darkGrayText
        }/>
      </Grid>
      <Grid item container direction='column' xs={benefit.doNotShowAmount === true ? 9 : 7} justify='center'>
        <Grid item>
          <Typography className={classes.ResultsBenefitText}>{benefit.name}</Typography>
        </Grid>
        <Grid item>
          <Period benefit={benefit}/>
        </Grid>
      </Grid>
      {benefit.doNotShowAmount !== true &&
      <Grid item container className={classes.ResultsSeparator} xs={2} alignItems='center' justify='center'>
        <Typography className={classes.ResultsBenefitText}>
          {typeof benefit.amountText !== "undefined"
              ? benefit.amountText
              : <Fragment>{subject[benefit.ID][Object.keys(subject[benefit.ID])[0]]} € / {benefit.periode}</Fragment>}
        </Typography>
        <Typography className={classes.ResultsBenefitText}>
          {benefit.conditions}
        </Typography>
      </Grid>}
      <Grid item className={classes.ResultsSeparator} xs={2}>
        <a className={classes.link} href={benefit.url.toString()} target="_blank" rel="noopener noreferrer">
          <Tooltip id='mes-info-tooltip'
                   title={<Trans i18nKey='si_vol_saber_si_reuneix_requisits'>Si vols saber si reuneixes tots els
                     requisits necessaris per accedir a aquest ajut, clica aquí</Trans>}
                   placement='right'>
            <Button variant='contained' color='primary' key={benefit.ID}>
                <Trans i18nKey='mes_informacio'>
                  Més informació
                </Trans>
            </Button>
          </Tooltip>
        </a>
      </Grid>
    </Grid>;

export const NoBenefitRow = withStyles(styles)(({classes}: Props) =>
    <Grid container justify='center' alignItems='center' className={classes.ItemResult}>
      <Grid item container xs={1} justify='center' alignItems='center'>
        <ClearIcon className={classes.darkGrayText}/>
      </Grid>
      <Grid item xs={11}>
        <Typography className={classes.ResultsBenefitText}>
          <Trans i18nKey='no_opta_a_cap_ajuda'>No opta a cap ajuda</Trans>
        </Typography>
      </Grid>
    </Grid>);

export default withStyles(styles)(BenefitRow);
