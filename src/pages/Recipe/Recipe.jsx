import { useEffect, useState } from "react";
import "./Recipe.css"
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import GoBack from "../../components/GoBack/GoBack";
import RecipeInfoCard from "../../components/RecipeInfoCard/RecipeInfoCard";

const Recipe = () => {

    const { id } = useParams();
    const [recipe, setRecipe] = useState(); // Asegúrate de inicializar recipe con null en lugar de undefined
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(response => response.json())
                .then(data => {
                    if (data.meals && data.meals.length > 0) {
                        setRecipe(data.meals[0]); // 
                    }
                    setLoading(false); // 
                })
                .catch(error => {
                    console.error('Error fetching recipe:', error);
                    setLoading(false);
                }); // Aquí estaba faltando el cierre de paréntesis
        }, 1000);
    }, []);

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