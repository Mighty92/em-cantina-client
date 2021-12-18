import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import axios from 'axios';
import ListRecipes from '../components/ListRecipes';

const Home = () => {

    const [search, setSearch] = useState("");


    const setSearchValue = (e) =>{
        e.preventDefault();
        setSearch(e.target.value);
      }

      const handleSubmit = (e)=>{
        e.preventDefault();
        result();
    }

    const deleteItem = (index)=>{
        const recipes2 = recipes.slice();
        recipes2.splice(index, 1)
        setRecipes(recipes2);
    }

  

    const [recipes, setRecipes] = useState([]);
    const url = 'http://localhost:9000/api/recipes';
    useEffect(()=>{
        axios.get(`${url}`).then((res) =>{
        setRecipes(res.data);
        })
    },[recipes]);

    const result =() =>{}

    return (
        <div>
            <Logo/>
            <Navigation/>
            <hr className="menu"/>
            <div className="menu">
                <h1 className="bibli">Nos Recettes</h1>
                <div className="menuList">
                    {recipes.map((recipes, index) => <ListRecipes recipes={recipes} key={index} onDeleteItem={()=>{deleteItem(index)}}/>)}
                </div>
            </div>
        </div>
        
    );
};

export default Home;
