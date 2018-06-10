//@flow
import React, {Fragment} from 'react';
import {openModal} from '../Modals/ModalActions';
import {connect} from 'react-redux';
import Icon from '@material-ui/core/Icon';
import HelpModal from '../Modals/HelpModal';
import {HelpText} from '../HelpText';

type Props = {
  openModal: Function,
  name: string
}
const HelpIcon = (props: Props) =>
    <Fragment>
      <Icon onClick={(e) => props.openModal(props.name, e.clientY - 9, e.clientX + 11)} style={{fontSize: '1rem'}}
            color='action'>info</Icon>
      <HelpModal name={props.name}>
        <HelpText id={props.name}/>
      </HelpModal>
    </Fragment>;

export default connect(null, {openModal})(HelpIcon);
