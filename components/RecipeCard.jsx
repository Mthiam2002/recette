import { Link } from 'react-router-dom';

const RecipeCard = () => {
  return (
    <Link
     to={`/recette/${RecipeCard.idMeal}`}
     className="block bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
    >
        <img 
         src={recipe.strMealThumb}
         alt={recipe.strMeal}
         className="w-full h-48 object-cover"
        />

        <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{recipe.strMeal}</h3>
            <p className="text-sm text-gray-500">
                {recipe.strArea} . {recipe.strCategory}
            </p>
        </div>
    </Link>
  )
}

export default RecipeCard
