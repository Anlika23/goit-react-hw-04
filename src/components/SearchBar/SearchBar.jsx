import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { CgSearch } from "react-icons/cg";
import css from './SearchBar.module.css';

export default function SearchBar({ onSubmit }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = query.trim(); 
        // console.log(inputValue)

        if (inputValue === '') { 
            toast.error('Please enter text to search images'); 
            return; 
        }

        console.log('Submitting query:', inputValue);

        onSubmit(inputValue); 
        setQuery(''); 
    };

    return (
        <header className={css.containerForm}>
            <form  className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className={css.btmSearch} type="submit"><CgSearch />Search</button>
            </form>
        </header>
    );
}