import React from 'react'
import Container from './Container'
import * as Headlines from './Headline'
import InternalOnlyTag from './InternalOnlyTag'
import Lead from './Lead'
import Credit from './Credit'
import { css } from 'glamor'
import colors from '../../theme/colors'
import { renderMdast } from 'mdast-react-render'
import { timeFormat } from '../../lib/timeFormat'
import { Editorial } from '../Typography'

import { matchType } from 'mdast-react-render/lib/utils'

const dateFormat = timeFormat('%d.%m.%Y')

const styles = {
  link: css({
    color: 'inherit',
    textDecoration: 'none'
  }),
  bar : css({
    marginTop: 10
  })
}

const br = {
  matchMdast: matchType('break'),
  component: () => <br />,
  isVoid: true
}
const link = {
  matchMdast: matchType('link'),
  props: node => ({
    title: node.title,
    href: node.url
  }),
  component: Editorial.A
}
const creditSchema = {
  rules: [link, br]
}

const DefaultLink = ({ children, path }) => children

export const TeaserFeed = ({
  kind: metaKind,
  color: metaColor,
  template,
  format,
  path,
  title,
  description,
  credits,
  publishDate,
  prepublication,
  bar,
  t,
  Link = DefaultLink
}) => {
  const formatMeta = (format && format.meta) || {}
  const Headline = (
    formatMeta.kind === 'meta' ||
    metaKind === 'meta' ||
    template === 'format'
  )
    ? Headlines.Interaction
    : formatMeta.kind === 'scribble' || metaKind === 'scribble'
      ? Headlines.Scribble
      : Headlines.Editorial
  const borderColor = formatMeta.title
    ? (formatMeta.color || colors[formatMeta.kind])
    : template === 'format'
      ? (metaColor || colors[metaKind])
      : undefined
  const titleColor = metaColor
    ? metaColor
    : template === 'format'
      ? borderColor
      : undefined

  return (
    <Container format={format} color={borderColor} Link={Link}>
      <Headline style={{color: titleColor}}>
        <Link href={path} passHref>
          <a {...styles.link} href={path}>{title}</a>
        </Link>
      </Headline>
      <Lead>
        <Link href={path} passHref>
          <a {...styles.link} href={path}>{description}</a>
        </Link>
      </Lead>

      <Credit>
        {credits && credits.length > 0 ? (
          renderMdast(credits, creditSchema)
        ) : (
          !!publishDate && dateFormat(new Date(publishDate))
        )}
      </Credit>
      {bar && (
        <div {...styles.bar}>
          {bar}
        </div>
      )}
      {prepublication && <InternalOnlyTag t={t} />}
    </Container>
  )
}
