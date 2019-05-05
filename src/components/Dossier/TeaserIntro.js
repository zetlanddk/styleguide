import React from 'react'
import PropTypes from 'prop-types'
import { css, merge } from 'glamor'
import { frontMUp, frontLUp } from '../TeaserFront/mediaQueries'
import { FigureImage, FigureByline } from '../Figure'

const styles = {
  container: css({
    margin: 0,
    ...frontMUp({
      marginBottom: '40px'
    })
  }),
  containerWithImage: css({
    ...frontMUp({
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    })
  }),
  content: css({
    padding: '0 0 15px 0',
    ...frontMUp({
      padding: '0 0 15px 5%',
      width: '67%'
    }),
    ...frontLUp({
      width: '51%'
    })
  }),
  contentWithImage: css({
    paddingTop: '15px',
    ...frontMUp({
      padding: '0 5% 0 5%',
      width: '60%'
    }),
    ...frontLUp({
      width: '60%'
    })
  }),
  imageContainer: css({
    position: 'relative',
    ...frontMUp({
      flexShrink: 0,
      fontSize: 0, // Removes the small flexbox space.
      height: 'auto',
      width: '40%'
    })
  }),
  image: css({
    height: 'auto',
    maxWidth: '100%'
  })
}

const TeaserIntro = ({ children, attributes, image, alt, onClick, byline, t }) => {
  return (
    <div
      {...attributes}
      {...merge(styles.container, image ? styles.containerWithImage : {})}
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'default'
      }}
    >
      {image && (
        <div {...styles.imageContainer}>
          <FigureImage
            {...FigureImage.utils.getResizedSrcs(image, 750)}
            alt={alt}
          />
          {byline && <FigureByline position='rightCompact'>{byline}</FigureByline>}
        </div>
      )}
      <div {...merge(styles.content, image ? styles.contentWithImage : {})}>
        {children}
      </div>
    </div>
  )
}
TeaserIntro.propTypes = {
  children: PropTypes.node.isRequired,
  attributes: PropTypes.object,
  image: PropTypes.string,
  byline: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func
}

TeaserIntro.defaultProps = {
  alt: ''
}

export default TeaserIntro
