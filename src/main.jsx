import React from "react";
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([
    "all the main spices",
    "pasta",
    "ground beef",
    "tomato paste",
  ]);

 const [recipeShown, showRecipe] = React.useState(false);

 function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }

  function toggleRecipeShown() {
    showRecipe(prev => !prev);
  }


  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {/* Move to own section */}
      <IngredientsList ingredients={ingredients} toggle={toggleRecipeShown}/>
      {/* Move to own section */}
      <ClaudeRecipe recipe={recipeShown}/>
    </main>
  );
}
