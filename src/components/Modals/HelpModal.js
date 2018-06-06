//@flow
import Typography from "@material-ui/core/es/Typography/Typography";
import React from "react";
import Modal from "@material-ui/core/Modal";
import {closeModal} from "./ModalActions";
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import {compose} from "redux";
import Icon from '@material-ui/core/Icon';

type Props = {
  open: Boolean,
  title: string,
  children: Object,
  classes: Object,
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
const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 2,
    borderRadius: 6 + 'px',
    maxWidth: 345 + 'px'
  },
  title: {
    fontWeight: 'bold',
    fontSize: '1.1em'
  }
});
const closeImg = {cursor: 'pointer', float: 'right', marginTop: '5px', width: '20px'};
const HelpModal = (props: Props) =>
    <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={() => props.closeModal("HelpModal")}
    >
      <div style={getModalStyle()} className={props.classes.paper}>
        <div>
          <span className={props.classes.title}>{props.title}</span>
          <Icon onClick={() => props.closeModal("HelpModal")} style={closeImg} color="primary">
            close
          </Icon>
        </div>
        <Typography variant="subheading" id="simple-modal-description">
          {props.children}
        </Typography>
      </div>
    </Modal>;

const isModalOpen = (state, modalName: string): boolean =>
    typeof state.modals.currentModalName !== "undefined" && state.modals.currentModalName === modalName;


export default compose(
    withStyles(styles),
    connect(state => ({
      open: isModalOpen(state, "HelpModal"),
      top: isModalOpen(state, "HelpModal") ? state.modals.top : 0,
      left: isModalOpen(state, "HelpModal") ? state.modals.left : 0
    }), {closeModal})
)(HelpModal);
