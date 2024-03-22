import { useEffect, useState } from "react"
import "./Country.css"
import Loading from "../../components/Loading/Loading"
import AreasCard from "../../components/AreasCard/AreasCard"
import { Link } from "react-router-dom"



const Country = () => {

    const [areas, setAreas] =  useState([])
    const[loading , setLoading] = useState(true)
    
    useEffect(()=>{
        setLoading(true)
        setAreas([])
        setTimeout(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then(response => response.json())
        .then(response =>{
            setAreas(response.meals)
            setLoading(false)
        })
    },1000)

    },[])

  return (
    <main className="home flex-container">
        {loading && <Loading/>}
        {!loading && areas.map((area)=>(
          < Link key={area.strArea} to={`/Recipes/${area.strArea}`} className="areas-link">
          <AreasCard  area={area}/>  
          </Link>
        ))}

    </main>
  )
}

export default Country