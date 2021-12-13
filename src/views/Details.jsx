import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useLocation } from "react-router";
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import DeleteRecipes from '../components/DeleteRecipes';
import { Link } from 'react-router-dom';


const Details = () => {

    const id = useLocation().search.split("?")[1];
    const [detailRecipes, setDetailRecipes] = useState(null);

    useEffect (() => {
        detailsRes();
    },[])
    
    const detailsRes = () =>{
        axios.get(`http://localhost:9000/api/recipe/${id}`)
        .then((res) =>{
        setDetailRecipes(res.data);
        })
    }

    return (
        <div>
            <Logo/>
            <Navigation/>
            <hr className="menu"/>
            <div className="detail">
                <h1 className="pdetail"> Détails </h1>
                <h2 className="pdetail">De la Recette</h2>
            </div>
            <div className="conteneur-flexible">
                {detailRecipes &&
                <>
                    <div className="element-flexible">
                            <img src={detailRecipes.photo} className="detail-img"/>
                    </div>

                    <div className="element-flexible">
                        <h3 className="title">{detailRecipes.titre}</h3>
                        <h3 className="text">{detailRecipes.description}</h3>
                        <h3 className="text">Le niveau est : {detailRecipes.niveau}</h3>
                        <br/>

                        <h3 className="text">Le npmbredde personne(s) est de : {detailRecipes.personnes}</h3>
                        <br/>

                        <h3 className="text">Le temps de préparation est de : {detailRecipes.tempsPreparation}</h3>
                        <br/>

                    </div>
                    <div className="element-flexible">
                        <h3 className="text">Les ingredients sont : {detailRecipes.ingredients}</h3>
                        <h3 className="text">Les étapes sont : {detailRecipes.etapes}</h3>

                        <div className="mod">
                        <Link to={"/modificationRecipes/" + id} >
                            <button className="favorite styled">Modifier</button>
                        </Link>
                        </div>

                        <DeleteRecipes id={detailRecipes.id}/>
                    </div>
                </>
                }

            </div>
        </div>
    );
};

export default Details;