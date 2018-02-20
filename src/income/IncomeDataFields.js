import React from 'react';
import {Control} from 'react-redux-form';

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
                className="RegularTextInput"
                id='ingressos_bruts'
                model='.ingressos_bruts'
                placeholder='0'
                required/>
        </div>
        <h2>Ajuts que reb</h2>
        <div>
            <h3>Pensions</h3><br/>
            <button>Pensió RAI</button>
            <button>Pensió viudetat</button>
            <button>Pensió alímentícia</button>
        </div>
        <div>
            <h3>Ajudes</h3><br/>
            <button >Ajuda menjador</button>
            <button >Renda Garantida de ciutadania</button>
            <button >Renda Bàsica d’Emancipació</button>
            <button >Prestació residencial</button>
            <button >Prestació incompatible amb el treball</button>
            <button >Prestació per al pagament del lloguer <br/>del Consorci d’Habitatge de Catalunya</button>
        </div>
        <div>
            <h3>Rendiments</h3>
            <button>Facturació del negoci</button>
            <button>Rendiments del patrimoni familiar</button>
        </div>

    </div>
);

export default IncomeDataFields;