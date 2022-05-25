import React from "react";
import './trap2.css'
import { TILE_SIZE } from '../../settings/constants'

  export function Trap2() {
  return (
    <div 
      style={{
          position:"absolute",
          bottom: TILE_SIZE * 8,
          left: TILE_SIZE * 11,
          width: TILE_SIZE,
          height: TILE_SIZE,
          backgroundImage: "url(./assets/TRAP.png)",
          backgroundRepeat: 'no-repeat',
          animation: "trap-animation 1s steps(8) infinite"
      }}
    />
  )
}
