// @flow

import type {PersonID} from '../persons/PersonTypes';

export type FamilyData = {
  custodies: Map<PersonID, Object>, //{Person.id: {existeix: boolean, tipus: string}}
  disposa_de_carnet_familia_monoparental: Map<string, boolean>,
  tipus_familia_nombrosa: string,
  tipus_familia_monoparental: string,
  usuari_serveis_socials: Object,
  parelles: Object
};
