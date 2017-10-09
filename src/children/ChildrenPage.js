//@flow
import React from 'react';
import ChildrenViewer from './ChildrenViewer';
import ChildrenAdder from './ChildrenAdder';

type State = {
    addingChild: boolean,
};

class ChildrenPage extends React.Component<void, State> {
    handleAddChildClick: Function;
    doneAddingChild: Function;

    state = {
        addingChild: false,
    };

    constructor() {
        super();
        this.handleAddChildClick = this.handleAddChildClick.bind(this);
        this.doneAddingChild = this.doneAddingChild.bind(this);
    }

    handleAddChildClick() {
        this.setState({addingChild: true});
    }

    doneAddingChild() {
        this.setState({addingChild: false});
    }
    render() {
        const addingChild = this.state.addingChild;
        let component=undefined;

        if (addingChild) {
            component=(
                <div>
                    <ChildrenAdder onFinishAdding={() => this.doneAddingChild()}/>
                </div>);
        } else {
            component=(
                <div>
                    <h1>Menors de la unitat de convivència</h1>
                    <ChildrenViewer/>
                    <button onClick={this.handleAddChildClick}>Afegir un menor</button>
                </div>);
        }
        return component;
    }
}

export default ChildrenPage;