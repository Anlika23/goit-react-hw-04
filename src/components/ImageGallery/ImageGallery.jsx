import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal }) {
    if (!images || images.length === 0) {
        return null;
    }
    return (
        <div className={css.conrainerImage}>
            <ul className={css.gallery}>
                {images.map((image, index) => (
                    <li className={css.galleryItem} key={index}>
                        <ImageCard imageUrl={ image.small} openModal={openModal} />
                    </li>
                ))}
            </ul>
        </div>
    );
}