import { useState } from "react";

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            onSearch(query);
        }
    };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row items-center gap-4 max-w-xl mx-auto'>
        <input 
            type='text'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une recette..."
            className="
                w-full 
                px-6 py-3 
                rounded-lg 
                border border-gray-300 
                shadow-sm 
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                transition 
                placeholder-gray-400 
                text-gray-800 
                text-lg
            "
        />

        <button 
            type="submit"
            className="
                bg-blue-600
                text-white
                px-6 py-3
                rounded-lg
                font-semibold
                text-lg
                hover:bg-blue-700
                active:bg-blue-800
                shadow-md
                transition
                w-full sm:w-auto
                flex justify-center items-center
            "
            aria-label="Rechercher"
        >
            Rechercher
        </button>
    </form>
  )
}

export default SearchBar
