import React, {Component} from 'react';
import {Grid} from "material-ui";
import {Adult} from "./AdultsTypes";

type Props = {
  person: Adult,
  removePerson: Function,
  updatePerson: Function
};

class PersonShowCase extends Component <Props> {
  render() {
    const {person} = this.props;
    console.log(this.props)
    return (
        <Grid item sm={6} key={person.id}>
          <Grid container spacing={8}>
            <li className={"ItemParent"} key={person.id} data-test={person.nom}>
              <Grid item sm={12}  onClick={() => this.props.updatePerson(person.id)}>
                <span>
                  {person.nom}<br/>
                  {person.data_naixement}
                </span>
              </Grid>
              <Grid item sm={12}>
                <button className="littlebutton"
                        key={"delete" + person.id}
                        onClick={() => this.props.removePerson(person.id)}
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
