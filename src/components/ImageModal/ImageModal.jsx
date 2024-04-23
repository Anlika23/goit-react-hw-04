import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { FaTimes } from 'react-icons/fa';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, imageUrl, closeModal }) {


  return (
    <div onClick={closeModal}>
      <Modal
          isOpen={isOpen}
          onRequestClose={closeModal}
          className={css.modalContent}
          overlayClassName={css.modalOverlay}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
      >
        <div>
          <img src={imageUrl} alt="Modal" />
          <button className={css.closeButton} onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
      </Modal>
    </div>
  );
}