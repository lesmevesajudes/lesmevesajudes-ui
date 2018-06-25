import React, {Fragment} from 'react';
import {HelpText, isHelpAvailable} from '../HelpText';
import {Hidden, Typography} from '@material-ui/core';

class DescriptionText extends React.Component {

  render() {
    return (
      <Fragment>
            <Hidden smDown>
              {isHelpAvailable(this.props.currentField) ? 
              <Typography  className="boxDescriptionText" component='span'>
                <HelpText id={this.props.currentField}/>
              </Typography>
              :
              <Typography component='span'>
              </Typography>
              }

            </Hidden>
      </Fragment>
    )
  }
}

export default DescriptionText;
