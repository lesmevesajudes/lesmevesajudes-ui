import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    borderRadius: 6 + 'px',
    borderTopLeftRadius: 0 +'px',
    maxWidth: 345 + 'px'
  }
});
class InfoIcon extends Component {
  state = {
    open: false,
    top: 0,
    left: 0
  };
  handleOpen = (e) => {
    this.setState({ open: true, top: e.clientY-9,left: e.clientX+11});
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Icon onClick={(e) => this.handleOpen(e)} className="iconHelp" color="action">info</Icon>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          BackdropProps={{
            style: {
              backgroundColor: 'transparent'
            }
          }}
        >
          <div style={{top: this.state.top,left: this.state.left}} className={classes.paper}>
            <Typography variant="title" id="modal-title">
              {this.props.title}
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              {this.props.text}
            </Typography>
          </div>
        </Modal>
      </div>

    );
  }
}
const IconModal = withStyles(styles)(InfoIcon);

export default IconModal;
