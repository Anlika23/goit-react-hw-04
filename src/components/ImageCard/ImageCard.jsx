

export default function ImageCard({ imageUrl, openModal }) {
    const handleClick = () => {
        openModal(imageUrl);
    };
    
    return (
        <div onClick={handleClick}>
            <img src={imageUrl} alt="Gallery Image" />
        </div>
    );

}