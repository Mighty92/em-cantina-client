import React, {useState} from 'react';

const AjoutRecette = () => {

    const [inputs, setInputs] = useState({
        titre: "",
        description: "",
        niveau: "",
        personnes: "",
        tempsPrepaation: "",
        ingredients: "",
        etapes: "",
        photo: "",
    });


    // formulaire 1 ingredient
    const [form, setForm] = useState([]);

  const prevIsValid = () => {
    if (form.length === 0) {
      return true;
    }

    const someEmpty = form.some(
      (item) => item.Ingredient === "" 
    );

    if (someEmpty) {
      form.map((item, index) => {
        const allPrev = [...form];


        if (form[index].Ingredient === "") {
          allPrev[index].errors.Ingredient = "Veuillez mettre au moins 1 ingrédient dans la liste";
        }
        setForm(allPrev);
      });
    }

    return !someEmpty;
  };

  const handleAddLink = (e) => {
    e.preventDefault();
    const inputState = {
        Ingredient: "",

      errors: {
        Ingredient: null,
      },
    };

    if (prevIsValid()) {
      setForm((prev) => [...prev, inputState]);
    }
  };

  const onChange = (index, event) => {
    event.preventDefault();
    event.persist();

    setForm((prev) => {
      return prev.map((item, i) => {
        if (i !== index) {
          return item;
        }

        return {
          ...item,
          [event.target.name]: event.target.value,

          errors: {
            ...item.errors,
            [event.target.name]:
              event.target.value.length > 0
                ? null
                : [event.target.name] + " Is required",
          },
        };
      });
    });
  };

  const handleRemoveField = (e, index) => {
    e.preventDefault();

    setForm((prev) => prev.filter((item) => item !== prev[index]));
  };

  // formulaire 2 etape
  const [form2, setForm2] = useState([]);

  const prevIsValid2 = () => {
    if (form2.length === 0) {
      return true;
    }

    const someEmpty = form2.some(
      (item) => item.Etape === "" 
    );

    if (someEmpty) {
      form2.map((item2, index) => {
        const allPrev = [...form2];


        if (form2[index].Etape === "") {
          allPrev[index].errors.Etape = "Veuillez mettre au moins 1 Etape dans la liste";
        }
        setForm2(allPrev);
      });
    }

    return !someEmpty;
  };

  const handleAddLink2 = (e) => {
    e.preventDefault();
    const inputState = {
        Etape: "",

      errors: {
        Etape: null,
      },
    };

    if (prevIsValid2()) {
      setForm2((prev) => [...prev, inputState]);
    }
  };

  const onChange2 = (index, event) => {
    event.preventDefault();
    event.persist();

    setForm2((prev) => {
      return prev.map((item2, i) => {
        if (i !== index) {
          return item2;
        }

        return {
          ...item2,
          [event.target.name]: event.target.value,

          errors: {
            ...item2.errors,
            [event.target.name]:
              event.target.value.length > 0
                ? null
                : [event.target.name] + " Is required",
          },
        };
      });
    });
  };

  const handleRemoveField2 = (e, index) => {
    e.preventDefault();

    setForm2((prev) => prev.filter((item2) => item2 !== prev[index]));
  };
    return (
        <div className="wrapper">
            <div className="form-wrapper">
            <h1>Formulaire de recette</h1>

            <form>
                <div className="titre">
                <label htmlFor="titre">Titre : </label>
                <input
                    className=""
                    placeholder="titre"
                    type="text"
                    name="titre"
                    required
                />
                </div>
                <br/>
                <div className="description">
                <label htmlFor="titre">Description : </label>
                <input
                    className=""
                    placeholder="description"
                    type="text"
                    name="description"
                    required
                />
                </div>
                <br/>

                <div className="nbrPers">
                <label htmlFor="nbrPers">Nombre de personne(s) : </label>
                <input
                    className=""
                    placeholder="nombre de personne(s)"
                    type="text"
                    name="nbrPers"
                    required
                />
                </div>
                <br/>

                <div className="tdp">
                <label htmlFor="tdp">Temps de préparation : </label>
                <input
                    className=""
                    placeholder="temps de préparation"
                    type="number"
                    name="tdp"
                    required
                />
                </div>
                <br/>

                <div className="niveau">
                <label htmlFor="niveau">Niveau : </label>
                    <select id="niveau" name="niveau">
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
                {form.map((item, index) => (
                <div className="row mt-3" key={`item-${index}`}>
                    <div className="col">
                        <input
                            type="text"
                            className={
                            item.errors.Ingredient
                            ? "form-control  is-invalid"
                            : "form-control"
                            }
                            name="Ingredient"
                            placeholder="Ingredient"
                            value={item.Ingredient}
                            onChange={(e) => onChange(index, e)}
                        />
                        {item.errors.Ingredient && (
                            <div className="invalid-feedback">{item.errors.Ingredient}</div>
                        )}
                    </div>
                    <button
                    className="btn btn-warning"
                    onClick={(e) => handleRemoveField(e, index)}
                    >
                    X
                    </button>
                </div>
                ))}

                <button className="btn btn-primary mt-2" onClick={handleAddLink}>
                Ajouter un ingrédient
                </button>
                <br/><br/>

                {/* formulaire 2 Etape */}

                {form2.map((item2, index) => (
                    <div className="row mt-3" key={`item-${index}`}>
                        <div className="col">
                            <textarea
                            type="text"
                            className={
                            item2.errors.Etape
                                ? "form-control  is-invalid"
                                : "form-control"
                            }
                            name="Etape"
                            placeholder="Etape"
                            value={item2.Etape}
                            onChange={(e) => onChange2(index, e)}
                            />
                            {item2.errors.Etape && (
                                <div className="invalid-feedback">{item2.errors.Etape}</div>
                            )}
                        </div>

                        <button
                            className="btn btn-warning"
                            onClick={(e) => handleRemoveField2(e, index)}
                        >
                        X
                        </button>
                    </div>
                    ))}

                    <button className="btn btn-primary mt-2" onClick={handleAddLink2}>
                    Ajouter une étape
                    </button>
                    <br/><br/>


                    <div className="Validité">
                        <button type="submit">Valider mon formulaire</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AjoutRecette;