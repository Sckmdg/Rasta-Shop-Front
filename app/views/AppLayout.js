import React from 'react'
import PropTypes from 'prop-types'
import connectWrapper from '../redux/utils/connect'
import { rootActions as actions } from '../redux/rootReducer'
import '../styles/main.scss'

export class AppLayout extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };

  static propTypes = {
    // state: PropTypes.object.isRequired,
    // actions: PropTypes.object.isRequired,
    // location: PropTypes.object.isRequired,
    children: PropTypes.object
  };

  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default connectWrapper(actions, AppLayout)
