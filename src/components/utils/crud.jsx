import axios from "axios";

const API = "http://localhost:9000/api"

export const addRecipes = (data, setInputs) => {
    axios.post(API + '/recipes', data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    const {titre ,description, niveau, personnes, tempsPreparation, ingredients, etapes, photo} = data
        let newInputs = {
            titre,
            description,
            niveau,
            personnes,
            tempsPreparation,
            ingredients,
            etapes,
            photo
        }

        setInputs(newInputs);

    }
export const editRecipe = (id, data) => {
    axios.put(API + `/recipe/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export const getRecipeData = (id, setData, edit = false) => {
    axios.get(API + `/recipe/${id}`)
        .then(res => {
            setData(res.data)
        })

}