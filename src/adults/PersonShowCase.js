import React, { Component } from 'react';
import { Grid } from "material-ui";

class PersonShowCase extends Component {
  render() {
    const {adult} = this.props
    return (
     	<Grid item sm={6} key={adult.id}>
			  <Grid container spacing={8}>
			    <li className={"ItemParent"} key={adult.id} data-test={adult.nom}>
					  <Grid item sm={12}>
						  <span onClick={() => this.props.onUpdateClick(adult.id)}>
								{adult.nom}
									<br />
								{adult.data_naixement}
							</span>
						</Grid>
						<Grid item sm={12}>
						  <button className="littlebutton"
								key={"delete" + adult.id}
								onClick={() => this.props.onRemoveClick(adult.id)}
								>
									<i className="material-icons">delete</i>
								</button>
							</Grid>
					</li>
				</Grid>
			</Grid>
    );
  }
}

export default PersonShowCase;