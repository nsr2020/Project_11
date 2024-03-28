import { useEffect, useState } from "react";
import "./Recipe.css"
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import GoBack from "../../components/GoBack/GoBack";
import RecipeInfoCard from "../../components/RecipeInfoCard/RecipeInfoCard";
import Notfound from "../NotFound/Notfound";

const Recipe = () => {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(); 
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        
        setNotFound(false);
        setTimeout(() => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(response => response.json())
                .then(data => {
                    if (data.meals && data.meals.length > 0) {
                        setRecipe(data.meals[0]);
                    } else {
                        setNotFound(true); 
                    }
                   
                })
                .catch(error => {
                    console.error('Error fetching recipe:', error);
                   
                });
        }, 1000);
    }, []);

    if (notFound) {
        return <Notfound/>;
    }

    return (
        <section className="recipe-container flex-container">
            {!recipe ? <Loading /> : (
               <RecipeInfoCard recipe={recipe}/>
            )}
               <GoBack to={`/Recipes/${recipe?.strArea}`}/>
            
        </section>
    );
}

export default Recipe;