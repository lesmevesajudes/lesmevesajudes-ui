import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {Trans} from "react-i18next";

const AdminForm = props => {
  const { handleSubmit } = props
  return (
		  <form onSubmit={handleSubmit}>
		  	<table align="center">
		  		<tbody>
		  			<tr>
			  			{/*<td>
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
			  			</td>*/}
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
			  		</tr>
		  		</tbody>
		  	</table>
		  </form>
  ) 
}

export default reduxForm({
  form: 'admin'
})(AdminForm)

