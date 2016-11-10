import React from 'react'
import { Link } from 'react-router'
import './styles/MiniButton.css'

import FiltersStore from 'stores/Filters.store'

const MiniButton = (props) => {
  const classes = '_mini-button'

  if (props.linksTo) {
    return (
      <Link to={props.linksTo} onClick={props.onClick}>
        <div class={classes}>
          <p>{props.text}</p>
        </div>
      </Link>
    )
  }

  return (
    <div class={classes} onClick={props.onClick}>
      <p>{props.text}</p>
    </div>
  )
}

export default MiniButton
