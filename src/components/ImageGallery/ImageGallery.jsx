import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

export default function ImageGallery({ images, openModal }) {
 
    return (
        <div className={css.containerImage}>
            <ul className={css.gallery}>
                {images.map((image, index) => (
                    <li className={css.galleryItem} key={index}>
                        <ImageCard imageUrl={image} openModal={openModal} /> 
                    </li>
                ))}
            </ul>
        </div>
    );
}