import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteRecipes from './DeleteRecipes';
import axios from 'axios';

const ListRecipes = (props) => {
    const {recipes, id} = props

    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState("");

    const handleEdit = () =>{
        const data = {
            tire: recipes.title,
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
    return (
        <>    
           
            <div className="menuItem">
                    <h1 className="montitre">{recipes.title}</h1>
                        <Link className='cards__item__link' to={{ pathname: "/details", search: `${id}` }}>
                            <figure>
                                <img
                                className='img'
                                src={recipes.photo}
                                />
                            </figure>
                        </Link>
                    <li className="info">
                        <form className="modif">
                            <h4 className='text'>{recipes.titre}</h4>
                            <h4 className='text'>{recipes.description}</h4>
                            <h4 className='text'>{recipes.personnes}</h4>
                            <h4 className='text'>{recipes.tempsPreparation}</h4>
                        </form>
                        <div>
                            <div  className="mod">

                                <Link to={"/modificationPage/" + recipes.id} >
                                <button className="favorite styled">Modifier</button>
                                </Link>
                            </div>
                                              
                            <DeleteRecipes id={recipes.id}/>
                            
                        </div>
                    </li>

            </div>
            

        </>
    )
}

export default ListRecipes;
