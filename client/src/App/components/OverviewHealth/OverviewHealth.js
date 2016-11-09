import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import axios from 'axios'

import './OverviewHealth.styl'

@observer export default class OverviewHealth extends Component {
  render() {
    return (
      <div className="OverviewHealth">
        <div className="container">
          <div className="circle">
            <div className="inner">
              <p>{this.props.health}</p>
            </div>
          </div>
          <p className="subtitle">
            HEALTH
          </p>
        </div>
      </div>
    )
  }
}
