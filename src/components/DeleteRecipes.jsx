import React from 'react';
import axios from 'axios';

const DeleteRecipes = ({id}) => {

    const handleDelete = () =>{
        axios.delete('http://localhost:9000/api/recipes/' + id);
        window.location.reload();
    };

    return (
        <div>
            <button className="favorite styled" onClick={() =>{
                if (window.confirm('Voulez-vous supprimer cet article?')){
                    handleDelete();
                }
            }}>
                Supprimer</button>
        </div>
    );
};

export default DeleteRecipes;