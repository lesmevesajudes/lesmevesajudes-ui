import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button,} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {Trans} from "react-i18next";
import {RETRIEVE_SIMULATION_ERROR, TIMED_OUT_SIMULATION} from '../results/FetchSimulationAction';

const AdminForm = (props) => {
  const { handleSubmit, retrieveSimulationError } = props
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
					  				Codi simulació
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
            <tr>
              <td>
              {retrieveSimulationError && (retrieveSimulationError === RETRIEVE_SIMULATION_ERROR) &&
				 <Typography color='error'>
				   <Trans i18nKey='codi_simulacio_incorrecte'>ID incorrecte. Revisa i torna a provar</Trans>
				 </Typography>
              }
              {retrieveSimulationError && retrieveSimulationError === TIMED_OUT_SIMULATION &&
	             <Typography color='error'>
	               <Trans i18nKey='codi_simulacio_caducat'>La simulació ha estat donada de baixa</Trans>
	             </Typography>
	           }
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
