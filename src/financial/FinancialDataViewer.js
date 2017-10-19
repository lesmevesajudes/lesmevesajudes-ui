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

    renderFinancialDataList(financialData: Array<FinancialData>) {
        return (
            <ul>
                {financialData.map((financialData) => (
                    <li key={financialData.id}>
                        <span onClick={() => this.props.onUpdateClick(financialData.id)}>
                            {financialData.id} - {financialData.receptorId} - {this.typeToDescription(financialData.type)} - {financialData.amount}
                        </span>
                        <button key={financialData.id} onClick={e => this.props.onRemoveClick(financialData.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>);
    }

    render() {
        return (
            <div>
                {this.renderFinancialDataList(this.props.financialData)}
            </div>
        );
    }
}

export default FinancialDataViewer;