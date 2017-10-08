//@flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {serialize} from './AdultsReducer';
import {removeAdult} from './AdultsActions';

class AdultsViewer extends Component {
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
                            Remove
                        </button>
                    </li>
                ))}
                <li key="new">
                    <Link to="/adults/new">Afegir un adult</Link>
                </li>
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