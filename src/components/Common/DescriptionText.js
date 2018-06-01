import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';

class DescriptionText extends Component {
  render() {
    const {selectInput} = this.props
    return (
        <Grid item>
          Input seleccionat: {this.props.selectInput}
        </Grid>
    );
  }
}
function mapStateToProps(state){
  return{
        active: state.form.PersonForm.active
  };
}
export default connect(mapStateToProps)(DescriptionText);
