import React from 'react';
import PropTypes from 'prop-types';
import './recipeCard.css';
import { useHistory } from 'react-router-dom';

export default function RecipeMealCard(props) {
  const { recipe: { strMealThumb, strMeal, idMeal }, index } = props;
  const { push } = useHistory();

  const redirectToPageDetails = () => {
    push(`foods/${idMeal}`);
  };

  return (
    <button onClick={ redirectToPageDetails } type="button">
      <div
        className="card"
        data-testid={ `${index}-recipe-card` }

      >
        <img
          data-testid={ `${index}-card-img` }
          src={ strMealThumb }
          alt={ `Foto da receita ${strMeal}` }
        />
        <h3
          data-testid={ `${index}-card-name` }
        >
          {strMeal}

        </h3>
      </div>
    </button>
  );
}

RecipeMealCard.propTypes = {
  recipe: PropTypes.objectOf(PropTypes.any).isRequired,
  index: PropTypes.number.isRequired,
};