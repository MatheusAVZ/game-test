import React from "react";
import './trap.css'
import { TILE_SIZE } from '../../settings/constants'

  export function Trap() {
  return (
    <div 
      style={{
          position:"absolute",
          bottom: TILE_SIZE * 8,
          left: TILE_SIZE * 5,
          width: TILE_SIZE,
          height: TILE_SIZE,
          backgroundImage: "url(./Assets/TRAP.png)",
          backgroundRepeat: 'no-repeat',
          animation: "trap-animation 1s steps(8) infinite"
      }}
    />
  )
}
