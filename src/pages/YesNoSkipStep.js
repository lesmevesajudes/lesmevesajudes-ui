import React from 'react';


//this.props.jumpToStep(2)



class YesNoSkipStep extends React.Component {
    constructor(props) {
        super(props);
        this.handleYesClick = this.handleYesClick.bind(this);
        this.handleNoClick = this.handleNoClick.bind(this);
        this.state = {answeredYes: false};
    }

    handleYesClick() {
        this.setState({answeredYes: true});
    }

    handleNoClick() {
        this.setState({answeredYes: false});
        this.props.jumpToStep(this.props.nextStep);
    }

    render() {
        const answeredYes = this.state.answeredYes;

        let element = null;
        if (answeredYes) {
            element = this.props.children;
        } else {
            const divStyle={'marginTop': '32px', 'marginBottom': '32px'};
            element = <div style={divStyle}>
                <p> {this.props.question} </p>
                <button onClick={this.handleYesClick}>Si</button>
                <button onClick={this.handleNoClick}>No</button>
            </div>;
        }

        return element;
    }
}

export default YesNoSkipStep;