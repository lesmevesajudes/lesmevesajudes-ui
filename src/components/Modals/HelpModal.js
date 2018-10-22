//@flow
import Typography from '@material-ui/core/Typography';
import React from 'react';
import Modal from '@material-ui/core/Modal';
import {closeModal} from './ModalActions';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import {compose} from 'redux';
import Icon from '@material-ui/core/Icon';
import {styles} from '../../styles/theme'

type Props = {
  open: Boolean,
  title: string,
  children: Object,
  classes: Object,
  currentOpenedModal: string,
  name: string,
  closeModal: Function
}

const getModalStyle = () => {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};
const closeImg = {cursor: 'pointer', float: 'right', marginTop: '5px', width: '20px'};
const HelpModal = (props: Props) =>
    <Modal
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        open={props.open && props.currentOpenedModal === props.name}
        onClose={() => props.closeModal('HelpModal')}
    >
      <div style={getModalStyle()} className={props.classes.modalContainer}>
        <div>
          <span>{props.title}</span>
          <Icon onClick={() => props.closeModal('HelpModal')} style={closeImg} color='primary'>
            close
          </Icon>
        </div>
        <Typography id='simple-modal-description'>
          {props.children}
        </Typography>
      </div>
    </Modal>;

const isModalOpen = (state): boolean =>
    typeof state.modals.currentModalName !== 'undefined';


export default compose(
    withStyles(styles),
    connect(state => ({
      open: isModalOpen(state),
      currentOpenedModal: state.modals.currentModalName,
      top: isModalOpen(state) ? state.modals.top : 0,
      left: isModalOpen(state) ? state.modals.left : 0
    }), {closeModal})
)(HelpModal);
