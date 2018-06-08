// @flow
import type {ResidenceData} from "./ResidenceTypes";

type AddResidenceDataAction = {
  type: "ADD_RESIDENCE_DATA",
  residenceData: ResidenceData
};

export type ResidenceActions = AddResidenceDataAction;

export function addResidenceData(residenceData: ResidenceData): AddResidenceDataAction {
  return {
    type: "ADD_RESIDENCE_DATA",
    residenceData: residenceData
  };
}
