import { useContext } from 'react'
import { GameContextType, ModalContextType } from '../../@types'
import { GameContext, ModalContext } from '../../contexts'

const FinishGameModal = () => {
  const { resetGame } = useContext(GameContext) as GameContextType
  const { hideModal } = useContext(ModalContext) as ModalContextType

  return (
    <div>
      <button onClick={() => resetGame(hideModal)}>test</button>
    </div>
  )
}

export default FinishGameModal
