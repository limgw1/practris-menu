import React from 'react'

import './base-game-board.styles.scss'
import MainBoard from './main-board/main-board.components'

const BaseGameBoard = () => {
  return (
    <div className='base-game-board'>
      <MainBoard/>
    </div>
  )
}

export default BaseGameBoard