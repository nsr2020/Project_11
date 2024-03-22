import { useEffect, useState } from "react";
import "./Recipe.css"
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import GoBack from "../../components/GoBack/GoBack";
import RecipeInfoCard from "../../components/RecipeInfoCard/RecipeInfoCard";
import Notfound from "../NotFound/Notfound";

const Recipe = () => {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(); 
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setLoading(true);
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
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Error fetching recipe:', error);
                    setLoading(false);
                });
        }, 1000);
    }, []);

    if (notFound) {
        return <Notfound/>;
    }

    return (
        <section className="recipe-container flex-container">
            {loading ? <Loading /> : (
           <RecipeInfoCard recipe={recipe}/>
            )}
            <Link to={`/Recipes/${recipe?.strArea}`}>
            <GoBack/>
            </Link> 
        </section>
    );
}

export default Recipe;