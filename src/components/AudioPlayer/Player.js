import React, { Component } from 'react'
import PropTypes from 'prop-types'
import colors from '../../theme/colors'
import { mUp } from '../../theme/mediaQueries'
import { css, merge } from 'glamor'
import { ellipsize } from '../../lib/styleMixins'
import { timeFormat } from '../../lib/timeFormat'
import warn from '../../lib/warn'
import { breakoutStyles } from '../Center'
import { InlineSpinner } from '../Spinner'
import { link, sansSerifRegular12, sansSerifRegular15 } from '../Typography/styles'
import Play from 'react-icons/lib/md/play-arrow'
import Pause from 'react-icons/lib/md/pause'
import Rewind from 'react-icons/lib/md/skip-previous'

import Close from 'react-icons/lib/md/close'
import Download from 'react-icons/lib/md/file-download'

import globalState from './globalState'

const ZINDEX_AUDIOPLAYER_ICONS = 6
const ZINDEX_AUDIOPLAYER_SCRUB = 3
const ZINDEX_AUDIOPLAYER_PROGRESS = 2
const ZINDEX_AUDIOPLAYER_BUFFER = 1
const ZINDEX_AUDIOPLAYER_TOTAL = 0
const PROGRESS_HEIGHT = 4

const hoursDurationFormat = timeFormat('%-H:%M:%S')
const minutesDurationFormat = timeFormat('%-M:%S')

const CONTROLS_HEIGHT = 25
const ICON_SPACING = 8

const SIZE = {
  play: 30,
  rewind: 26,
  close: 30,
  download: 22
}

const barStyle = {
  position: 'absolute',
  height: PROGRESS_HEIGHT,
  left: 0,
  right: 0
}

const buttonStyle = {
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  padding: 0
}

const styles = {
  wrapper: css({
    position: 'relative',
    lineHeight: 0,
    ':focus': {
      outline: 'none'
    }
  }),
  audio: css({
    height: 0,
    width: '100%',
    '::-webkit-media-controls-panel': {
      display: 'none !important'
    },
    '::--webkit-media-controls-play-button': {
      display: 'none !important'
    },
    '::-webkit-media-controls-start-playback-button': {
      display: 'none !important'
    }
  }),
  controls: css({
    position: 'absolute',
    cursor: 'pointer',
    height: `${CONTROLS_HEIGHT}px`
  }),
  buttons: css({
    position: 'absolute',
    top: '50%',
    left: 0,
    marginTop: -15,
    textAlign: 'center'
  }),
  button: css({
    ...buttonStyle,
  }),
  download: css({
    position: 'absolute',
    top: '50%',
    left: SIZE.rewind + SIZE.play + ICON_SPACING,
    marginTop: -10,
    textAlign: 'center'
  }),
  close: css({
    ...buttonStyle,
    position: 'absolute',
    right: 0,
    top: '50%',
    marginTop: -14,
    textAlign: 'center'
  }),
  scrubberTop: css({
    ...barStyle,
    top: -PROGRESS_HEIGHT
  }),
  scrubberBottom: css({
    ...barStyle,
    bottom: -PROGRESS_HEIGHT
  }),
  progress: css({
    position: 'absolute',
    zIndex: ZINDEX_AUDIOPLAYER_PROGRESS,
    backgroundColor: colors.primary,
    left: 0,
    height: PROGRESS_HEIGHT
  }),
  uiText: css({
    position: 'absolute',
    zIndex: ZINDEX_AUDIOPLAYER_ICONS,
    top: 1,
    cursor: 'pointer',
    fontSize: '16px',
    lineHeight: '25px',
    height: '30px',
    color: colors.text,
    [mUp]: {
      fontSize: '19px',
    }
  }),
  time: css({
    ...ellipsize,
    fontSize: '19px'
  }),
  scrub: css({
    ...barStyle,
    zIndex: ZINDEX_AUDIOPLAYER_SCRUB,
    height: 20,
    marginTop: -((20 + PROGRESS_HEIGHT) / 2),
    paddingTop: 20 / 2 - PROGRESS_HEIGHT / 2,
    cursor: 'ew-resize'
  }),
  buffer: css({
    ...barStyle,
    zIndex: ZINDEX_AUDIOPLAYER_BUFFER
  }),
  totalDuration: css({
    ...barStyle,
    backgroundColor: '#e8e8ed',
    zIndex: ZINDEX_AUDIOPLAYER_TOTAL
  }),
  timeRange: css({
    backgroundColor: '#bebdcb',
    position: 'absolute',
    height: PROGRESS_HEIGHT
  }),
  sourceError: css({
    color: colors.disabled,
    height: '25px',
    ...ellipsize,
    ...sansSerifRegular12,
    lineHeight: '25px',
    [mUp]: {
      ...sansSerifRegular15,
      lineHeight: '25px',
    }
  }),
  retry: css({
    ...link,
    cursor: 'pointer'
  })
}

