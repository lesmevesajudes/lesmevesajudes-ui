import React, {Fragment} from 'react';
import {HelpText} from '../HelpText';
import {Hidden, Typography} from '@material-ui/core';

class DescriptionText extends React.Component {
  render() {
    return (
      <Fragment>
            <Hidden smDown>
              <Typography component='span'>
                <HelpText id={this.props.currentField}/>
            </Typography>
            </Hidden>
      </Fragment>
    )
  }
}

export default DescriptionText;
