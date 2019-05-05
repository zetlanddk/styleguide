import React from 'react'
import { css } from 'glamor'
import { frontMUp, frontLUp, frontXLUp } from './mediaQueries'
import { serifTitle20, sansSerifMedium20 } from '../Typography/styles'

const size = {
  s: {
    fontSize: '38px',
    lineHeight: '43px'
  },
  m: {
    fontSize: '60px',
    lineHeight: '70px'
  },
  l: {
    fontSize: '80px',
    lineHeight: '90px'
  },
  xl: {
    fontSize: '100px',
    lineHeight: '110px'
  },
  xxl: {
    fontSize: '125px',
    lineHeight: '135px'
  }
}

const sizes = {
  large: css({
    ...size.s,
    ...frontMUp(size.l),
    ...frontLUp(size.xl),
    ...frontXLUp(size.xxl)
  }),
  medium: css({
    ...size.s,
    ...frontMUp(size.m),
    ...frontLUp(size.l),
    ...frontXLUp(size.xl)
  }),
  default: css({
    ...size.s,
    ...frontLUp(size.m),
    ...frontXLUp(size.l)
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
    ...serifTitle20,
  }),
  interaction: css({
    ...sansSerifMedium20
  })
}

export const Editorial = ({ children, large, medium }) => {
  const sizedStyle = css(
    styles.editorial,
    (large && sizes.large) || (medium && sizes.medium) || sizes.default
  )
  return (
    <h1 {...styles.base} {...sizedStyle}>
      {children}
    </h1>
  )
}

export const Interaction = ({ children, large, medium }) => {
  const sizedStyle = css(
    styles.interaction,
    (large && sizes.large) || (medium && sizes.medium) || sizes.default
  )
  return (
    <h1 {...styles.base} {...sizedStyle}>
      {children}
    </h1>
  )
}
