import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteRecipes from './DeleteRecipes';
import axios from 'axios';

const ListRecipes = (props) => {
    const {recipes, onDeleteItem} = props

    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState("");

    const handleEdit = () =>{
        const data = {
            titre: recipes.title,
            description: editContent ? editContent: recipes.description,
            date: recipes.release_date,
        }

        axios.put('http://localhost:9000/api/recipes/' + recipes.id, data)
        .then(() =>{
            setIsEditing(false);

        })
    };

    useEffect(()=>{
        console.log(recipes)
    },[])

    const handleDelete = () =>{
        onDeleteItem()
    }
    return (
        <>    
           
            <div className="menuItem">
                    <h1 className="montitre">{recipes.titre}</h1>
                        <Link className='cards__item__link' to={{ pathname: "/details", search: `${recipes.id}` }}>
                            <figure>
                                <img
                                className='img'
                                src={recipes.photo}
                                />
                            </figure>
                        </Link>
                    <li className="info">
                        <form className="modif">
                            <h4 className='text2'>{recipes.titre}</h4>
                            <h4 className='text2'>{recipes.description}</h4>
                            <h4 className='text2'>Nombre de personne(s) : {recipes.personnes}</h4>
                            <h4 className='text2'>Temps de préparation : {recipes.tempsPreparation}mn</h4>
                        </form>
                        <br/><br/>
                        <div>
                            <div  className="mod">

                                <Link to={"/modificationRecette/" + recipes.id} >
                                <button className="favorite styled">Modifier</button>
                                </Link>
                            </div>
                                              
                            <DeleteRecipes id={recipes.id} onDelete={handleDelete}/>
                            
                        </div>
                    </li>

            </div>
            

        </>
    )
}

export default ListRecipes;
