import React, { useState } from "react";
import useRecipeStore from "../store/recipeStore";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const addRecipe = useRecipeStore((state) => state.addRecipe);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || description.trim() === "") return;
    addRecipe({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Recipe Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;

