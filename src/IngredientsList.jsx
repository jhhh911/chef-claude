export default function IngredientsList(props) {

const propIngredients = props.ingredients

  const ingredientsListItems = propIngredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ));

  return (
    <>
    {propIngredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
        </section>
      )}
      {propIngredients.length > 3 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.toggle}>Get a recipe</button>
        </div>
      )}
      </>
  )
}