##  Primary

```react|span-3
<Button primary>
  Mitmachen
</Button>
```

```react|span-3
<Button primary disabled>
  Mitmachen
</Button>
```

```react|span-3
<Button primary simulate='hover'>
  Mitmachen
</Button>
```

```react|span-3
<Button primary simulate='active'>
  Mitmachen
</Button>
```

## Secondary

```react|span-3
<Button>
  Weiter
</Button>
```

```react|span-3
<Button disabled>
  Weiter
</Button>
```

```react|span-3
<Button simulate='hover'>
  Weiter
</Button>
```

```react|span-3
<Button simulate='active'>
  Weiter
</Button>
```

##  Dimmed

Just like the secondary button, except that the default state looks dimmed liked the disabled state.

```react|span-3
<Button dimmed>
  Mitmachen
</Button>
```

## Big

```react|span-3
<Button big primary>
  Päng!
</Button>
```

```react|span-3
<Button big>
  Päng
</Button>
```

### Special Cases

To fit, e.g. in a header, it's permissible to set an explicit height.

```react
<Button style={{height: 50}}>
  Päng
</Button>
```

## Block

```react
<Button block>
  Volle Breite
</Button>
```

```react
<Button block big>
  Päng, Päng!
</Button>
```

## Black and White

```react|span-3
<Button black>
  Schwarz
</Button>
```

```react|span-3
<Button black simulate='hover'>
  Schwarz
</Button>
```


```react|span-3,dark
<Button white>
  Weiss
</Button>
```

```react|span-3,dark
<Button white simulate='hover'>
  Weiss
</Button>
```

## Plain Button

```react|span-3
<button
  {...plainButtonRule}
  onClick={() => alert('A11Y ftw')}
  title="Artikel anhören">
  <AudioIcon />
</button>
```

```react|span-3
<button
  {...merge(plainButtonRule,
    { backgroundColor: '#000', borderRadius: '50%', width: 50, height: 50 }
  )}>
  <AudioIcon fill='#fff' />
</button>
```

Use [glamors `css` or `merge`](https://github.com/threepointone/glamor/blob/master/docs/howto.md#combined-selectors) to ensure your `border`, `background`, `padding` and other styles take precedence over the plain rule.
