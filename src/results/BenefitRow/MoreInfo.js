import React from "react";
import {Trans, withTranslation} from 'react-i18next';
import {withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import {styles} from "../../styles/theme";

const Component = ({url, id, classes, t}) => (
  <a className={classes.link} href={t(url)} target="_blank" rel="noopener noreferrer">
    <Tooltip id='mes-info-tooltip'
             title={<Trans i18nKey='si_vol_saber_si_reuneix_requisits'>Si vols saber si reuneixes tots els
               requisits necessaris per accedir a aquest ajut, clica aquí</Trans>}
             placement='right'>
      <Button variant='contained' color='primary' key={id}>
          <Trans i18nKey='mes_informacio'>
            Més informació
          </Trans>
      </Button>
    </Tooltip>
  </a>
);

export default withTranslation("translations")(withStyles(styles)(Component));
