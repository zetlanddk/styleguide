import React from 'react'
import { css } from 'glamor'
import colors from '../../theme/colors'
import { frontMUp } from '../TeaserFront/mediaQueries'
import { sansSerifRegular15, sansSerifRegular21 } from '../Typography/styles'

const styles = {
  more: css({
    ...sansSerifRegular15,
    margin: 0,
    minHeight: '15px',
    textAlign: 'center',
    ...frontMUp(sansSerifRegular21),
    '& > a': {
      color: colors.text
    },
    '& > a:hover': {
      color: colors.lightText
    }
  })
}

const More = ({ children, attributes }) => {
  return <p {...styles.more} {...attributes}>{children}</p>
}

export default More
