import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(selectedRecipe);
      })
      .catch((error) => console.error("Error loading recipe:", error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-gray-500 text-lg mt-10">Loading recipe...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Home</Link>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        {recipe.image && (
          <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6" />
        )}

        {recipe.ingredients && recipe.ingredients.length > 0 && (
          <>
            <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc list-inside text-gray-700 mb-6">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </>
        )}

        {recipe.instructions && (
          <>
            <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
            <p className="text-gray-700">{recipe.instructions}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeDetail;
