import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import {HelpText} from '../HelpText';
import {Hidden, Typography} from '@material-ui/core';

type Props = {
  currentField: string
}
class DescriptionText extends React.Component {
  componentDidUpdate() {
    const ele = document.getElementById("descriptionText");
    if(ele.outerText != ""){
      ele.classList.add('textDescription');
    }
    else {
      ele.classList.remove('textDescription');
    }
  }
  render() {
    return (
      <Fragment>
            <Hidden smDown>
              <Typography  id="descriptionText" component='span'>
                <HelpText id={this.props.currentField}/>
            </Typography>
            </Hidden>
      </Fragment>
    )
  }
};

export default DescriptionText;
