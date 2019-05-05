import React from 'react'

import { css } from 'glamor'

const Scaler = ({children}) => {
  return <div data-simulate-mq-front-m data-simulate-mq-front-l {...css({
    width: 120,
    height: 82.12
  })}>
    <div {...css({
      transform: 'scale(0.1)',
      transformOrigin: '0 0',
      width: 1200
    })}>
      {children}
    </div>
  </div>
}

export default Scaler
