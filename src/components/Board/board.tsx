import React from "react";
import {MiniDemon, Hero, Trap, Demon, Chest } from '../index'
import { GAME_SIZE } from "../../settings/constants";


export function Board() {
  return (
    <div>
      <Chest/>
      <Trap/>
      <Hero/>
      <MiniDemon/>
      <Demon/>
    <img src='./Assets/tileset.gif' alt='Board' width={GAME_SIZE} height={GAME_SIZE}/>
    </div>
  )
}
