import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';

import './SearchBar.css';
import fetchProducts from '../../services/productsApi';
import useAppContext from '../../hooks/useAppContext';

function SearchBar() {
  const { setProducts, setLoading, setError } = useAppContext();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      setError(null);
      const results = await fetchProducts(searchValue);
      setProducts(results);
      setSearchValue('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Filtrar produtos"
        className="search__input"
        onChange={({ target }) => setSearchValue(target.value)}
      />

      <button type="submit" className="search__button" aria-label="Buscar produtos">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
