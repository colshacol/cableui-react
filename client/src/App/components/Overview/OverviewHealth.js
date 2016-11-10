import React, { Component } from 'react'
import css from './styles/OverviewHealth.css'

const OverviewHealth = (props) => {
  return (
    <div class="_overview-health">
      <div class="container">
        <div class="circle">
          <div class="inner">
            <p>{props.health}</p>
          </div>
        </div>
        <p class="subtitle">HEALTH</p>
      </div>
    </div>
  )
}

export default OverviewHealth
