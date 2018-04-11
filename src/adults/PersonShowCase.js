import React, {Component} from 'react';
import {Grid} from "material-ui";
import {Adult} from "./AdultsTypes";

type Props = {
  person: Adult
};

class PersonShowCase extends Component <Props> {
  render() {
    const {person} = this.props;
    return (
        <Grid item sm={6} key={person.id}>
          <Grid container spacing={8}>
            <li className={"ItemParent"} key={person.id} data-test={person.nom}>
              <Grid item sm={12}>
						  <span onClick={() => this.props.onUpdateClick(person.id)}>
								{person.nom}
                <br/>
                {person.data_naixement}
							</span>
              </Grid>
              <Grid item sm={12}>
                <button className="littlebutton"
                        key={"delete" + person.id}
                        onClick={() => this.props.onRemoveClick(person.id)}
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
