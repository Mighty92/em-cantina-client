import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        // Navlink permet de creer des liens
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="/ajout-recette" activeClassName="nav-active">
                Formulaire de recette
            </NavLink>

        </div>
    );
};

export default Navigation;