import React from 'react';
import axios from 'axios';

const DeleteRecipes = ({id, onDelete}) => {

    const handleDelete = () =>{
        axios.delete('http://localhost:9000/api/recipe/' + id);
    };

    return (
        <div>
            <button className="favorite styled" onClick={() =>{
                if (window.confirm('Voulez-vous supprimer cet article?')){
                    handleDelete();
                    onDelete();
                }
            }}>
                Supprimer</button>
        </div>
    );
};

export default DeleteRecipes;