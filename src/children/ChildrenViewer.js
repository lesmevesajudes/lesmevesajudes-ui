//@flow
import React from 'react';
import type {Child} from './ChildrenTypes';

type Props = {
    children: Array<Child>;
    onRemoveClick: Function,
    onUpdateClick: Function
};

class ChildrenViewer extends React.Component<Props> {
    renderChildrenList(children: Array<Child>) {
        return (
            <ul>
                {children.map((child) => (
                    <li key={child.id}>
                       <span onClick={() => this.props.onUpdateClick(child.id)}>
                            {child.id} - {child.nom} - {child.data_naixement}
                        </span>
                        <button key={child.id} onClick={e => this.props.onRemoveClick(child.id)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>);
    }

    render() {
        return (
            <div>
                {this.renderChildrenList(this.props.children)}
            </div>
        );
    }
}

export default ChildrenViewer;