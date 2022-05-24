import React from "react";
import './hero.css'
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants'
import { UseHeroMoviment } from '../hooks'

  export function Hero() {
    const moviment = UseHeroMoviment()
        

  return (
    <div 
      style={{
          position:"absolute",
          bottom: TILE_SIZE * moviment.heroPositionY,
          left: TILE_SIZE * moviment.heroPositionX,
          width: TILE_SIZE,
          height: TILE_SIZE + HEAD_OFFSET,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
          backgroundImage: "url(./Assets/HERO.png)",
          animation: "hero-animation 1s steps(4) infinite",
          transform: `scaleX(${moviment.direction === 'right' ? 1 : -1})`
      }}
    />
  )
}
