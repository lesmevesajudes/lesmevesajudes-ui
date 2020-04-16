import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {Trans} from "react-i18next";
import {connect} from "react-redux";
import {TextField} from 'redux-form-material-ui';
import FormSubTitle from '../components/FormComponents/FormSubTitle';
import {Question} from '../components/FormComponents/Question';

const AdminForm = props => {
  const { handleSubmit } = props
  return (
		  <form onSubmit={handleSubmit}>
		  	<table align="center">
		  		<tbody>
		  			<td>
			  			<label>
			  				<Typography gutterBottom>
			  					Usuari
			  				</Typography>
			  			</label>
		  			</td>
		  			<td>
		  				<Field component='input' name='username' width="50"/>
		  			</td>
		  			<td>
			  			<Typography gutterBottom>
		  					Contrasenya
		  				</Typography>
		  			</td>
		  			<td>
			  			<Field component='input' name='password' />
		  			</td>
		  			<td>
			  			<label>
				  			<Typography gutterBottom>
				  				Codi
			  				</Typography>
			  			</label>
		  			</td>
		  			<td>
			  			<Field component='input' name='simulation_id' />
		  			</td>
			  		<td>
			  			<Button variant='text' color='default' type='submit' vertical-align="center">
			  				<Trans i18nKey='aceptar'>Ok</Trans>
			  			</Button>
			  		</td>
		  		</tbody>
		  	</table>
		  </form>
  ) 
}

export default reduxForm({
  form: 'admin'
})(AdminForm)

