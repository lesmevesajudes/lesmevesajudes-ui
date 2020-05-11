import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PrintResidenceForm from '../residence/ResidenceForm';
import {PrintFamilyForm} from '../family/FamilyForm';
import {styles} from '../styles/theme';
import PrintResultsPage from './PrintResultsPage';
import PrintStepsComponent from '../components/Steps/StepsComponent';
import {steps} from '../pages/Wizard.js';
import PersonForm from '../persons/PersonForm';

const ResumePage = ({persons, residence, resultsData, match}) => {
	const printSteps = [];
	steps.map((step, index) => printSteps.push({label: step.label, icon: step.icon}));
	
	const firstStepHeader = <PrintStepsComponent steps={printSteps} buttonVisible={false} step={0}/>;
	const secondStepHeader = <PrintStepsComponent steps={printSteps} buttonVisible={false} step={1}/>;
	const thirdStepHeader = <PrintStepsComponent steps={printSteps} buttonVisible={false} step={2}/>;
	const fourthStepHeader = <PrintStepsComponent steps={printSteps} buttonVisible={false} step={3}/>;
	
	if (persons) {
		return (
			<div id="simulation_resume" style={{display:'none'}}>
				<div style={{'page-break-after':'always'}}>
					{firstStepHeader}
					{persons.valueSeq().map(person => {
							return <PersonForm initialValues={person}/>
						})
					}
				</div>
				
				<div style={{'page-break-after':'always'}}>
					{secondStepHeader}
					<PrintFamilyForm/>
				</div>
				
				<div style={{'page-break-after':'always'}}>
					{thirdStepHeader}
					<PrintResidenceForm/>
				</div>
				
				<div style={{'page-break-after':'always'}}>
					{fourthStepHeader}
					<PrintResultsPage/>
				</div>
			</div>);
	}
	return '';
	
};

export default withStyles(styles)(ResumePage);


