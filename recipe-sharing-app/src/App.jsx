import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <SearchBar />  {/* Search functionality */}
        <Routes>
          <Route path="/" element={<RecipeList />} /> {/* Home route */}
          <Route path="/add" element={<AddRecipeForm />} /> {/* Form for adding recipes */}
          <Route path="/recipe/:id" element={<RecipeDetails />} /> {/* Recipe details page */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
