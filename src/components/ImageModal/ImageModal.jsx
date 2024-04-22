import css from './ImageModal.module.css';
import { FaTimes } from 'react-icons/fa';


export default function ImageModal({ imageUrl, closeModal }) {
  return (
    <div className={css.modalOverlay} onClick={closeModal}>
      <div className={css.modalContent}>
        <img src={imageUrl} alt="Modal" />
        <button className={css.closeButton} onClick={closeModal}>
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

