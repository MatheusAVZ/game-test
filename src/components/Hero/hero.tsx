import useEventListener from "@use-it/event-listener";
import React, { useState } from "react";
import './hero.css'
import { HEAD_OFFSET, TILE_SIZE } from '../../settings/constants'

  export function Hero() {
    const [heroPositionX, setHeroPositionX] = useState(2)
    const [heroPositionY, setHeroPositionY] = useState(4)
    const [direction, setDirection] = useState('right')

    useEventListener('keydown', (e:KeyboardEvent) => {
      if (e.key === 'w') {
        setHeroPositionY(heroPositionY + 1)
      }
      else if (e.key === 'a') {
        setHeroPositionX(heroPositionX - 1);
        setDirection('left');
      }
      else if (e.key === 's') {
        setHeroPositionY(heroPositionY - 1)
      }
      else if (e.key === 'd') {
        setHeroPositionX(heroPositionX + 1);
        setDirection('right')
      }
    })
        

  return (
    <div 
      style={{
          position:"absolute",
          bottom: TILE_SIZE * heroPositionY,
          left: TILE_SIZE * heroPositionX,
          width: TILE_SIZE,
          height: TILE_SIZE + HEAD_OFFSET,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
          backgroundImage: "url(./Assets/HERO.png)",
          animation: "hero-animation 1s steps(4) infinite",
          transform: `scaleX(${direction === 'right' ? 1 : -1})`
      }}
    />
  )
}
