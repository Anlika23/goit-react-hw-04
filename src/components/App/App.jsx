import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
// import Modal from 'react-modal';

import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal'; 

import css from './App.module.css';

const ACCESS_KEY = 'u7TQI_X9qzwH-cnYKH240T3IujFm_wlKq82yGuyvWrM'; 
// Modal.setAppElement('#root');

export default function App() {
  const [query, setQuery] = useState(''); 
  const [images, setImages] = useState([]); 
  const [loading, setLoading] = useState(false); 
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null); 
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const perPage = 12;

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const fetchImages = async (query, page = 1) => {
    setLoading(true); 
    setError(null);
    
    try {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=${perPage}&client_id=${ACCESS_KEY}`);
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }

      const data = await response.json();
      const newImages = data.results.map(result => ({
        small: result.urls.small,
        regular: result.urls.regular
      }));
      setImages(prevImages => [...prevImages, ...newImages]); 
      setTotalPages(data.total_pages); 
    } catch (error) {
      console.error('Error fetching images:', error);
      setError('Failed to fetch images. Please try again later.'); 
      Toaster.error('Failed to fetch images. Please try again later.');
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    if (!query) return;
    fetchImages(query, page);
  }, [query, page]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage(prevPage => prevPage + 1); 
    }
  };

  return (
    <div className={css.container}>
      <SearchBar onSubmit={handleSearch} />
      <Toaster />
     
      {error ? <ErrorMessage message={error} /> : <ImageGallery images={images} openModal={openModal} />}
      {loading && <Loader isLoading={loading} />}
      {totalPages && totalPages !== page && <LoadMoreBtn onLoadMore={handleLoadMore} hasMore={totalPages && totalPages !== page} />}

      {selectedImage && <ImageModal isOpen={true} imageUrl={selectedImage} closeModal={closeModal} />}
    </div>
  );
}
