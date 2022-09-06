import React from 'react'

interface Modal {
  content: React.ElementType | null
  props: {}
}

export interface ModalContextType {
  modal: Modal
  hideModal: () => void
  showModal: (content: React.ElementType | any, props: {}) => void
}
