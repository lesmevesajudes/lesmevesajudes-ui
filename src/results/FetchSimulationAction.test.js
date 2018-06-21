import React from 'react';
import PersonsReducer, {initPersonState} from '../persons/PersonsReducer';
import {aMan, aPerson, aWoman, isPartner, isThePersonInFromOfTheComputer, ofAge} from '../../test/fixtures/Persons';
import {addPerson} from '../persons/PersonsActions';
import {buildRequest} from "./FetchSimulationAction";
import OpenFiscaAPIClient from "../shared/OpenFiscaAPIClient";

describe('PersonsReducer', () => {
  it('should add a person', () => {
    const maria = isThePersonInFromOfTheComputer(ofAge(45, aWoman(aPerson({id: '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1'}))));
    const pere = isPartner(ofAge(45, aMan(aPerson({id: '42c5f2a9-4f60-47ad-87cd-63a08b19b360'}))));
    const josep = isPartner(ofAge(12, aMan(aPerson({id: 'd2c2c1f0-3399-4143-a2c2-8c3263b493f3'}))));

    const state = {
      persons: [addPerson(maria), addPerson(pere), addPerson(josep)].reduce(PersonsReducer, initPersonState()),
      family: {
        custodies: {
          'd2c2c1f0-3399-4143-a2c2-8c3263b493f3': {
            primer: '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1',
            segon: '42c5f2a9-4f60-47ad-87cd-63a08b19b360'
          }
        },
        disposa_de_carnet_familia_monoparental: {
          '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c142c5f2a9-4f60-47ad-87cd-63a08b19b360': 'nop'
        },
        usuari_serveis_socials: {
          '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c142c5f2a9-4f60-47ad-87cd-63a08b19b360': true
        }
      },
      residence: {
        relacio_habitatge: 'llogater',
        codi_postal_habitatge: '08003',
        titular_contracte_de_lloguer_id: '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1',
        titular_contracte_lloguer_temps_empadronat: '9_mesos_o_mes',
        import_del_lloguer: '700'
      }
    };
    let client = new OpenFiscaAPIClient(true);
    return client.makeSimulation(buildRequest(state))
        .then(result => expect(result.data).toEqual({}), error => {
              console.log(error);
              console.log(error.response.data);
              console.log(error.config.data, null, 2);
            }
        );
  })
});
