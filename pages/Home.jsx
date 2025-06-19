import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";


const Home = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (Term) => {
        setSearchTerm(Term);
        setLoading(true);

        try {
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Term}`);
            const data = await res.json();
            setRecipes(data.meals || []);
        } catch (error) {
            console.log("Erreur lors de la récupérations des recettes :", error);
            setRecipes([]);
        }
        setLoading(false);

        console.log("Recherche :", Term);
    }
  return (
    <div>
        <SearchBar onSearch={handleSearch} />

        {loading && <p>Chargement...</p>}

        {!loading && recipes.length === 0 && searchTerm && (
            <p className="text-gray-600">Résultats pour : <strong>{searchTerm}</strong></p>
        )}

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mt-8">
            {recipes.map((meal) => (
                
                <Link
                 key={meal.idMeal}
                 to={`/recette/${meal.idMeal}`}
                 className="block bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
                >
                    <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{meal.strMeal}</h3>
                        <p className="text-sm text-gray-500">{meal.strArea} - {meal.strCategory}</p>
                    </div>
                    
                </Link>

                
            ))}
        </div>
       
    </div>
  )
}

export default Home
