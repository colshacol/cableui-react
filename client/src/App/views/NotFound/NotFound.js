import React, { Component } from 'react'
import { observer } from 'mobx-react'

import './NotFound.css'
import store from './NotFound.store.js'

@observer
export default class NotFound extends Component {
  render() {
    return (
      <div class="NotFound">
        <div class="container">
        </div>
      </div>
    )
  }
}
