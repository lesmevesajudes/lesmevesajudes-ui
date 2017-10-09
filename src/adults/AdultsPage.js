//@flow
import React from 'react';
import AdultsViewer from './AdultsViewer';
import AdultsAdder from './AdultsAdder';

type State = {
    addingAdult: boolean,
};

class AdultsPage extends React.Component<void, State>{
    handleAddAdultClick: Function;
    doneAddingAdult: Function;

    state = {
        addingAdult: false,
    };

    constructor() {
        super();
        this.handleAddAdultClick = this.handleAddAdultClick.bind(this);
        this.doneAddingAdult = this.doneAddingAdult.bind(this);
    }
    handleAddAdultClick() {
        this.setState({addingAdult: true});
    }
    doneAddingAdult() {
        this.setState({addingAdult: false});
    }
    render() {
        const addingAdult = this.state.addingAdult;
        let component = undefined;

        if (addingAdult) {
            component=(
                <div>
                    <AdultsAdder onFinishAdding={() => this.doneAddingAdult()}/>
                </div>
            );
        } else {
            component=(
                <div>
                    <h1>Adults de la unitat de convivència</h1>
                    <AdultsViewer/>
                    <button onClick={this.handleAddAdultClick}>Afegir un adult</button>
                </div>
            );
        }
        return component;

    }
}
export default AdultsPage;