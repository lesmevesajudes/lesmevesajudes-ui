import React, {useEffect, useRef, useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withTranslation} from "react-i18next";
import {AppBar, Grid, IconButton, Toolbar, Typography} from '@material-ui/core';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import AidsDashboard from './aids/AidsDashboardComponent';
import SimulationsDashboard from './simulations/SimulationsDashboardComponent';
import AnalysisDashboard from './analysis/AnalysisDashboardComponent';
import Login from './Login';
import {validateAccessCode} from './DashboardAction';

type Props = {
  allResults: any,
  dispatch: Function,
  retrieveDashboard: any,
  loggedIn: boolean,
};

export const DashboardPage = (props :Props) => {

  const [open, setOpen] = useState(false);
  const [componentPanel, setComponent] = useState(<AidsDashboard />);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const showAidsDashboard = (event) => {
    setComponent(<AidsDashboard/>);
    handleClose(event);
  }

  const showSimulationsDashboard = (event) => {
    setComponent(<SimulationsDashboard />);
    handleClose(event);
  }

  const showAnalysisDashboard = (event) => {
    setComponent(<AnalysisDashboard />);
    handleClose(event);
  }

  const prevOpen = React.useRef(open);
  useEffect(() => {
    //setFilterModalVisible(props.filtersVisible);
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Grid>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
            <IconButton ref={anchorRef} onClick={handleToggle} edge="start" color="secondary" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <MenuItem onClick={showAidsDashboard}>Ajudes</MenuItem>
                  <MenuItem onClick={showSimulationsDashboard}>Simulacions</MenuItem>
                  <MenuItem onClick={showAnalysisDashboard}>Anàlisis de dades</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
          )}
        </Popper>
          <Typography variant="h6" color="inherit">Quadre de comandament</Typography>
        </Toolbar>
      </AppBar>
    <Grid container>
      {props.loggedIn ? componentPanel :
        <Login onSubmit={({ accessCode }) => {
          props.dispatch(validateAccessCode(accessCode));
        }} />
      }
    </Grid>
  </Grid>);
}

function mapStateToProps(state) {
  return {
    loggedIn: state.dashboard.loggedIn,
    allResults: state.dashboard.results
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    validateAccessCode : bindActionCreators(validateAccessCode, dispatch),
    dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(DashboardPage));
