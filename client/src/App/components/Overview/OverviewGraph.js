import  { LineChart, Line , ResponsiveContainer, AreaChart, Area } from 'recharts'
import React, { Component } from 'react'
import { observer } from 'mobx-react'

import './styles/OverviewGraph.css'

@observer
export default class OverviewGraph extends Component {
  render() {
    const
      chartData = Array.from(this.props.chartData),
      current = chartData.length
        ? chartData[chartData.length -1].a
        : 'calculating...',

      average = chartData.length
        ? (() => {
          return chartData.reduce((total, b) =>
            total + b.a, 0) / chartData.length
          })().toFixed(2)
        : 'calculating...'

    return (
      <div class="_overview-graph">
        <ResponsiveContainer minWidth={150} height={40}>
          <LineChart data={chartData}>
            <Line dot={false} isAnimationActive={false} type="monotone" dataKey={this.props.dataKey} stroke="#ffffff" fill="rgba(255,255,255,0.25)"/>
          </LineChart>
        </ResponsiveContainer>
        <p class="stat-average">Average: {average}</p>
        <p class="stat-average">Current: {current}</p>
      </div>
    )
  }
}
