import React, { useContext } from 'react'
import ReactDOM from 'react-dom'

import MovieDetails from '../MovieDetails'

import { MODAL_CONTENTS } from '../../constants/modal'

import { ModalContext } from './ModalProvider'

import './index.css'

const MODAL_CONTENT = {
  [MODAL_CONTENTS.MOVIE_DETAILS]: MovieDetails
}

const Modal = () => {
  const {
    context,
    isOpened,
    closeModal,
    content,
    modalProps
  } = useContext(ModalContext)

  if (!isOpened) {
    return null
  }

  const handleModalClose = () => {
    closeModal()
  }

  const Component = MODAL_CONTENT[content]

  const commonProps = {
    handleModalClose,
    modalProps
  }

  return context
    ? ReactDOM.createPortal(
      <div className="overlay">
        <div className="dialog">
          <Component {...commonProps} />
        </div>
      </div>,
      context
    ) : null
}

export default Modal
