import {useState} from "react"
import useEventListener from "@use-it/event-listener"

export function UseHeroMoviment(){
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
    return {
      direction: direction,
      heroPositionX: heroPositionX,
      heroPositionY: heroPositionY
    }
}