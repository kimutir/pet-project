import React from 'react';
import modalStyle from './Modal.module.css';

const Modal = ({ open, setOpen, children }) => {
  console.log('Render from Modal');

  const mainModalStyle = [modalStyle.modal];

  if (open) {
    mainModalStyle.push(modalStyle.modal__open);
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={mainModalStyle.join(' ')} onClick={() => closeModal()}>
      {/* <div onClick={(e) => e.stopPropagation()}>{children}</div> */}
      {children}
    </div>
  );
};

export default Modal;
