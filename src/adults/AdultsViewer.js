//@flow
import React, {Component} from 'react';
import type {Adult} from './AdultsTypes';

type Props = {
    adults: Array<Adult>,
    onRemoveClick: Function,
    onUpdateClick: Function
};

class AdultsViewer extends Component<Props, void> {
    renderAdultsList(adults: Array<Adult>) {
        return (
            <ul>
                {adults.map((adult) => (
                    <li key={adult.id}>
                        <span onClick={() => this.props.onUpdateClick(adult.id)}>
                            {adult.id} - {adult.nom} - {adult.data_naixement}
                        </span>
                        <button key={adult.id} onClick={e => this.props.onRemoveClick(adult.id)}>
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>);
    }

    render() {
        return (
            <div>
                {this.renderAdultsList(this.props.adults)}
            </div>
        );
    }
}

export default AdultsViewer;