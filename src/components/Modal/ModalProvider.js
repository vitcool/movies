import React, {
  useRef,
  useState,
  useEffect,
  Fragment,
} from 'react'
import PropTypes from 'prop-types'

import './index.css'

export const ModalContext = React.createContext()

const ModalProvider = ({ children }) => {
  const modalRef = useRef()
  const [context, setContext] = useState()
  const [modalOptions, setModalOptions] = useState({ isOpened: false })

  useEffect(() => {
    setContext(modalRef.current)
  }, [])

  const updaters = {
    openModal: (modalContent, props) => {
      setModalOptions({
        isOpened: true,
        content: modalContent,
        modalProps: props
      })
    },
    closeModal: () => {
      setModalOptions({ isOpened: false })
    }
  }

  return (
    <Fragment>
      <ModalContext.Provider
        value={{
          ...updaters,
          ...modalOptions,
          context
        }}
      >
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} className="wrapper" />
    </Fragment>
  )
}

ModalProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

export default ModalProvider
