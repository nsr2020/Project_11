import "./RecipesCard.css"

const RecipesCard = ({country}) => {
  return (
    <article className="country-article">
    <div className="img-wrp"><img src={country.strMealThumb}alt={country.strMeal} /></div>
   
        <h2>{country.strMeal}</h2>
   
   </article> 
  )
}

export default RecipesCard