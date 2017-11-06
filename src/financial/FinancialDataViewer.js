//@flow
import React, {Component} from 'react';
import type {FinancialData} from "./FinancialDataTypes";

type Props = {
    financialData: Array<FinancialData>,
    onRemoveClick: Function,
    onUpdateClick: Function
};

class FinancialDataViewer extends Component<Props, *> {
    typeToDescription(type: string):string {
        const typeToDescriptionMapping = {
            "SALARI": "Salari",
            "PENSIO_RAI": "Pensió Rai",
            "PENSIO_VIUDETAT": "Pensió viudetat",
            "PENSIO_ALIMENTICIA": "Pensió alimentícia",
            "AJUDA_MENJADOR": "Ajuda Menjador",
            "AJUDA_AL_LLOGUER": "Ajuda al lloguer",
            "RGC": "Renda de ciutadania garantida",
            "FACTURACIO_NEGOCI_FAMILIAR": "facturació del negoci familiar",
            "RENDIMENTS_PATRIMONI_FAMILIAR": "rendiments del patrimoni familiar"
        };

        return typeToDescriptionMapping[type];
    }

    render() {
        return (
            <div className="FormContainer">
                <ul className="ItemList">
                    {this.props.financialData.map((financialData) => (
                        <li className="Item" key={financialData.id}>
                            <span onClick={() => this.props.onUpdateClick(financialData.id)}>
                                {financialData.receptorId.substr(0,10)} - {this.typeToDescription(financialData.type)} - {financialData.amount} €
                            </span>
                            <button key={financialData.id} onClick={e => this.props.onRemoveClick(financialData.id)}>
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FinancialDataViewer;