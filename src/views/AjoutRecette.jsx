import React, {useState} from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { addRecipes } from '../components/utils/crud';

const AjoutRecette = () => {

    // formulaire 1 ingredient
    const [ingredient, setIngredient] = useState([]);
    const [etape, setEtape] = useState([]);
    const [inputs, setInputs] = useState({
        titre: "",
        description: "",
        niveau: "",
        personnes: "",
        tempsPreparation: "",
        ingredients: [],
        etapes: [],
        photo: ""
    });

  const handleAddLink = () => {
    const ingredient2 = [...ingredient]
    ingredient2.push(["","",""])
    setIngredient(ingredient2) 
  };

  const handleAddLink2 = () => {
    const etape2 = [...etape]
    etape2.push([""])
    setEtape(etape2) 
  };

  const handleRemoveField = (index) => {
    const ingredient2 = [...ingredient]
    ingredient2.splice(index, 1)
    setIngredient(ingredient2)
  };


  const handleRemoveField2 = (index) => {
    const etape2 = [...etape]
    etape2.splice(index, 1)
    setEtape(etape2)
  };


const handleSubmit = (e) => {
    const data = {...inputs};
    e.preventDefault()
    console.log({...data})
    if (
        !data.titre ||
        !data.description ||
        !data.niveau ||
        !data.personnes ||
        !data.tempsPreparation ||
        data.ingredients.length == 0 ||
        data.etapes.length == 0 ||
        !data.photo
    ) {
        alert("Veuillez remplir chacun des champs");
        return
        
    }
        
    console.log({...data})
    addRecipes({...data})
    alert('La recette a été ajouté avec succès !')
    window.location.href = "/"


}


  const handleInputsChange = (e) => {
      const inputs2 = {...inputs}
      inputs2[e.target.name] = e.target.value
      setInputs(inputs2)
}

    const handleIngredientsChange = (index, value, i) =>{
        const ingredient2 = [...ingredient]
        ingredient2[index] [i] = value
        setIngredient(ingredient2)
    }

    const handleEtapesChange = (index, value, i) =>{
        const etape2 = [...etape]
        etape2[index] [i] = value
        setEtape(etape2)
    }


    return (
        <>
            <Logo/>
            <Navigation/>
            <hr className="menu"/>
            <div className="wrapper">
                <div className="form-wrapper">
                <h1><b>Ajoutez une recette</b></h1>

                <form onSubmit={handleSubmit}>
                    <div className="titre">
                    <label htmlFor="titre"><h2 className="ajt">Titre :</h2> </label>
                    <input
                        className=""
                        placeholder="Titre"
                        type="text"
                        name="titre"
                        onChange={handleInputsChange}
                        value={inputs.titre}
                        required
                    />
                    </div>
                    <br/>
                    <div className="description">
                    <label htmlFor="titre"><h2 className="ajt">Description :</h2> </label>
                    <input
                        className=""
                        placeholder="Description"
                        type="text"
                        name="description"
                        onChange={handleInputsChange}
                        value={inputs.description}
                        required
                    />
                    </div>
                    <br/>

                    <div className="personnes">
                    <label htmlFor="nbrPers"><h2 className="ajt">Nombre de personne(s) : </h2></label>
                    <input
                        className=""
                        placeholder="Nombre de personne(s)"
                        type="number"
                        name="personnes"
                        onChange={handleInputsChange}
                        value={inputs.personnes}

                        required
                    />
                    </div>
                    <br/>

                    <div className="tempsPreparation">
                    <label htmlFor="tdp"><h2 className="ajt">Temps de préparation : </h2></label>
                    <input
                        className=""
                        placeholder="Temps de préparation"
                        type="number"
                        name="tempsPreparation"
                        onChange={handleInputsChange}
                        value={inputs.tempsPreparation}
                        required
                    />
                    </div>
                    <br/>

                    <div className="niveau">
                    <label htmlFor="niveau"> <h2 className="ajt">Niveau : </h2></label>
                        <select id="niveau" name="niveau" 
                        onChange={handleInputsChange}
                        value={inputs.niveau}>
                            <optgroup label="difficulté">
                                <option value="aucun" selected>Choix</option>
                                <option value="padawan">Padawan</option>
                                <option value="jedi">Jedi</option>
                                <option value="maître">Maître</option>
                            </optgroup>
                        </select>
                    </div>
                    <br/>

                    {/* formulaire 1 ingredient */}
                    {ingredient.map((ingredients, index) => (
                    <div className="row mt-3" key={`item-${index}`}>
                        <div className="col">
                            <input
                                type="text"
                                placeholder="Quantité"
                                name="ingredients"
                                onChange={(e)=>{handleIngredientsChange(index, e.target.value, 0)}}
                                value={ingredients[0]}
                            />
                            
                            <input
                                type="text"
                                name="ingredients"
                                placeholder="Unité"
                                onChange={(e)=>{handleIngredientsChange(index, e.target.value, 1)}}
                                value={ingredients[1]}
                            />
                            

                            <input
                                type="text"
                                name="ingredients"
                                placeholder="Ingredient"
                                onChange={(e)=>{handleIngredientsChange(index, e.target.value, 2)}}
                                value={ingredients[2]}
                            />
                            </div>
                            <button
                            className="suppr"
                            onClick={() => handleRemoveField(index)}
                            >
                            X
                            </button>
                        </div>
                        ))}

                        <button className="add" onClick={handleAddLink}>
                        Ajouter un ingrédient
                        </button>
                        <br/><br/>

                    {/* formulaire 2 Etape */}

                    {etape.map((etapes, index) => (
                        <div className="row mt-3" key={`item-${index}`}>
                            <div className="col">
                                <textarea
                                    type="text"   
                                    name="etapes"
                                    placeholder="Etape"
                                    onChange={(e)=>{handleEtapesChange(index, e.target.value, 0)}}
                                    value={etapes[0]}
                                />
                               
                            </div>

                            <button
                                className="suppr"
                                onClick={(e) => handleRemoveField2(e, index)}
                            >
                            X
                            </button>
                        </div>
                         ))} 

                        <button className="add" onClick={handleAddLink2}>
                        Ajouter une étape
                        </button>
                        <br/><br/>

                            <div className="photo">
                        <label htmlFor="photo"> <h2 className="ajt">Photo : </h2></label>
                        <input
                            className=""
                            type="url"
                            placeholder="https://example.com"
                            name="photo"
                            onChange={handleInputsChange}
                            value={inputs.photo}
                            required
                        />
                        </div>
                        <br/>


                        <div className="Validité">
                            <button type="submit">Valider mon formulaire</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AjoutRecette;