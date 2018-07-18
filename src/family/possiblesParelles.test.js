import React from 'react';
import PersonsReducer, {initPersonState, serialize} from '../persons/PersonsReducer';
import {
  aMan,
  aPerson,
  aWoman,
  isPartner,
  isSon,
  isThePersonInFromOfTheComputer,
  named,
  ofAge
} from '../../test/fixtures/Persons';
import {addPerson} from '../persons/PersonsActions';
import {detectaFamiliesAPartirDeCustodies} from "./detectaFamiliesAPartirDeCustodies";
import {toArray} from "./createFamilyName";
import type {Person} from "../persons/PersonTypes";
import {sustentadorsSolitarisIPossiblesParelles} from "./FamilyForm";

describe('possiblesParelles', () => {
  it('finds possible partners', () => {
    const maria = isThePersonInFromOfTheComputer(ofAge(45, aWoman(aPerson({id: '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1'}))));
    const pere = named('Pere', isPartner(ofAge(45, aMan(aPerson({id: '42c5f2a9-4f60-47ad-87cd-63a08b19b360'})))));
    const josep = named('Josep', isSon(ofAge(12, aMan(aPerson({id: 'd2c2c1f0-3399-4143-a2c2-8c3263b493f3'})))));

    const state = {
      persons: [addPerson(maria), addPerson(pere), addPerson(josep)].reduce(PersonsReducer, initPersonState()),
      family: {
        custodies: {
          'd2c2c1f0-3399-4143-a2c2-8c3263b493f3': {
            primer: '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1',
            segon: 'no_conviu'
          }
        },
        disposa_de_carnet_familia_monoparental: {
          '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c142c5f2a9-4f60-47ad-87cd-63a08b19b360': true
        },
        usuari_serveis_socials: {
          '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c142c5f2a9-4f60-47ad-87cd-63a08b19b360': true
        }
      }
    };

    const families = toArray(detectaFamiliesAPartirDeCustodies(state.family.custodies, serialize(state.persons)));
    const familiesMonoparentals = families.filter((familia) => familia.monoparental);
    const sustentadorsUnicsIDs = familiesMonoparentals.map((familia) => familia.sustentadors_i_custodia[0]);
    const sustentadorsSolitaris = state.persons.filter((person: Person) => sustentadorsUnicsIDs.includes(person.id));
    const sustentadorsSolitarisAmbPossiblesParelles = sustentadorsSolitarisIPossiblesParelles(sustentadorsSolitaris, serialize(state.persons));
    expect(sustentadorsSolitarisAmbPossiblesParelles).toEqual({[maria.id]: [pere]})
  }),
      it('it is safe with no fmailies', () => {
        const maria = isThePersonInFromOfTheComputer(ofAge(45, aWoman(aPerson({id: '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c1'}))));
        const pere = named('Pere', isPartner(ofAge(45, aMan(aPerson({id: '42c5f2a9-4f60-47ad-87cd-63a08b19b360'})))));
        const josep = named('Josep', isSon(ofAge(12, aMan(aPerson({id: 'd2c2c1f0-3399-4143-a2c2-8c3263b493f3'})))));

        const state = {
          persons: [addPerson(maria), addPerson(pere), addPerson(josep)].reduce(PersonsReducer, initPersonState()),
          family: {
            custodies: {},
            disposa_de_carnet_familia_monoparental: {
              '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c142c5f2a9-4f60-47ad-87cd-63a08b19b360': true
            },
            usuari_serveis_socials: {
              '23c1a8ca-8c2d-46bf-8469-ad1e1d5190c142c5f2a9-4f60-47ad-87cd-63a08b19b360': true
            }
          }
        };

        const families = toArray(detectaFamiliesAPartirDeCustodies(state.family.custodies, serialize(state.persons)));
        const familiesMonoparentals = families.filter((familia) => familia.monoparental);
        const sustentadorsUnicsIDs = familiesMonoparentals.map((familia) => familia.sustentadors_i_custodia[0]);
        const sustentadorsSolitaris = state.persons.filter((person: Person) => sustentadorsUnicsIDs.includes(person.id));
        const sustentadorsSolitarisAmbPossiblesParelles = sustentadorsSolitarisIPossiblesParelles(sustentadorsSolitaris, serialize(state.persons));
        expect(sustentadorsSolitarisAmbPossiblesParelles).toEqual({})
      })
});
