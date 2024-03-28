import { citiesInfo } from "../../utils/CitiesInfo";
import "./AreasCard.css"


const AreasCard = ({area}) => {
  
 const findCityInfo = (areaName) => {
    return citiesInfo.find(
        city => city.name.toLowerCase() === areaName.toLowerCase()
    );
};

  
  const cityInfo = findCityInfo(area.strArea);
  
  return (
    <>
   {area.strArea!== "Unknown" &&  <article  className="areas-card">           
    <div className="cortina flex-container">
    <h2>{area.strArea}</h2>
    </div>
    <div>
        <img src={cityInfo.image} alt={area.strArea}/>
    </div>
  
   </article>}
   </>
  )
}

export default AreasCard