//@flow
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import {compose} from 'redux';
import Icon from '@material-ui/core/Icon';
import PrintResidenceForm from '../residence/ResidenceForm';
import {PrintFamilyForm} from '../family/FamilyForm';
import {styles} from '../styles/theme';
import PrintResultsPage from './PrintResultsPage';
import PrintStepsComponent from '../components/Steps/StepsComponent';
import {steps} from '../pages/Wizard.js';


const ResumePage = ({persons, residence}) => {
	
	const printSteps = [];
	steps.map((step, index) => printSteps.push({label: step.label, icon: step.icon}));
	
	const firstStepHeader = <PrintStepsComponent steps={printSteps} buttonVisible={false} step={0}/>;
	const secondStepHeader = <PrintStepsComponent steps={printSteps} step={1}/>;
	const thirdStepHeader = <PrintStepsComponent steps={printSteps} step={2}/>;
	const fourthStepHeader = <PrintStepsComponent steps={printSteps} step={3}/>;
	
	return (
		<div id="simulation_resume">
			{secondStepHeader}
			<PrintFamilyForm/>

			{thirdStepHeader}
			<PrintResidenceForm/>

			{fourthStepHeader}
			<PrintResultsPage/>
		</div>
	)
};

export default withStyles(styles)(ResumePage);

