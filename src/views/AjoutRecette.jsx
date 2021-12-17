import React, {useState} from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import { addRecipes } from '../components/utils/crud';

const AjoutRecette = () => {

    // formulaire 1 ingredient
    const [ingredients, setIngredients] = useState([]);
    const [etapes, setEtapes] = useState([]);
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

  const handleAddLink = (e) => {
    e.preventDefault()
    const ingredients2 = [...ingredients]
    ingredients2.push(["","",""])
    setIngredients(ingredients2) 
  };

  const handleAddLink2 = (e) => {
    e.preventDefault()
    const etapes2 = [...etapes]
    etapes2.push("")
    setEtapes(etapes2) 
  };

  const handleRemoveField = (index) => {
    const ingredients2 = [...ingredients]
    ingredients2.splice(index, 1)
    setIngredients(ingredients2)
  };


  const handleRemoveField2 = (index) => {
    const etapes2 = [...etapes]
    etapes2.splice(index, 1)
    setEtapes(etapes2)
  };


const handleSubmit = (e) => {
    e.preventDefault()
    const data = {...inputs} 
    data.ingredients = ingredients
    data.etapes = etapes
    data.personnes = parseInt(data.personnes)
    data.tempsPreparation = parseInt(data.tempsPreparation)
    if (
        !inputs.titre ||
        !inputs.description ||
        !inputs.niveau ||
        !inputs.personnes ||
        !inputs.tempsPreparation ||
        data.ingredients.length == 0 ||
        data.etapes.length == 0 
    ) {
        alert("Veuillez remplir chacun des champs");
        return
        
    }
    console.log(data)
    addRecipes(data)
    alert('La recette a été ajouté avec succès !')


}


  const handleInputsChange = (e) => {
      const inputs2 = {...inputs}
      inputs2[e.target.name] = e.target.value
      setInputs(inputs2)
}

    const handleIngredientsChange = (index, value, i) =>{
        const ingredients2 = [...ingredients]
        ingredients2[index] [i] = value
        setIngredients(ingredients2)
    }

    const handleEtapesChange = (index, value) =>{
        const etapes2 = [...etapes]
        etapes2[index]= value
        setEtapes(etapes2)
    }


    return (
        <>
            <Logo/>
            <Navigation/>
            <hr className="menu"/>
            <div className="wrapper">
                <div className="form-wrapper">
                <h1><b>Ajoutez une recette</b></h1>

                <form>
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
                    {ingredients.map((ingredient, index) => (
                    <div className="row mt-3" key={`item-${index}`}>
                        <div className="col">
                            <input
                                type="text"
                                placeholder="Quantité"
                                name="ingredients"
                                onChange={(e)=>{handleIngredientsChange(index, e.target.value, 0)}}
                                value={ingredient[0]}
                            />
                            
                            <input
                                type="text"
                                name="ingredients"
                                placeholder="Unité"
                                onChange={(e)=>{handleIngredientsChange(index, e.target.value, 1)}}
                                value={ingredient[1]}
                            />
                            

                            <input
                                type="text"
                                name="ingredients"
                                placeholder="Ingredient"
                                onChange={(e)=>{handleIngredientsChange(index, e.target.value, 2)}}
                                value={ingredient[2]}
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

                    {etapes.map((etape, index) => (
                        <div className="row mt-3" key={`item-${index}`}>
                            <div className="col">
                                <textarea
                                    type="text"   
                                    name="etapes"
                                    placeholder="Etape"
                                    onChange={(e)=>{handleEtapesChange(index, e.target.value)}}
                                    value={etape[0]}
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

                        <input className="add" type="button" onClick={handleAddLink2}
                        value="Ajouter une étape"/>
                        <br/><br/>


                        <div className="Validité">
                            <button onClick={handleSubmit}>Valider mon formulaire</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AjoutRecette;