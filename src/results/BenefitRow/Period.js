import React from "react";
import {Trans} from "react-i18next";
import Typography from "@material-ui/core/Typography";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "../../styles/theme";
import {dateToString} from "../../shared/dateUtils";

const periodCaption= {
  "permanent":"convocatoria_permanent",
  "active":"convocatoria_entre",
  "outOfPeriodNextKnown": "propera_convocatoria",
  "outOfPeriodNextUnknown":"convocatoria_finalitzada"
};

const Component = ({benefitStatus, from, to}) => {
    const caption = periodCaption[benefitStatus];
    var captionFrom = "";
    var captionTo = "";
    if (benefitStatus === "active") {
      captionFrom = dateToString(from);
      captionTo = dateToString(to);
    } else if (benefitStatus === "outOfPeriodNextKnown") {
      captionFrom = dateToString(from);
      captionTo = dateToString(to);
    }
    console.log('status: ' + benefitStatus);
    console.log("from: " + captionFrom + " to: " + captionTo);

    return (
      <Typography variant='caption'>
        <Trans i18nKey={caption} values={{from:captionFrom, to:captionTo}} />
      </Typography>
    );
};

export default withStyles(styles)(Component);
