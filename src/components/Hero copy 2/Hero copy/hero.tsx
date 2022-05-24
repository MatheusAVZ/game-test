import React from "react";
import './hero.css'
import { TILE_SIZE } from '../../../settings/constants'

  export function Hero() {
  return (
    <div 
      style={{
          position:"absolute",
          bottom: 48 * 2,
          left: 48,
          width: TILE_SIZE,
          height: 100,
          backgroundRepeat: 'no-repeat',
          backgroundImage: "url(./Assets/HERO.png)",
          animation: "hero-animation 1s steps(4) infinite"
      }}
    />
  )
}
