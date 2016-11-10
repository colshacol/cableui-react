import React, { Component } from 'react'
import { observer } from 'mobx-react'
import './styles/FilterMenu.css'


@observer // TODO: Create FilterMenu!
export default class FilterMenu extends Component {
  render() {
    return (
      <div class={`_filter-menu  shown-${this.props.isShown}`}>
      </div>
    )
  }
}
