//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {serialize} from './AdultsReducer';
import {removeAdult} from './AdultsActions';
import type {Adult} from './AdultsTypes';

type Props = {
    removeAdult: Function ;
    adults: Array<Adult>;
};

class AdultsViewer extends Component<Props, void> {
    handleRemoveClicked(adultId){
        this.props.removeAdult(adultId);
    }
    renderAdultsList(adults) {
        return (
            <ul>
                {adults.map((adult) => (
                    <li key={adult.id}>
                        <Link to={'/adults/'+ adult.id}>
                            {adult.id} - {adult.nom} - {adult.data_naixement}
                        </Link>
                        <button key={adult.id} onClick={e => this.handleRemoveClicked(adult.id)}>
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

function mapStateToProps(state) {
    return {
        adults: serialize(state.adults)
    };
}

export default connect(mapStateToProps, {removeAdult})(AdultsViewer);