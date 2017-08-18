import axios from 'axios';
import * as UUID from '../shared/UUID';
import {serialize} from "../children/ChildrenReducer";

export const FETCH_SIMULATION='fetch_simulation';

const CALCULATE_URL ='http://localhost:2000/api/1/calculate';

/*
 {
     "output_format": "variables",
     "scenarios": [
             {
                "test_case": {
                    "households": [
                        {
                            "parents": ["pare1"],
                            "children": ["infant1"]
                        }
                    ],
                    "persons": [
                        {
                            "id": "pare1",
                            "birth": "1961-01-15",
                            "disposable_income": "7000",
                            "usuari_serveis_socials": 1,
                            "ciutat_empadronament": "Barcelona"
                        },
                        {
                            "id": "infant1",
                            "birth": "2002-01-15",
                            "usuari_serveis_socials": 1,
                            "ciutat_empadronament": "Barcelona"
                        }
                    ]
             },
             "period": "2017-1"
           }
        ],
     "variables": ["ajuda_016_mensual"]
 */
function buildRequest(simulationData) {

    simulationData.user = { ...simulationData.user, id: UUID.create()};
    let requestBody = {
        output_format: "variables",
        variables: ["ajuda_016_mensual"],
        scenarios: [
            {
                test_case: {
                    households: [
                        {
                            parents: [simulationData.user.id],
                            children: serialize(simulationData.children).map((child) => child.id)
                        }
                    ],
                    persons: [
                        {
                            id: simulationData.user.id,
                            birth: simulationData.user.dateBorn,
                            disposable_income: 7000,
                            ciutat_empadronament: simulationData.user.city,
                            usuari_serveis_socials: simulationData.user.social_services_user,
                        }
                    ]
                },
                "period": "2017-1"
            }
        ]
    };
    let children = serialize(simulationData.children).map((child) =>
        ({
        id: child.id,
        birth: child.dateBorn,
        usuari_serveis_socials: child.social_services_user,
        ciutat_empadronament: child.city
    }));
    requestBody.scenarios[0].test_case.persons =  [...requestBody.scenarios[0].test_case.persons, ...children ];
    return requestBody;
}
export default  function fetchSimulation(simulationData) {
    let requestBody = buildRequest(simulationData);
    const request = axios.post(`${CALCULATE_URL}`,requestBody);
    return {
        type: FETCH_SIMULATION,
        payload: request
    };
}