//@flow
import {withWidth} from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {showHelpFor} from '../HelpSystem/HelpSystemReducer';
import {helpText} from '../HelpText';
import HelpModal from '../Modals/HelpModal';
import {openModal} from '../Modals/ModalActions';

type Props = {
  showHelpFor: Function,
  name: string,
  openModal: Function,
  width: string
}

class HelpIcon extends Component<Props> {
  onClick = (event) => {
    const {name, width} = this.props;
    if (['xs', 'sm'].includes(width)) {
      this.props.openModal(name, event.clientY - 9, event.clientX + 11)
    } else {
      this.props.showHelpFor(name)
    }
  };

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    const {name} = this.props;
    return (<Fragment>
      <Icon onClick={this.onClick} style={{float: 'right'}} color='action'>info</Icon>
      <HelpModal name={name}>
        {helpText(name).body}
      </HelpModal>
    </Fragment>);
  }
}

export default withWidth()(connect(null, {openModal, showHelpFor})(HelpIcon));
