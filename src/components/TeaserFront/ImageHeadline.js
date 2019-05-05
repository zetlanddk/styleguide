import React from 'react'
import { css } from 'glamor'
import { frontMUp, frontLUp } from './mediaQueries'
import { serifTitle58, sansSerifMedium58 } from '../Typography/styles'

const baseSize = {
  fontSize: '38px',
  lineHeight: '43px',
  ...frontMUp({
    fontSize: '58px',
    lineHeight: '60px'
  })
}

const styles = {
  base: css({
    margin: '0 0 15px 0',
    ...frontMUp({
      marginBottom: '30px'
    })
  }),
  editorial: css({
    ...serifTitle58
  }),
  interaction: css({
    ...sansSerifMedium58
  }),
  small: css({
    ...baseSize
  }),
  large: css({
    ...baseSize,
    ...frontLUp({
      fontSize: '125px',
      lineHeight: '137px'
    })
  }),
  medium: css({
    ...baseSize,
    ...frontLUp({
      fontSize: '100px',
      lineHeight: '110px'
    })
  }),
  default: css({
    ...baseSize,
    ...frontLUp({
      fontSize: '80px',
      lineHeight: '90px'
    })
  })
}

export const Editorial = ({ children, small, large, medium }) => {
  const sizeStyle =
    (large && styles.large) ||
    (medium && styles.medium) ||
    (small && styles.small) ||
    styles.default
  return (
    <h1 {...styles.base} {...styles.editorial} {...sizeStyle}>
      {children}
    </h1>
  )
}

export const Interaction = ({ children, small, large, medium }) => {
  const sizeStyle =
    (large && styles.large) ||
    (medium && styles.medium) ||
    (small && styles.small) ||
    styles.default
  return (
    <h1 {...styles.base} {...styles.interaction} {...sizeStyle}>
      {children}
    </h1>
  )
}
