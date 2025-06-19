import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


const RecipePage = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await res.json();
                setRecipe(data.meals[0] || null);
            } catch (error) {
                console.log("Erreur lors de la récupération de la recette", error);
                setRecipe(null);
            }
            setLoading(false);
        };
        fetchRecipe();
    }, [id]);

    if (loading) return <p>Chargement...</p>
    if (!recipe) return <p>Aucune recette trouvée.</p>
  return (
    <div className="p-4 max-w-3xl mx-auto">
        <button
         onClick={() => navigate(-1)}
         className="mb-6 inline-block text-sm text-blue-600 hover:underline"
        >
            Retour
        </button>
        <h2 className="text-3xl font-bold mb-4">{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full rounded-lg mb-6 shadow-md"/>
        <p className="text-gray-600 mb-2"><strong>Categorie :</strong> {recipe.strCategory}</p>
        <p className="text-gray-600 mb-6"><strong>Origine :</strong> {recipe.strArea}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Instructions :</h3>
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">{recipe.strInstructions}</p>

        <h3 className="text-2xl font-semibold mt-6 mb-3">Ingredients :</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
            {Array.from({ length: 20 }).map((_, i) => {
                const ingredient = recipe[`strIngredient${i + 1}`];
                const measure = recipe[`strMeasure${i + 1}`];
                if (ingredient && ingredient.trim()) {
                    return <li key={i}>{ingredient} - {measure}</li>
                }
                return null;
            })}
        </ul>
        {recipe.strYoutube && (
            <div className="mt-6">
                <h3 className="text-xl font-semibold mb-2">Vidéo :</h3>
                <a
                 href={recipe.strYoutube}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                    Regarder sur YouTube
                </a>
            </div>
        )}
    </div>
  )
}

export default RecipePage
