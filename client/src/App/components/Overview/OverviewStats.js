import React, { Component } from 'react'
import { observer } from 'mobx-react'
import './styles/OverviewStats.css'

import DashStore from '../../views/Dash/Dash.store'

import OverviewGraph from './OverviewGraph'

const OverviewStats = observer((props) => {
  if (!props.shouldRender) () => <div class="inactive-overview-stats"></div>

  const
    classes = `_overview-stats shown-${props.shouldRender}`,
    data = props.data
    // chartData = data.getChartData

  return (
    <div class={classes}>
      <p>MORE STATS:</p>
      <OverviewGraph chartData={data} dataKey="b"/>
      <OverviewGraph chartData={data} dataKey="a"/>
      <OverviewGraph chartData={data} dataKey="c"/>
      <OverviewGraph chartData={data} dataKey="d"/>
    </div>
  )
})

export default OverviewStats
