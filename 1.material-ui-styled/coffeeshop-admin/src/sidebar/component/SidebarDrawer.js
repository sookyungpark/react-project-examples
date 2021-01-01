import PropTypes from "prop-types"
import React from "react"
import {withStyles, createStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'

const styles = (theme) => createStyles({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${theme.drawer.width}px)`,
    marginLeft: theme.drawer.width,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: theme.drawer.width,
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.drawer.width,
  }
});

const SidebarDrawer = ({classes, children, opened}) => {
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={opened}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {children}
    </Drawer>
  );
}

SidebarDrawer.propTypes = {
  classes: PropTypes.object,
  opened: PropTypes.bool
}

export default withStyles(styles)(SidebarDrawer)