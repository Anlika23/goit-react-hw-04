

export default function ImageCard({ imageUrl, openModal }) {
    const handleClick = () => {
        openModal(imageUrl.regular);
    };
    
    return (
        <div >
            <img src={imageUrl.small} alt="Gallery Image" onClick={handleClick} /> 
        </div>
    );

}