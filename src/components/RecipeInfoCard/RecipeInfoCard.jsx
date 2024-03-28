import "./RecipeInfoCard.css"

const RecipeInfoCard = ({recipe}) => {
/*   let fixrecipe =""
  if(recipe.strInstructions){
    fixrecipe = recipe.strInstructions.replace(/\./g, '. ');
  } */
  return (
<article className="recipe-card">
  <div className="recipe-image">
    <img src={recipe?.strMealThumb} alt={recipe?.strMeal}/>
  </div>
  <div className="recipe-details">
    <h2> <span>{recipe?.strMeal}</span></h2>
    <h3>*** <span>{recipe?.strCategory}</span>***</h3>
    <h3>*** <span>{recipe?.strArea}</span>***</h3>
    <p>{recipe?.strInstructions?.split('.').join('')}</p>
    <div className="recipe-links">
      <a href={recipe?.strYoutube} target="_blank" rel="noopener noreferrer">YouTube</a>
      <a href={recipe?.strSource} target="_blank" rel="noopener noreferrer">Web Info</a>
    </div>
  </div>
</article>
  )
}

export default RecipeInfoCard