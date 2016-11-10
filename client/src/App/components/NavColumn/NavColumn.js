import React, { Component } from 'react'
import { observer } from 'mobx-react'

import css from './NavColumn.css'
import UserStore from 'stores/User.store'

@observer
export default class NavColumn extends Component {
  render() {
    return (
      <div class="_nav-column">
        <div class="container">
          <div class="logo">
            <p>HORIZON</p>
            <p>Logged in as <span>{UserStore.user.name}</span></p>
          </div>
          <div class="navigation">
            <div class="nav-list">
              <p class="title">Main</p>
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Alerts</p>
                  <div class="circle">
                    <p>16</p>
                  </div>
                </li>
                <li>
                  <p>Notes</p>
                  <div class="circle">
                    <p>16</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="nav-list">
              <p class="title">Main</p>
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Alerts</p>
                  <div class="circle">
                    <p>16</p>
                  </div>
                </li>
                <li>
                  <p>Notes</p>
                  <div class="circle">
                    <p>16</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="nav-list">
              <p class="title">Main</p>
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Alerts</p>
                  <div class="circle">
                    <p>16</p>
                  </div>
                </li>
                <li>
                  <p>Notes</p>
                  <div class="circle">
                    <p>16</p>
                  </div>
                </li>
              </ul>
            </div>
            <div class="nav-list">
              <p class="title">Main</p>
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Alerts</p>
                  <div class="circle">
                    <p>16</p>
                  </div>
                </li>
                <li>
                  <p>Notes</p>
                  <div class="circle">
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
