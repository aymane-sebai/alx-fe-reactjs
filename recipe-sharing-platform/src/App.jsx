import useRecipeStore from './store/recipeStore';

function App() {
  const recipes = useRecipeStore((state) => state.recipes);
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Recipe Sharing Platform</h1>
      <button
        onClick={() => addRecipe({ id: 1, title: 'Test Recipe', description: 'This is a test recipe.' })}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Add Test Recipe
      </button>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id} className="mt-2 border p-2">
            <h2 className="text-xl">{recipe.title}</h2>
            <p>{recipe.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
