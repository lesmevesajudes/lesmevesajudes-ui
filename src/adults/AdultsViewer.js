//@flow
import React, {Component} from 'react';
import type {Adult} from './AdultsTypes';

type Props = {
    adults: Array<Adult>,
    onRemoveClick: Function,
    onUpdateClick: Function,
    onAddAdultClick: Function
};

class AdultsViewer extends Component<Props, void> {
    renderAdultsList(adults: Array<Adult>) {
        return (
            <ul className="ItemList">
                {adults.map((adult) => (
                    <li className="Item" key={adult.id}>
                        <span style={{float: 'left'}} onClick={() => this.props.onUpdateClick(adult.id)}>
                            {adult.nom} - {adult.data_naixement}
                        </span>
                        <button style={{float: 'right'}} key={adult.id} onClick={e => this.props.onRemoveClick(adult.id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>);
    }

    render() {
        return (
            <div>
                <h1>Adults de la unitat de convivència</h1>
                <div className="FormContainer">
                    {this.renderAdultsList(this.props.adults)}
                </div>
                <button id='AddAdultButton' onClick={this.props.onAddAdultClick}>Afegir un adult</button>
            </div>
        );
    }
}

export default AdultsViewer;