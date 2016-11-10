import React from 'react'
import './styles/OverviewTitle.css'

const OverviewTitle = (props) => {
  return (
    <div class="_overview-title">
      <p class="subtitle">OVERVIEW</p>
      <p class="city-name">{props.city}</p>
    </div>
  )
}

export default OverviewTitle
