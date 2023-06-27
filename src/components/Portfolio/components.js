import {
    Button
} from 'grommet'
import { FormDown, FormUp } from 'grommet-icons'
import React from 'react'
import './index.scss'

export const ExpandButton = ({ open, ...rest }) => {
    const Icon = open ? FormUp : FormDown
    return (
      <Button hoverIndicator="#374151" icon={<Icon color="#e4e4e7" />} {...rest} />
    )
  }