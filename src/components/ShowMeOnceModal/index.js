import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import {modalSeenAction} from "./ShowMeOnceReducer";
import {connect} from "react-redux";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 70,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});
type State = {
  open: boolean
}
type Props = {
  name: string
}

class ShowMeOnceModal extends React.Component<Props, State> {
  handleClose = () => {
    this.props.dispatch(modalSeenAction(this.props.name));
    this.setState({open: false});
  };

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      open: props.seenModals.indexOf(props.name) === -1,
    };
  }

  render() {
    const {classes, children, title} = this.props;

    return (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="title" id="modal-title" gutterBottom>
              {title}
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              {children}
            </Typography>
          </div>
        </Modal>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    seenModals: state.showMeOnceModals.seenModals || []
  };
}

export default connect(mapStateToProps)(withStyles(styles)(ShowMeOnceModal));
