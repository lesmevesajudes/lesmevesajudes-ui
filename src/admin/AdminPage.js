import React from 'react'
import AdminForm from './AdminForm'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {retrieveSimulation} from '../results/FetchSimulationAction';


class AdminPage extends React.Component {
  submit = values => {
    // print the form values to the console
    console.log(values.simulation_id)
    this.props.retrieveSimulation(values.simulation_id);
  }
  render() {
    return <AdminForm onSubmit={this.submit}/>
	//return <p>AdminPage</p>
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
	retrieveSimulation: bindActionCreators(retrieveSimulation, dispatch),
	dispatch
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);