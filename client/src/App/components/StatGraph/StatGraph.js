import React, { Component } from 'react'
import { ReactDOM } from 'react-dom'
import { Link, browserHistory } from 'react-router'
import { observer} from 'mobx-react'
import { observable } from 'mobx'
import moment from 'moment'
import  { LineChart, Line , ResponsiveContainer, AreaChart, Area } from 'recharts'
import Dimensions from 'react-dimensions'
import { TimeRange, TimeSeries } from 'pondjs'
import axios from 'axios'

import './StatGraph.styl'

import LocationsStore from '$Stores/Locations.store'

@observer export default class StatGraph extends Component {
  render() {
    return (
      <ResponsiveContainer className="StatGraph" height={40}>
        <AreaChart data={Array.from(LocationsStore.data)}>
          <Area isAnimationActive={false} type="monotone" dataKey="one" stroke="#ffffff" fill="rgba(255,255,255,0.25)"/>
        </AreaChart>
      </ResponsiveContainer>
    )
  }
}
