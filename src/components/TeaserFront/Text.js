import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { frontMUp, frontLUp } from './mediaQueries'
import colors from '../../theme/colors'

const TEXT_PADDING = 50

const positionHalfWidth = {
  position: 'absolute',
  width: `calc(50% - ${TEXT_PADDING}px)`
}

const positionFullWidth = {
  position: 'absolute',
  left: `${TEXT_PADDING}px`,
  right: `${TEXT_PADDING}px`
}

const styles = {
  rootPosition: css(frontLUp({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden'
  })),
  rootMiddle: css(frontLUp({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  })),
  positioned: css({
    position: 'relative'
  }),
  topleft: css(frontLUp({
    ...positionHalfWidth,
    left: `${TEXT_PADDING}px`,
    top: `${TEXT_PADDING}px`
  })),
  topright: css(frontLUp({
    ...positionHalfWidth,
    left: '50%',
    top: `${TEXT_PADDING}px`
  })),
  bottomleft: css(frontLUp({
    ...positionHalfWidth,
    bottom: `${TEXT_PADDING}px`,
    left: `${TEXT_PADDING}px`
  })),
  bottomright: css(frontLUp({
    ...positionHalfWidth,
    bottom: `${TEXT_PADDING}px`,
    left: '50%'
  })),
  top: css(frontLUp({
    ...positionFullWidth,
    top: `${TEXT_PADDING}px`
  })),
  middle: css(frontLUp({
    ...positionFullWidth
  })),
  bottom: css(frontLUp({
    ...positionFullWidth,
    bottom: `${TEXT_PADDING}px`
  })),
  center: css({
    textAlign: 'center'
  }),
  centerMobileOnly: css({
    textAlign: 'center',
    ...frontMUp({
      textAlign: 'inherit'
    })
  })
}

const Text = ({
  children,
  attributes,
  position,
  center,
  color,
  collapsedColor,
  maxWidth,
  margin,
  feuilleton
}) => {
  const textAlignStyle = feuilleton && !center
    ? styles.centerMobileOnly
    : center ? styles.center : undefined
  const rootStyles = position ? styles.rootPosition : {}
  const middleStyles = position === 'middle' ? styles.rootMiddle : {}

  const colorStyle = collapsedColor && css({
    color: collapsedColor,
    ...frontLUp({ color })
  })

  return (
    <div {...rootStyles} {...middleStyles}>
      <div
        {...attributes}
        {...colorStyle}
        {...textAlignStyle}
        {...css(styles.positioned, position ? styles[position] : {})}
        style={{ color: !collapsedColor ? color : undefined, maxWidth, margin }}
      >
        {children}
      </div>
    </div>
  )
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  attributes: PropTypes.object,
  position: PropTypes.oneOf([
    'topleft',
    'topright',
    'bottomleft',
    'bottomright',
    'top',
    'middle',
    'bottom'
  ]),
  center: PropTypes.bool,
  color: PropTypes.string,
  collapsedColor: PropTypes.string,
  maxWidth: PropTypes.string,
  margin: PropTypes.string,
  feuilleton: PropTypes.bool
}

Text.defaultProps = {
  color: colors.text,
  maxWidth: '',
  margin: ''
}

export default Text
