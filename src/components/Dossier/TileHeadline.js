import React from 'react'
import { css } from 'glamor'
import { frontLUp } from '../TeaserFront/mediaQueries'
import {
  serifTitle26,
  serifTitle32,
  cursiveTitle26,
  cursiveTitle32,
  sansSerifMedium26,
  sansSerifMedium32
} from '../Typography/styles'

const styles = {
  base: css({
    margin: 0,
    marginBottom: 16,
    ...frontLUp({
      marginBottom: 25
    })
  }),
  editorial: css({
    ...serifTitle26,
    ...frontLUp(serifTitle32)
  }),
  interaction: css({
    ...sansSerifMedium26,
    ...frontLUp(sansSerifMedium32)
  }),
  scribble: css({
    ...cursiveTitle26,
    ...frontLUp(cursiveTitle32)
  })
}

export const Editorial = ({ children }) => {
  return (
    <h1 {...styles.base} {...styles.editorial}>
      {children}
    </h1>
  )
}

export const Interaction = ({ children }) => {
  return (
    <h1 {...styles.base} {...styles.interaction}>
      {children}
    </h1>
  )
}

export const Scribble = ({ children }) => {
  return (
    <h1 {...styles.base} {...styles.scribble}>
      {children}
    </h1>
  )
}
