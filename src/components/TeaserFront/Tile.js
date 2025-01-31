import React from 'react'
import PropTypes from 'prop-types'
import { css } from 'glamor'
import { mUp } from './mediaQueries'
import Text from './Text'
import colors from '../../theme/colors'

import { FigureImage, FigureByline } from '../Figure'
import { breakoutUp } from '../Center'
import LazyLoad from '../LazyLoad'

const IMAGE_SIZE = {
  small: 220,
  medium: 300,
  large: 360
}

const sizeSmall = {
  maxHeight: `${IMAGE_SIZE.small}px`,
  maxWidth: `${IMAGE_SIZE.small}px`
}

const sizeMedium = {
  maxHeight: `${IMAGE_SIZE.medium}px`,
  maxWidth: `${IMAGE_SIZE.medium}px`
}

const sizeLarge = {
  maxHeight: `${IMAGE_SIZE.large}px`,
  maxWidth: `${IMAGE_SIZE.large}px`
}

const styles = {
  container: css({
    margin: '0 auto',
    textAlign: 'center',
    padding: '30px 15px 40px 15px',
    width: '100%',
    [mUp]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 0'
    }
  }),
  textContainer: css({
    padding: 0,
    [mUp]: {
      padding: '0 13%',
      width: '100%'
    }
  }),
  imageContainer: css({
    margin: '0 auto 30px auto',
    [mUp]: {
      fontSize: 0 // Removes the small flexbox space.
    },
    [breakoutUp]: {
      margin: '0 auto 60px auto'
    }
  }),
  onlyImageContainer: css({
    margin: '0 auto',
    fontSize: 0,
    minHeight: '100px',  // IE11
    width: '100%'  // IE11
  }),
  image: css({
    minWidth: '100px',
    ...sizeSmall,
    [mUp]: {
      ...sizeMedium
    },
    [breakoutUp]: {
      ...sizeLarge
    }
  }),
  onlyImage: css({
    minWidth: '100px',
    maxHeight: '100% !important',
    maxWidth: '100% !important'
  }),
  row: css({
    margin: 0,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    [mUp]: {
      flexDirection: 'row',
      justifyContent: 'center',
    }
  }),
  rowMobileReverse: css({
    margin: 0,
    display: 'flex',
    flexDirection: 'column-reverse',
    [mUp]: {
      flexDirection: 'row'
    }
  }),
  col2: css({
    [mUp]: {
      '& .tile': {
        width: '50%'
      },
      '& img': {
        ...sizeSmall
      }
    },
    [breakoutUp]: {
      '& img': {
        ...sizeMedium
      }
    }
  }),
  col3: css({
    '& .tile': {
      borderTop: `1px solid ${colors.divider}`
    },
    [mUp]: {
      flexWrap: 'wrap',
      '& .tile': {
        width: '50%',
        borderLeft: `1px solid ${colors.divider}`,
        borderTop: 'none',
        margin: '0 0 50px 0',
        padding: '20px 0'
      },
      '& .tile:nth-child(2n+1)': {
        borderLeft: 'none'
      },
      '& img': {
        ...sizeSmall
      }
    },
    [breakoutUp]: {
      '& .tile': {
        width: '33%',
      },
      '& .tile:nth-child(2n+1)': {
        borderLeft: `1px solid ${colors.divider}`,
      },
      '& .tile:nth-child(3n+1)': {
        borderLeft: 'none'
      },
      '& img': {
        ...sizeSmall
      }
    }
  })
}

export const TeaserFrontTileRow = ({
  children,
  attributes,
  columns,
  mobileReverse
}) => {
  return (
    <div
      role="group"
      {...attributes}
      {...(mobileReverse ? styles.rowMobileReverse : styles.row)}
      {...styles[`col${columns}`]}
    >
      {children}
    </div>
  )
}

TeaserFrontTileRow.propTypes = {
  children: PropTypes.node.isRequired,
  attributes: PropTypes.object,
  columns: PropTypes.oneOf([1, 2, 3]).isRequired
}

TeaserFrontTileRow.defaultProps = {
  columns: 1
}

const Tile = ({
  children,
  attributes,
  image,
  byline,
  alt,
  onClick,
  color,
  bgColor,
  align,
  aboveTheFold,
  onlyImage
}) => {
  const background = bgColor || ''
  const justifyContent =
    align === 'top' ? 'flex-start' : align === 'bottom' ? 'flex-end' : ''
  const imageProps = image && FigureImage.utils.getResizedSrcs(
    image,
    IMAGE_SIZE.large,
    false
  )
  let containerStyle = {
    background,
    cursor: onClick ? 'pointer' : 'default',
    justifyContent
  }
  if (onlyImage) {
    containerStyle.padding = 0
  }

  return (
    <div
      {...attributes}
      {...styles.container}
      onClick={onClick}
      style={containerStyle}
      className='tile'
    >
      {imageProps && (
        <div {...(onlyImage ? styles.onlyImageContainer : styles.imageContainer)}>
          <LazyLoad visible={aboveTheFold} style={{position: 'relative', fontSize: 0}}>
            <img src={imageProps.src} srcSet={imageProps.srcSet} alt={alt}
              {...(onlyImage ? styles.onlyImage : styles.image)} />
            {byline && <FigureByline position='rightCompact' style={{color}}>{byline}</FigureByline>}
          </LazyLoad>
        </div>
      )}
      {!onlyImage && <div {...styles.textContainer}>
        <Text color={color} maxWidth={'600px'} margin={'0 auto'}>
          {children}
        </Text>
      </div>}
    </div>
  )
}

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  attributes: PropTypes.object,
  image: PropTypes.string,
  byline: PropTypes.string,
  alt: PropTypes.string,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  align: PropTypes.oneOf([
    'top',
    'middle',
    'bottom'
  ]),
  aboveTheFold: PropTypes.bool,
  onlyImage: PropTypes.bool
}

Tile.defaultProps = {
  alt: ''
}

export default Tile
