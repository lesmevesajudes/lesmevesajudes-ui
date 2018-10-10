//@flow
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import ClearIcon from "@material-ui/icons/Clear";
import DoneIcon from "@material-ui/icons/Done";
import React from "react";
import {Trans} from "react-i18next";
import {Link} from "react-router-dom";
import {dateToString} from "../shared/dateUtils";
import {styles} from "../styles/theme";

type Props = {
  benefit: Object,
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

const Period = ({ benefit }) => {
  const status = benefitStatus(benefit);

  if (status === "permanent") {
    return <Typography variant='caption'><Trans>Convocatòria permanent</Trans></Typography>;
  } else if (status === "active") {
    return <Typography variant='caption'><Trans>Convocatòria
      entre {dateToString(benefit.from)} i {dateToString(benefit.to)}</Trans></Typography>;
  } else if (status === "outOfPeriodNextUnknown") {
    return <Typography variant='caption'><Trans>Convocatòria finalitzada</Trans></Typography>;
  } else if (status === "outOfPeriodNextKnown") {
    return <Typography variant='caption'><Trans>Propera convocatòria
      entre {dateToString(benefit.from)} i {dateToString(benefit.to)}</Trans></Typography>;
  }
};

export const BenefitRow = ({ benefit, subject }: Props) =>
    <Grid
        className='ResultPage'
        container
        justify='center'
        alignItems='center'
        key={benefit.ID}
    >
      <Grid container direction='row' justify='center' alignItems='center' key={benefit.ID} className='ItemResult'>
        <Grid item xs={1}>
          <DoneIcon className={
            benefitStatus(benefit) === "active" || benefitStatus(benefit) === "permanent"
                ? "resultIconSuccess"
                : "resultIconOutOfPeriod"
          }/>
        </Grid>
        <Grid item xs={7}>
          <Typography style={{ color: "#004a8e", fontSize: "1rem" }}>{benefit.name}</Typography>
          <Period benefit={benefit}/>
        </Grid>
        <Grid item className='Separator' xs={2}>
          <Typography style={{ color: "#004a8e", fontSize: "1rem", paddingTop: "1rem" }}>
            {typeof benefit.amountText !== "undefined"
                ? benefit.amountText
                : `${subject[benefit.ID][Object.keys(subject[benefit.ID])[0]]} € / ${benefit.periode}`}
          </Typography>
          <Typography style={{ color: "#004a8e", fontSize: "1rem" }}>
            {benefit.conditions}
          </Typography>
        </Grid>
        <Grid item className='Separator' xs={2}>
          <Link className={"linkBenefits"} to={benefit.url}>
            <Tooltip id='mes-info-tooltip'
                     title='Si vol saber si reuneix tots els requisits necessaris per accedir a aquest ajut, cliqui aquí'
                     placement='right'>
              <Button variant='contained' color='primary' key={benefit.ID} className={"buttonResultsXS"}>
                <Typography style={{ color: "#ffffff" }}>
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
        <ClearIcon className='resultIconError'/>
      </Grid>
      <Grid item xs={11}>
        <Typography style={{ color: "#004a8e", fontSize: "1rem" }}>
          <Trans>No opta a cap ajuda</Trans>
        </Typography>
      </Grid>
    </Grid>;

export default (withStyles(styles)(BenefitRow));
