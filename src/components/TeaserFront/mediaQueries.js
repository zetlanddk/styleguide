const breakPoints = {
  'front-m': 640,
  'front-l': 1174,
  'front-xl': 1400,
}

const createMqFunction = key => {
  const query = `@media only screen and (min-width: ${breakPoints[key]}px)`
  return styles => ({
    // media query does not increase specificity
    [query]: styles,
    // attribute selector increases specificity -> wins
    [`[data-simulate-mq-${key}] &`]: styles
  })
}

export const frontMUp = createMqFunction('front-m')
export const frontLUp = createMqFunction('front-l')
export const frontXLUp = createMqFunction('front-xl')
