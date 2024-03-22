import { useEffect, useState } from "react"
import "./Recipes.css"
import Loading from "../../components/Loading/Loading"
import { Link, useParams } from "react-router-dom";
import GoBack from "../../components/GoBack/GoBack";
import RecipesCard from "../../components/RecipesCard/RecipesCard";

const Recipes = () => {
    const {city} =useParams();
    const [countries, setCountries] =  useState([])
    const[loading , setLoading] = useState(true)
    
    useEffect(()=>{
        setLoading(true)
        setCountries([])
        setTimeout(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${city}`)
        .then(response => response.json())
        .then(response =>{
            setCountries(response.meals)
            setLoading(false)
        })
    },1000)
    },[])

  return (
    <section className="countries-section flex-container">
       
        {loading && <Loading/>}
        {!loading && countries.map((country)=>(
          <Link key={country.idMeal} to={`/Recipe/${country.idMeal}`}className="country-link">
            <RecipesCard country={country}/>
          </Link>
        ))}
         <Link to="/Country" className="gobackCounty-link">
        <GoBack/>
        </Link>
    </section>
  )
}

export default Recipes