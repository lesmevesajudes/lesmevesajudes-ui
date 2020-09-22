import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {Box, Button, Grid} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import {Trans} from "react-i18next";
import {RETRIEVE_SIMULATION_ERROR, TIMED_OUT_SIMULATION} from '../results/FetchSimulationAction';

const AdminForm = (props) => {
  const { handleSubmit, retrieveSimulationError } = props
  return (
		  <form onSubmit={handleSubmit}>
		  	<Grid>
		  			<Grid container alignItems="center" justify="center" direction="row" spacing={4}>
              <Box item m={3}>
				  			<Typography gutterBottom>
				  				Codi simulació
			  				</Typography>
              </Box>
		  				<Field component='input' name='simulation_id' />
			  			<Button variant='text' color='default' type='submit' vertical-align="center">
				  				<Trans i18nKey='aceptar'>Ok</Trans>
			  			</Button>
			  		</Grid>
            <Grid>
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
            </Grid>
		  	</Grid>
		  </form>
  )
}



export default reduxForm({
  form: 'admin'
})(AdminForm)
