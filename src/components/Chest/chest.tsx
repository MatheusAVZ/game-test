import React from "react";
import './chest.css'
import { TILE_SIZE } from '../../settings/constants'

  export function Chest() {
  return (
    <div 
      style={{
          position:"absolute",
          bottom: TILE_SIZE * 2,
          left: TILE_SIZE * 8,
          width: TILE_SIZE,
          height: TILE_SIZE,
          backgroundRepeat: 'no-repeat',
          backgroundImage: "url(./assets/CHEST.png)",
          animation: "chest-animation 1s steps(3) infinite"
      }}
    />
  )
}
