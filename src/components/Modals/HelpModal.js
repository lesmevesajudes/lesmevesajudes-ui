//@flow
import Typography from "@material-ui/core/es/Typography/Typography";
import React from "react";
import Modal from "@material-ui/core/Modal";
import {closeModal} from "./ModalActions";
import {connect} from "react-redux";
import {withStyles} from '@material-ui/core/styles';
import {compose} from "redux";

type Props = {
  open: Boolean,
  title: string,
  body: string,
  classes: Object,
  closeModal: Function
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    borderRadius: 6 + 'px',
    borderTopLeftRadius: 0 + 'px',
    maxWidth: 345 + 'px'
  }
});

const HelpModal = (props: Props) =>
    <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={props.open}
        onClose={() => props.closeModal("HelpModal")}
        BackdropProps={{
          style: {
            backgroundColor: 'transparent'
          }
        }}
    >
      <div className={props.classes.paper}>
        <Typography variant="title" id="modal-title">
          {props.title}
        </Typography>
        <Typography variant="subheading" id="simple-modal-description">
          {props.body}
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
