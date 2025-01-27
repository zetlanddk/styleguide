import React from 'react'
import * as styles from './styles'
import { css } from 'glamor'
import colors from '../../theme/colors'
import { mUp } from '../../theme/mediaQueries'
import { fontFamilies } from '../../theme/fonts'


const interactionHeadline = css({
  margin: '0 0 12px 0',
  ...styles.sansSerifMedium30,
  [mUp]: {
    ...styles.sansSerifMedium58
  },
  color: colors.text,
  ':first-child': {
    marginTop: 0
  },
  ':last-child': {
    marginBottom: 0
  }
})

const interactionH1 = css({
  ...styles.sansSerifMedium30,
  [mUp]: {
    ...styles.sansSerifMedium40
  },
  color: colors.text,
  margin: 0
})

const interactionH2 = css({
  ...styles.sansSerifMedium22,
  [mUp]: {
    ...styles.sansSerifMedium30
  },
  color: colors.text,
  margin: 0
})

const interactionH3 = css({
  ...styles.sansSerifMedium19,
  [mUp]: {
    ...styles.sansSerifMedium22
  },
  color: colors.text,
  margin: 0
})

const interactionP = css({
  color: colors.text,
  ...styles.sansSerifRegular16,
  [mUp]: {
    ...styles.sansSerifRegular21
  },
  margin: 0
})

const interactionPMargin = css({
  color: colors.text,
  ...styles.sansSerifRegular16,
  margin: '10px 0',
  [mUp]: {
    ...styles.sansSerifRegular21,
    margin: '20px 0'
  },
})


export const Headline = ({children, ...props}) => (
  <h1 {...props} {...interactionHeadline}>{children}</h1>
)

export const H1 = ({children, ...props}) => (
  <h1 {...props} {...interactionH1}>{children}</h1>
)

export const H2 = ({children, ...props}) => (
  <h2 {...props} {...interactionH2}>{children}</h2>
)

export const H3 = ({children, ...props}) => (
  <h3 {...props} {...interactionH3}>{children}</h3>
)

export const P = ({children, withMargin, ...props}) => (
  <p {...props} {...(withMargin ? interactionPMargin : interactionP)}>{children}</p>
)

const emphasis = css({
  fontWeight: 'normal',
  fontFamily: fontFamilies.sansSerifMedium
})
export const Emphasis = ({children, attributes, ...props}) => (
  <strong {...props} {...attributes} {...emphasis}>{children}</strong>
)

const cursive = css({
  fontWeight: 'normal',
  fontFamily: fontFamilies.sansSerifItalic,
  fontStyle: 'normal'
})
export const Cursive = ({children, attributes, ...props}) => (
  <em {...props} {...attributes} {...cursive}>{children}</em>
)
