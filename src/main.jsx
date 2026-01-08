import React from 'react'

export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsListItems = ingredients.map(ingredient => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget)
    const newIngredient = formData.get('ingredient')
    ingredients.push(newIngredient)
    console.log(ingredients)
  }

  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          aria-label="Add Ingredient"
          placeholder="e.g oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
