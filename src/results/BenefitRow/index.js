//@flow
import Grid from "@material-ui/core/Grid";
import {withStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import {Trans, withTranslation} from 'react-i18next';
import classNames from "classnames";
import {styles} from "../../styles/theme";
import NoBenefitRow from './NoBenefitRow';
import HasBenefitIcon from './HasBenefitIcon';
import Amount from './Amount';
import MoreInfo from './MoreInfo';
import Period from './Period';

type BenefitStatus = "permanent" | "active" | "outOfPeriodNextUnknown" | "outOfPeriodNextKnown";

function getBenefitStatus(benefit): BenefitStatus {
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

const BenefitRow = ({benefit, subject, classes, t}) => {
    const benefitStatus = getBenefitStatus(benefit);
    return (
    <Grid container direction='row' key={benefit.ID} className={classNames(classes.ItemResult, 'grid-flex-force')}>
      <Grid item container xs={1} justify='center' alignItems='center' className={classNames('grid-flex-force')}>
        <HasBenefitIcon benefitStatus={benefitStatus}/>
      </Grid>
      <Grid item container direction='column' xs={benefit.doNotShowAmount === true ? 9 : 7} justify='center'>
        <Grid item>
          <Typography className={classes.ResultsBenefitText}>{benefit.name}</Typography>
        </Grid>
        <Grid item className={classNames('line-height-force')}>
          <Period benefitStatus={benefitStatus} from={benefit.from} to={benefit.to}/>
        </Grid>
        <a className="printable-only" href={t(benefit.url)}>
        <Trans i18nKey='mes_informacio'>
          Més informació
        </Trans>
        </a>
      </Grid>
      {benefit.doNotShowAmount !== true &&
        <Amount benefit={benefit} subject={subject}/>
      }
      <Grid item className={classNames(classes.ResultsSeparator, 'screen-only')} xs={2}>
        <MoreInfo url={benefit.url} id={benefit.ID} />
      </Grid>
    </Grid>
    );
  };

export default withTranslation("translations")(withStyles(styles)(BenefitRow));
export {NoBenefitRow}
