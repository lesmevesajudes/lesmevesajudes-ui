//@flow
import React, {Fragment} from 'react';
import {openModal} from '../Modals/ModalActions';
import {connect} from 'react-redux';
import Icon from '@material-ui/core/Icon';
import HelpModal from '../Modals/HelpModal';
import {helpText} from '../HelpText';

type Props = {
  openModal: Function,
  name: string
}
const HelpIcon = (props: Props) =>
    <Fragment>
      <Icon onClick={(e) => props.openModal(props.name, e.clientY - 9, e.clientX + 11)} style={{float: 'right'}}
            color='action'>info</Icon>
      <HelpModal name={props.name}>
        {helpText(props.name).body}
      </HelpModal>
    </Fragment>;

export default connect(null, {openModal})(HelpIcon);
