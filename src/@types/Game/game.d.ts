import { Class } from '../Class'

export interface GameContextType {
  classes: Class[]
  rollNumber: number
  numberToGet: string | undefined
  setNumberToGet: React.Dispatch<React.SetStateAction<string | undefined>>
  roll: (showModal) => void
  resetGame: (hideModal) => void
  finishedGame: boolean
}
