import React from 'react';
import {Control} from 'react-redux-form';
import {Button, Input} from "material-ui";

const IncomeDataFields = (props) => (
    <div>
        <div className="field">
            <Control.text
                model=".id"
                type="hidden"/>
        </div>
        <div className="field">
            <label>Ingressos bruts anuals (&euro;)</label>
            <Control.text
                id='ingressos_bruts'
                model='.ingressos_bruts'
                placeholder='0'
                component={Input}
                required/>
        </div>
        <h2>Ajuts que reb</h2>
        <div>
            <h3>Pensions</h3><br/>
            <Button>Pensió RAI</Button>
            <Button>Pensió viudetat</Button>
            <Button>Pensió alímentícia</Button>
        </div>
        <div>
            <h3>Ajudes</h3><br/>
            <Button >Ajuda menjador</Button>
            <Button >Renda Garantida de ciutadania</Button>
            <Button >Renda Bàsica d’Emancipació</Button>
            <Button >Prestació residencial</Button>
            <Button >Prestació incompatible amb el treball</Button>
            <Button >Prestació per al pagament del lloguer <br/>del Consorci d’Habitatge de Catalunya</Button>
        </div>
        <div>
            <h3>Rendiments</h3>
            <Button>Facturació del negoci</Button>
            <Button>Rendiments del patrimoni familiar</Button>
        </div>

    </div>
);

export default IncomeDataFields;