export const getFormattedTime = secs => {
  let totalSeconds = secs
  let hours = Math.floor(totalSeconds / 3600)
  totalSeconds %= 3600
  let minutes = Math.floor(totalSeconds / 60)
  let seconds = totalSeconds % 60
  let dateTime = new Date(null)
  !!hours && dateTime.setHours(hours)
  !!minutes && dateTime.setMinutes(minutes)
  !!seconds && dateTime.setSeconds(seconds)
  return !!hours
    ? hoursDurationFormat(dateTime)
    : minutesDurationFormat(dateTime)
}

class AudioPlayer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      playEnabled: false,
      playing: false,
      progress: 0,
      loading: false,
      buffered: null,
      sourceError: false
    }

    this.updateProgress = () => {
      const { audio } = this
      if (!audio) {
        return
      }
      const progress = audio.currentTime / audio.duration
      this.props.onProgress && this.props.onProgress(progress, audio)
      this.context.saveMediaProgress && this.context.saveMediaProgress(
        this.props, audio
      )
      this.setState({
        progress,
        buffered: audio.buffered
      })
      this.formattedCurrentTime = getFormattedTime(audio.currentTime)
    }
    this.syncProgress = () => {
      this.readTimeout = setTimeout(() => {
        this.updateProgress()
        this.syncProgress()
      }, 16)
    }
    this.containerRef = ref => {
      this.container = ref
    }
    this.ref = ref => {
      this.audio = ref
    }
    this.onPlay = () => {
      if (globalState.playingRef && globalState.playingRef !== this.audio) {
        globalState.playingRef.pause()
      }
      globalState.playingRef = this.audio
      this.setState(() => ({
        playing: true,
        loading: false
      }))
      this.syncProgress()
      this.props.onPlay && this.props.onPlay()
    }
    this.onPause = () => {
      this.setState(() => ({
        playing: false
      }))
      clearTimeout(this.readTimeout)
      this.props.onPause && this.props.onPause()
    }
    this.onLoadStart = () => {
      this.setState(() => ({
        loading: true
      }))
    }
    this.setTime = (time = 0) => {
      if (this.audio && this.audio.currentTime !== time) {
        this.audio.currentTime = time
        this.updateProgress()
      }
    }

    this.isSeekable = new Promise(resolve => {
      this.onSeekable = resolve
    })
    this.onCanPlay = () => {
      this.setState(() => ({
        playEnabled: true,
        loading: false,
        sourceError: false
      }))
      this.onSeekable()
    }
    this.onSourceError = () => {
      this.setState(() => ({
        sourceError: true,
        loading: false
      }))
    }
    this.scrubRef = ref => {
      this.scrubber = ref
    }
    this.scrub = event => {
      const { scrubber, audio } = this
      if (this.scrubbing && scrubber && audio && audio.duration) {
        event.preventDefault()
        const rect = scrubber.getBoundingClientRect()

        let currentEvent = event
        if (currentEvent.nativeEvent) {
          currentEvent = event.nativeEvent
        }
        while (currentEvent.sourceEvent) {
          currentEvent = currentEvent.sourceEvent
        }
        if (currentEvent.changedTouches) {
          currentEvent = currentEvent.changedTouches[0]
        }

        const progress = Math.min(
          1,
          Math.max((currentEvent.clientX - rect.left) / rect.width, 0)
        )
        audio.currentTime = audio.duration * progress
        this.updateProgress()
      }
    }
    this.scrubStart = event => {
      this.scrubbing = true
      if (event.type === 'mousedown') {
        const up = e => {
          this.scrubEnd(e)
          document.removeEventListener('mousemove', this.scrub)
          document.removeEventListener('mouseup', up)
        }
        document.addEventListener('mousemove', this.scrub)
        document.addEventListener('mouseup', up)
      }
      this.scrub(event)
    }
    this.scrubEnd = event => {
      this.scrub(event)
      this.scrubbing = false
    }
    this.setInstanceState = state => {
      this.setState(state)
    }
    this.toggle = () => {
      const { audio } = this
      if (audio) {
        if (audio.paused || audio.ended) {
          this.play()
        } else {
          this.pause()
        }
      }
    }
  }
  play() {
    const { audio } = this
    const playPromise = audio && audio.play()
    if (playPromise) {
      playPromise.catch(e => {
        warn('[AudioPlayer]', e.message)
      })
    }
  }
  pause() {
    const { audio } = this
    audio && audio.pause()
  }
  reload() {
    const { audio } = this
    if (audio) {
      this.setState(() => ({
        loading: true
      }))
      audio.load()
    }
  }
  getStartTime() {
    if (this.context.getMediaProgress) {
      return this.context.getMediaProgress(this.props).catch(() => {
        return undefined // ignore errors
      })
    }
    return Promise.resolve()
  }
  setFormattedTimes() {
    if (!this.audio || !this.audio.duration) {
      return
    }
    this.formattedDuration = getFormattedTime(this.audio.duration)
  }
  componentDidMount() {
    globalState.instances.push(this.setInstanceState)
    if (!this.audio) {
      return
    }

    this.audio.addEventListener('play', this.onPlay)
    this.audio.addEventListener('pause', this.onPause)
    this.audio.addEventListener('loadstart', this.onLoadStart)
    this.audio.addEventListener('canplay', this.onCanPlay)
    this.audio.addEventListener('canplaythrough', this.onCanPlay)
    // iOS won't fire canPlay, so rely on meta data.
    this.audio.addEventListener('loadedmetadata', this.onCanPlay)

    Promise.all([
      this.getStartTime(),
      this.isSeekable
    ]).then(([startTime]) => {
      if (startTime !== undefined) {
        this.setTime(startTime)
      }
      if (this.props.autoPlay) {
        this.container && this.container.focus()

        this.play()
      }
    })

    if (this.audio.readyState >= 1) {
      this.onSeekable()
    }
  }
  componentDidUpdate() {
    this.setFormattedTimes()
  }
  componentWillUnmount() {
    globalState.instances = globalState.instances.filter(
      setter => setter !== this.setInstanceState
    )
    if (globalState.playingRef === this.audio) {
      globalState.playingRef = undefined
    }

    this.audio.removeEventListener('play', this.onPlay)
    this.audio.removeEventListener('pause', this.onPause)
    this.audio.removeEventListener('loadstart', this.onLoadStart)
    this.audio.removeEventListener('progress', this.onProgress)
    this.audio.removeEventListener('canplay', this.onCanPlay)
    this.audio.removeEventListener('canplaythrough', this.onCanPlay)
    this.audio.removeEventListener('loadedmetadata', this.onCanPlay)
  }
  render() {
    const {
      src,
      size,
      attributes = {},
      style,
      t,
      height,
      closeHandler,
      download,
      scrubberPosition,
      timePosition,
      controlsPadding,
      autoPlay
    } = this.props
    const { playEnabled, playing, progress, loading, buffered, sourceError } = this.state
    const isVideo = src.mp4 || src.hls
    const leftIconsWidth =
      SIZE.rewind + SIZE.play +
      (download ? SIZE.download + ICON_SPACING : 0)
    const rightIconsWidth = closeHandler ? SIZE.close : 0
    const uiTextStyle = {
      maxWidth: `calc(100% - ${leftIconsWidth + rightIconsWidth + 20}px)`,
      left: timePosition === 'left' ? leftIconsWidth + 10 : 'auto',
      right: timePosition === 'right' ? rightIconsWidth + 10 : 'auto'
    }

    let timeRanges = []
    if (buffered && buffered.length) {
      for (let i = 0; i < buffered.length; i++) {
        timeRanges.push({start: buffered.start(i), end: buffered.end(i)})
      }
    }

    return (
      <div {...merge(styles.wrapper, breakoutStyles[size])}
        ref={this.containerRef}
        style={{...style, height: `${height}px`}}
        tabIndex='0'
        role='region'
        aria-label={t('styleguide/AudioPlayer/aria')}>
        {!isVideo && <audio
          preload={autoPlay ? 'auto' : undefined}
          {...styles.audio}
          {...attributes}
          ref={this.ref}
          onLoadedMetadata={this.onCanPlay}
          crossOrigin="anonymous"
        >
          {src.mp3 && <source src={src.mp3} type="audio/mpeg" onError={this.onSourceError} />}
          {src.aac && <source src={src.aac} type="audio/mp4" onError={this.onSourceError} />}
          {src.ogg && <source src={src.ogg} type="audio/ogg" onError={this.onSourceError} />}
        </audio>}
        {isVideo && <video
          preload={autoPlay ? 'auto' : undefined}
          {...styles.audio}
          {...attributes}
          ref={this.ref}
          onLoadedMetadata={this.onCanPlay}
          crossOrigin="anonymous"
          playsInline
          webkit-playsinline=""
        >
          {src.hls && <source src={src.hls} type="application/x-mpegURL" onError={this.onSourceError} />}
          {src.mp4 && <source src={src.mp4} type="video/mp4" onError={this.onSourceError} />}
        </video>}
        <div {...styles.controls} style={
          {top: Math.ceil((height - CONTROLS_HEIGHT) / 2), left: controlsPadding, right: controlsPadding}
        }>
          <div {...styles.buttons}>
            <button
              {...styles.button}
              onClick={playEnabled ? this.toggle : null}
              title={t(`styleguide/AudioPlayer/${playing ? 'pause' : 'play'}`)}
              aria-live='assertive'
            >
              {!playing && <Play size={SIZE.play} fill={playEnabled ? '#000' : colors.disabled} />}
              {playing && <Pause size={SIZE.play} fill="#000" />}
            </button>
            <button
              {...styles.button}
              onClick={playEnabled ? () => this.setTime(0) : null}
              title={t('styleguide/AudioPlayer/rewind')}
            >
              <Rewind size={SIZE.rewind} fill={(playEnabled && progress > 0) ? '#000' : colors.disabled}/>
            </button>
          </div>
          {download && (
            <div {...styles.download}>
              {playEnabled && (
                <a href={src.mp3 || src.aac || src.mp4} download title={t('styleguide/AudioPlayer/download')}>
                  <Download size={SIZE.download} fill={'#000'} />
                </a>
              )}
              {!playEnabled && (
                <Download size={SIZE.download} fill={colors.disabled} />
              )}
            </div>
          )}
          {closeHandler && (
            <button title={t('styleguide/AudioPlayer/close')} {...styles.close} onClick={closeHandler}>
              <Close size={SIZE.close} fill={'#000'} />
            </button>
          )}
          <div {...styles.uiText} style={uiTextStyle}>
            {loading && <InlineSpinner size={25} title={t('styleguide/AudioPlayer/loading')} />}
            <div {...styles.time} tabIndex='0'>
              {this.formattedCurrentTime && this.formattedCurrentTime}
              {this.formattedCurrentTime && this.formattedDuration && ' / '}
              {this.formattedDuration && this.formattedDuration}
            </div>
            {sourceError && !loading && (
              <div {...styles.sourceError}>
                {t('styleguide/AudioPlayer/sourceError')}{' '}
                <span onClick={() => this.reload()} {...styles.retry}>
                  {t('styleguide/AudioPlayer/sourceErrorTryAgain')}
                </span>
              </div>
            )}
          </div>
        </div>
        <div {...(scrubberPosition === 'bottom' ? styles.scrubberBottom : styles.scrubberTop)}>
          <div {...styles.progress} style={{ width: `${progress * 100}%` }} />
          <div
            {...styles.scrub}
            ref={this.scrubRef}
            onTouchStart={this.scrubStart}
            onTouchMove={this.scrub}
            onTouchEnd={this.scrubEnd}
            onMouseDown={this.scrubStart}
          />
          <div {...styles.buffer}>
            {this.audio &&
              timeRanges.map(({start, end}, index) => (
                <span
                  key={index}
                  {...styles.timeRange}
                  style={{
                    left: `${start / this.audio.duration * 100}%`,
                    width: `${(end - start) /
                      this.audio.duration *
                      100}%`
                  }}
                />
              ))}
          </div>
          <div {...styles.totalDuration} />
        </div>
      </div>
    )
  }
}

AudioPlayer.propTypes = {
  src: PropTypes.shape({
    mp3: PropTypes.string,
    aac: PropTypes.string,
    ogg: PropTypes.string,
    hls: PropTypes.string,
    mp4: PropTypes.string,
  }),
  autoPlay: PropTypes.bool,
  size: PropTypes.oneOf(Object.keys(breakoutStyles)),
  attributes: PropTypes.object,
  height: PropTypes.number,
  style: PropTypes.object,
  closeHandler: PropTypes.func,
  download: PropTypes.bool,
  scrubberPosition: PropTypes.oneOf(['top', 'bottom']),
  timePosition: PropTypes.oneOf(['left', 'right']),
  controlsPadding: PropTypes.number
}

AudioPlayer.defaultProps = {
  autoPlay: false,
  size: undefined,
  height: 44,
  style: {},
  download: false,
  scrubberPosition: 'top',
  timePosition: 'right',
  controlsPadding: 0
}

AudioPlayer.contextTypes = {
  getMediaProgress: PropTypes.func,
  saveMediaProgress: PropTypes.func
}

export default AudioPlayer
