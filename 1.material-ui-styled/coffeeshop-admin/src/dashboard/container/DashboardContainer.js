import React from 'react'
import {bindActionCreators, compose} from "redux"
import {withRouter} from "react-router"
import connect from "react-redux/es/connect/connect"
import * as sidebarActions from "../../sidebar/actions"
import {createStyles, withStyles} from '@material-ui/core/styles'

const styles = (theme) => createStyles({
  container: {

  },
  contents: {
    height: "100vh",
    backgroundImage: `url("https://source.unsplash.com/random?time=${Date.now()}")`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
})

const connector = connect(
  state => {
    return {
      sidebar: state.sidebar
    }
  },
  dispatch => ({
    actions: {
      sidebar: bindActionCreators({...sidebarActions}, dispatch)
    }
  })
)

const enhance = compose(
  connector,
  withRouter,
  withStyles(styles))

const DashboardContainer = enhance(props => {
  return (
    <React.Fragment>
      <div className={props.classes.contents} />
    </React.Fragment>
  )
})

export default DashboardContainer
