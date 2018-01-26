An `<AudioPlayer />` is a responsive click-to-play audio player.

Props:
- `src`: An object representing the audio's source with these keys:
-- `mp3`: The mandatory mp3 source URL of the audio.
-- `aac`: The aa3 source URL of the audio.
-- `ogg`: The ogg source URL of the audio.
- `size`: optional, `narrow` or `tiny`.
- `attributes`: Object, arbitrary attributes mapped to the audio tag.


```react
<AudioPlayer
  src={{
    mp3: '/static/sample.mp3'
  }}
/>
```

```react
<AudioPlayer
  src={{
    mp3: '/static/sample.mp3'
  }}
  size='narrow'
/>
```


```react
<AudioPlayer
  src={{
    mp3: '/static/sample.mp3'
  }}
  size='tiny'
/>
```

```react
<AudioPlayer
  src={{
    mp3: '/static/non-existing-sample.mp3'
  }}
/>
```

The `<AudioPlayer />` may also be used to play from video sources when visual content doesn't matter.

```react
<AudioPlayer
  src={{
    hls: 'https://player.vimeo.com/external/213080233.m3u8?s=40bdb9917fa47b39119a9fe34b9d0fb13a10a92e',
    mp4: 'https://player.vimeo.com/external/213080233.hd.mp4?s=ab84df0ac9134c86bb68bd9ea7ac6b9df0c35774&profile_id=175',
  }}
/>
```