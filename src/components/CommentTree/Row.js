import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import {css} from 'glamor'

import {Comment, CommentActions} from '../Comment'
import CommentComposer from '../CommentComposer/CommentComposer'
import {DepthBars} from './DepthBar'

const styles = {
  root: css({
    display: 'flex'
  }),
  commentComposerContainer: css({
    marginTop: '20px',
    transition: 'opacity .2s'
  }),
}

const Row = ({t, visualDepth, head, tail, otherChild, comment, displayAuthor, showComposer, composerError, onAnswer, onUpvote, onDownvote, dismissComposer, submitComment, timeago}) => {
  const {createdAt, score} = comment

  return (
    <div {...styles.root}>
      <DepthBars count={visualDepth} head={head} tail={tail} />
      <div style={{flexGrow: 1, padding: otherChild ? '20px 0 20px 15px' : '20px 0'}}>
        <Comment
          timeago={timeago(createdAt)}
          {...comment}
        />

        <CommentActions
          t={t}
          score={score}
          onAnswer={onAnswer}
          onUpvote={onUpvote}
          onDownvote={onDownvote}
        />

        {showComposer &&
          <Composer
            t={t}
            displayAuthor={displayAuthor}
            error={composerError}
            onCancel={dismissComposer}
            submitComment={submitComment}
          />
        }
      </div>
    </div>
  )
}

Row.propTypes = {
  t: PropTypes.func.isRequired,
  visualDepth: PropTypes.number.isRequired,
  head: PropTypes.bool.isRequired,
  tail: PropTypes.bool.isRequired,
  otherChild: PropTypes.bool,
  comment: PropTypes.object.isRequired,
  displayAuthor: PropTypes.object.isRequired,
  showComposer: PropTypes.bool.isRequired,
  composerError: PropTypes.string,
  onAnswer: PropTypes.func.isRequired,
  onUpvote: PropTypes.func,
  onDownvote: PropTypes.func,
  dismissComposer: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
  timeago: PropTypes.func.isRequired,
}

class Composer extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {isVisible: false}
  }
  componentDidMount () {
    this.setState({isVisible: true})
  }

  render () {
    const {t, displayAuthor, error, onCancel, submitComment} = this.props
    const {isVisible} = this.state

    return (
      <div {...styles.commentComposerContainer} style={{opacity: isVisible ? 1 : 0}}>
        <CommentComposer
          t={t}
          displayAuthor={displayAuthor}
          error={error}
          onCancel={onCancel}
          submitComment={submitComment}
        />
      </div>
    )
  }
}

Composer.propTypes = {
  t: PropTypes.func.isRequired,
  displayAuthor: PropTypes.object.isRequired,
  error: PropTypes.string,
  onCancel: PropTypes.func.isRequired,
  submitComment: PropTypes.func.isRequired,
}

export default Row