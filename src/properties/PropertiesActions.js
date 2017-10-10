// @flow
import type {Properties} from './PropertiesTypes';

type AddPropertiesAction = {
    type: 'ADD_PROPERTIES';
    properties: Properties;
};

export type PropertiesActions = AddPropertiesAction

export function addProperties(propertiesRecord: Properties): AddPropertiesAction {
    return {
        type: 'ADD_PROPERTIES',
        properties: propertiesRecord
    };
}