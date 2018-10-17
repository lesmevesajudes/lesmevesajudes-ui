import Icon from '@material-ui/core/Icon';
import Modal from '@material-ui/core/Modal';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import {connect} from 'react-redux';
import {styles} from '../../styles/theme'
import {modalSeenAction} from './ShowMeOnceReducer';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

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
    this.state = {
      open: props.seenModals.indexOf(props.name) === -1,
    };
  }

  render() {
    const {classes, children, title} = this.props;
    const closeImg = {cursor: 'pointer', float: 'right', marginTop: '5px', width: '20px'};
    return (
        <Modal
            aria-labelledby='simple-modal-title'
            aria-describedby='simple-modal-description'
            open={this.state.open}
            onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.modalContainer}>
              <Icon onClick={this.handleClose} style={closeImg} color='primary'>
                close
              </Icon>
            <Typography variant='h2' gutterBottom>
              {title}
            </Typography>
            <Typography id='simple-modal-description' align='justify'>
              {children}
            </Typography>
          </div>
        </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {
    seenModals: state.showMeOnceModals.seenModals || []
  };
}

export default connect(mapStateToProps)(withStyles(styles)(ShowMeOnceModal));
