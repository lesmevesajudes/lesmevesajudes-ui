// @flow

import type {PersonID} from '../persons/PersonTypes';

export type FamilyData = {
  tipus_familia_nombrosa: string,
  tipus_familia_monoparental: string,
  es_usuari_serveis_socials: boolean,
  custodies: Map<PersonID, Object>, //{Person.id: {existeix: boolean, tipus: string}}
  disposa_de_carnet_familia_monoparental: Map<string, boolean>,
  usuari_serveis_socials: Object
};
