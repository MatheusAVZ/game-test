import React from "react";
import './miniDemon.css'
import { TILE_SIZE,HEAD_OFFSET } from '../../settings/constants'

  export function MiniDemon() {
  return (
    <div 
      style={{
          position:"absolute",
          bottom: TILE_SIZE * 6,
          left: TILE_SIZE * 4,
          width: TILE_SIZE,
          height: TILE_SIZE + HEAD_OFFSET,
          backgroundPosition: `0px -${TILE_SIZE - HEAD_OFFSET}px`,
          backgroundRepeat: 'no-repeat',
          backgroundImage: "url(./assets/MINI-DEMON.png)",
          animation: "mini-demon-animation 1s steps(4) infinite"
      }}
    />
  )
}
