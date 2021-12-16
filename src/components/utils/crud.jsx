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