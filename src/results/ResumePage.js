import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import PrintResidenceForm from '../residence/ResidenceForm';
import {PrintFamilyForm} from '../family/FamilyForm';
import {styles} from '../styles/theme';
import PrintResultsPage from './PrintResultsPage';
import PrintStepsComponent from '../components/Steps/StepsComponent';
import {steps} from '../pages/Wizard.js';
import PersonForm from '../persons/PersonForm';
import FormSubTitle from '../components/FormComponents/FormSubTitle';
import {serialize} from '../persons/PersonsReducer';

class ResumePage extends React.Component<Props, State> {
	
	componentDidMount() {
		var printContents = document.getElementById("simulation_resume").innerHTML;
		var popup = window.open('','_blank');
		popup.focus();
		popup.document.head.innerHTML = document.head.innerHTML;
		popup.document.body.innerHTML = printContents;
		popup.print();
		popup.close();
		return false;
	}
	
	render() {
	    const {persons} = this.props;
	    
		const printSteps = [];
		steps.map((step, index) => printSteps.push({label: step.label, icon: step.icon}));
		
		const firstStepHeader = <PrintStepsComponent steps={printSteps} buttonVisible={false} step={0}/>;
		const secondStepHeader = <PrintStepsComponent steps={printSteps} buttonVisible={false} step={1}/>;
		const thirdStepHeader = <PrintStepsComponent steps={printSteps} buttonVisible={false} step={2}/>;
		const fourthStepHeader = <PrintStepsComponent steps={printSteps} buttonVisible={false} step={3}/>;
		
		if (persons) {
			const serializedPersons = serialize(persons);
			return (
				<div id="simulation_resume" style={{display:'none'}}>
					<div className="page-step">
						{firstStepHeader}
						{serializedPersons.map((person,index) => {
								const formKey = 'PersonForm' + index;
								return (<div>
											<FormSubTitle>Persona {index + 1}</FormSubTitle>
											<PersonForm initialValues={person} form={formKey} formKey={formKey}/>
										</div>
								)
							})
						}
					</div>
					
					<div className="page-step"> 
						{secondStepHeader}
						<PrintFamilyForm/>
					</div>
					
					<div className="page-step">
						{thirdStepHeader}
						<PrintResidenceForm/>
					</div>
					
					<div className="page-step">
						{fourthStepHeader}
						<PrintResultsPage/>
					</div>
				</div>);
		}
		return '';
	}
};

export default withStyles(styles)(ResumePage);


