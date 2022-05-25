import React from "react";
import './demon.css'
import { DEMON_TILE_SIZE, TILE_SIZE } from '../../settings/constants'

  export function Demon() {
  return (
    <div 
      style={{
          position:"absolute",
          bottom: TILE_SIZE * 10,
          left: TILE_SIZE * 13,
          width: DEMON_TILE_SIZE ,
          height: DEMON_TILE_SIZE,
          backgroundRepeat: 'no-repeat',
          backgroundImage: "url(./assets/DEMON.png)",
          animation: "demon-animation 1s steps(4) infinite"
      }}
    />
  )
}
