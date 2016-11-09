import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { observer } from 'mobx-react'
import axios from 'axios'

import './NavColumn.styl'
import UserStore from '$Stores/User.store'

@observer export default class NavColumn extends Component {
  render() {
    return (
      <div className="NavColumn">
        <div className="container">
          <div className="logo">
            <p>HORIZON</p>
            <p>Logged in as <span>{UserStore.user.name}</span></p>
          </div>
          <div className="navigation">
            <div className="main nav-list">
              <p className="title">Main</p>
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Alerts</p>
                  <div className="circle">
                    <p>16</p>
                  </div>
                </li>
                <li>
                  <p>Notes</p>
                  <div className="circle">
                    <p>16</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tk nav-list">
              <p className="title">Main</p>
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Alerts</p>
                  <div className="circle">
                    <p>16</p>
                  </div>
                </li>
                <li>
                  <p>Notes</p>
                  <div className="circle">
                    <p>16</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tk nav-list">
              <p className="title">Main</p>
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Alerts</p>
                  <div className="circle">
                    <p>16</p>
                  </div>
                </li>
                <li>
                  <p>Notes</p>
                  <div className="circle">
                    <p>16</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="tk nav-list">
              <p className="title">Main</p>
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Alerts</p>
                  <div className="circle">
                    <p>16</p>
                  </div>
                </li>
                <li>
                  <p>Notes</p>
                  <div className="circle">
                    <p>16</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
