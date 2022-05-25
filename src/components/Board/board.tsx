import React from "react";
import {MiniDemon, Hero, Trap, Demon, Chest, Trap2} from '../index'
import { GAME_SIZE } from "../../settings/constants";


export function Board() {
  return (
    <div>
      <Chest/>
      <Trap/>
      <Trap2/>
      <Hero/>
      <MiniDemon/>
      <Demon/>
      <img src='./assets/tileset.gif' alt='Board' width={GAME_SIZE} height={GAME_SIZE}/>
    </div>
  )
}
