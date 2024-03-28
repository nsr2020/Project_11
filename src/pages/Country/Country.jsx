import { useEffect, useState } from "react";
import "./Country.css";
import Loading from "../../components/Loading/Loading";
import AreasCard from "../../components/AreasCard/AreasCard";
import { Link } from "react-router-dom";
import GoBack from "../../components/GoBack/GoBack";

const Country = () => {
  const [areas, setAreas] = useState([]);

  useEffect(() => {
    setAreas([]);
    setTimeout(() => {
      fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        .then((response) => response.json())
        .then((response) => {
          setAreas(response.meals);
        });
    }, 1000);
  }, []);
  

  return (
    <main className="home flex-container">
      {!areas.length && <Loading />}{" "}
      {areas.length &&
        areas.map((area) => (
          <Link
            key={area.strArea}
            to={`/Recipes/${area.strArea}`}
            className="areas-link"
          >
            <AreasCard area={area} />
          </Link>
        ))}
      <GoBack to={`/`} />
    </main>
  );
};

export default Country;
