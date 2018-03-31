//@flow
import React from 'react';
import {addHouseholdData} from './HouseholdDataActions';
import {connect} from 'react-redux';
import type {HouseholdData} from "./HouseholdDataTypes";
import {Select, Checkbox} from 'redux-form-material-ui';
import {Field, reduxForm} from 'redux-form';
import {MenuItem, Grid} from "material-ui";
import {Adult} from "../adults/AdultsTypes";
import type {AdultId} from "../adults/AdultsTypes";
import {Map} from 'immutable';
import {esFamiliaNombrosa, esFill, esSustentador} from "../shared/selectorUtils";
import {withStyles} from "material-ui/styles/index";

type Props = {
    initialValues: HouseholdData,
    addHouseholdData: Function,
    esUsuariServeisSocials: Boolean,
    esMonoparental: Boolean,
    esFamiliaNombrosa: Boolean,
    fills: Map<AdultId, Adult>,
    custodies: Object,
}

let HouseholdForm = (props: Props) => {
    const {esMonoparental, esFamiliaNombrosa, fills, custodies} = props;
    return (
        <div className="bg-container">
            <h1>Informació sobre el tipus de família</h1>
            <Grid container direction={'row'} justify={'space-around'}>
                    <Grid item xs sm={5}>
                        <form name='HouseholdForm'>
                            {esFamiliaNombrosa &&
                            <div className="field">
                                <label>Tipus familia nombrosa:</label>
                                <Field name='tipus_familia_nombrosa' component={Select} fullWidth>
                                    <MenuItem value="No">No</MenuItem>
                                    <MenuItem value="General">General</MenuItem>
                                    <MenuItem value="Especial">Especial</MenuItem>
                                </Field>
                            </div>}

                            {esMonoparental &&
                            <div className="field">
                                <label>Disposa del carnet de familia monoparental:</label>
                                <Field name='tipus_familia_monoparental' component={Select} fullWidth>
                                    <MenuItem value="No">No</MenuItem>
                                    <MenuItem value="General">General</MenuItem>
                                    <MenuItem value="Especial">Especial</MenuItem>
                                </Field>
                            </div>}
                            {esMonoparental &&
                            fills.valueSeq().map((infant: Adult) =>
                                <div key={infant.id}>
                                    <label><Field name={"custodies." + infant.id + ".existeix"}
                                                  component={Checkbox} fullWidth/> Tinc la custodia de {infant.nom}</label>
                                    {(custodies !== null && custodies[infant.id] !== null) &&
                                    <div className="field">
                                        <label>Tipus de guardia i custodia:</label>
                                        <Field name={'custodies.' + infant.id + '.tipus'} component={Select} fullWidth>
                                            <MenuItem value="compartida">Compartida</MenuItem>
                                            <MenuItem value="total">Total</MenuItem>
                                        </Field>
                                    </div>}
                                </div>)

                            }
                            <div className="field">
                                <label><Field name="es_usuari_serveis_socials" component={Checkbox} fullWidth/> Família usuaria de
                                    serveis socials en seguiment a un CSS o servei especialitzat de l'Ajuntament de
                                    Barcelona</label>
                            </div>
                        </form>
                    </Grid>
                    <Grid item xs sm={5} hidden={{ smDown: true }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis gravida erat. Donec ac nulla et ligula facilisis auctor sed eu enim. In hac habitasse platea dictumst. In ultrices rhoncus felis faucibus blandit. Curabitur scelerisque, urna nec finibus molestie, orci est imperdiet arcu, et fermentum velit est nec nisi. Morbi mollis vel purus sed fringilla. Aliquam ut tellus at justo varius vulputate non in justo. Ut at lorem at augue facilisis varius. Aliquam semper quam a dolor porttitor, et condimentum velit malesuada. In ac diam quis dolor lacinia varius ut sit amet ligula. Nulla facilisi. Integer vestibulum neque ac sagittis consequat. Morbi non odio lorem.
                    </Grid>
            </Grid>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        initialValues: state.household,
        esMonoparental: state.adults.filter((persona: Adult) => esSustentador(persona)).count() === 1,
        esFamiliaNombrosa: esFamiliaNombrosa(state.adults),
        fills: state.adults.filter((adult: Adult) => esFill(adult)),
        custodies: state.household.custodies
    };
}

export default connect(mapStateToProps, {addHouseholdData})(
    reduxForm(
        {
            form: 'HouseholdForm',
            onChange: (values, dispatch, props, previousValues) => {
                dispatch(addHouseholdData(values));
            }
        })(withStyles()(HouseholdForm)));