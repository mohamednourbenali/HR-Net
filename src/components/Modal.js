import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose}) {
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <p>Employee Created!</p>
        <button onClick={onClose} className='close-button'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 16 16">
                <path d="M 7.5 1 C 3.914063 1 1 3.914063 1 7.5 C 1 11.085938 3.914063 14 7.5 14 C 11.085938 14 14 11.085938 14 7.5 C 14 3.914063 11.085938 1 7.5 1 Z M 10.207031 9.5 L 9.5 10.207031 L 7.5 8.207031 L 5.5 10.207031 L 4.792969 9.5 L 6.792969 7.5 L 4.792969 5.5 L 5.5 4.792969 L 7.5 6.792969 L 9.5 4.792969 L 10.207031 5.5 L 8.207031 7.5 Z"></path>
            </svg>
        </button> 
      </div>
    </div>
  );
}

export default Modal;
