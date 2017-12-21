```code|lang-jsx
import Link from 'next/link'
import createFrontSchema from '@project-r/styleguide/lib/templates/Front'

const schema = createFrontSchema({
  Link
})
```

`createFrontSchema` take an optional options object with following key:

`Link`, a Next.js like `<Link />` component
This will be wrapped around and links (headlines and credits) and the whole teaser. You should attach an `onClick` handler within, if you wish to do client side routing and or prefetching. The component recieves following props:
- `href` String, target url or path
- `passHref` Boolean, indicates this will eventually end in an a tag and you may overwrite href

# Example

```react|noSource
<Markdown schema={schema}>{`

<section><h6>TEASER</h6>

\`\`\`
{
  "bgColor": "SandyBrown",
  "center": false,
  "color": "#fff",
  "kind": "editorial",
  "linkColor": "WhiteSmoke",
  "portrait": true,
  "reverse": false,
  "teaserType": "frontImage",
  "textPosition": "bottomleft",
  "titleSize": "standard",
  "url": "https://www.republik.ch/manifest"
}
\`\`\`

![](/static/desert.jpg?size=4323x2962)

###### Wüst(e)

# Welt-Bilder

#### Und es war ihnen wie eine Bestätigung ihrer neuen Träume und guten Absichten.

Foto: [Thomas Vuillemin on Unsplash](https://unsplash.com/photos/c1_K8Qfd_iQ)

<hr /></section>

<section><h6>TEASERGROUP</h6>

\`\`\`
{
  "columns": 2
}
\`\`\`

<section><h6>TEASER</h6>

\`\`\`
{
  "bgColor": "#000",
  "center": false,
  "color": "#fff",
  "kind": "editorial",
  "linkColor": "#fff",
  "portrait": true,
  "reverse": false,
  "teaserType": "frontTile",
  "textPosition": "topleft",
  "titleSize": "standard",
  "url": "https://www.republik.ch/updates/portraets"
}
\`\`\`

![](https://assets.republik.ch/images/pierre_rom.jpeg?size=853x853)

###### Echte Republikaner

# Pierre

#### Republik-Verleger, 93 Jahre

Foto: [Laurent Burst](/~349ef65b-119a-4d3e-9176-26517855d342 "Laurent Burst")

<hr /></section>

<section><h6>TEASER</h6>

\`\`\`
{
  "bgColor": "#ffffff",
  "center": false,
  "color": "#000000",
  "kind": "editorial",
  "linkColor": "#000",
  "portrait": true,
  "reverse": false,
  "teaserType": "frontTile",
  "textPosition": "topleft",
  "titleSize": "standard",
  "url": "https://www.republik.ch/updates/portraets"
}
\`\`\`

![](https://assets.republik.ch/images/mavie.jpeg?size=848x848)

###### Echte Republikaner

# Mavie

#### Republik-Verlegerin, 8 Monate

Foto: [Laurent Burst](/~349ef65b-119a-4d3e-9176-26517855d342 "Laurent Burst")

<hr /></section>

<hr /></section>

<section><h6>TEASER</h6>

\`\`\`
{
  "bgColor": "#da4343",
  "center": false,
  "color": "#fff",
  "kind": "editorial",
  "linkColor": "#fff",
  "portrait": true,
  "reverse": false,
  "teaserType": "frontTypo",
  "textPosition": "topleft",
  "titleSize": "standard",
  "url": "https://www.republik.ch/community?id=32464aa8-ccce-4ffa-9b84-0b113aff32f0"
}
\`\`\`

###### 

# Das schwere Los mit Eltern

#### Wenn sie sonntags überraschend kommen – was tun?

Von Sonderkorrespondent [Lukas Bünger](<>)

<hr /></section>

<section><h6>TEASER</h6>

\`\`\`
{
  "bgColor": "#000",
  "center": false,
  "color": "#fff",
  "kind": "editorial",
  "linkColor": "gray",
  "portrait": true,
  "reverse": false,
  "teaserType": "frontSplit",
  "textPosition": "topleft",
  "titleSize": "small",
  "url": "https://www.republik.ch/crew"
}
\`\`\`

![](https://assets.republik.ch/cf_gui/static/team/christof_moser.jpg)

###### Kluge Gedanken von alten Männern

# «With rebellion, awareness is born.»

#### 

Von [Christof Moser](/~6556e282-4ac4-4129-8f8f-d20f28170c39 "Christof Moser")

<hr /></section>

`}</Markdown>
```