import React from 'react';
import { Link } from 'react-router-dom';

const Cocktail_xx = ({id, name, image, info, glass}) => {
  return (
    <article className="cocktail">
    <div className="img-container">
      <img
        src={image}
        alt={name}
      />
    </div>
    <div className="cocktail-footer">
      <h3>{name}</h3>
      <h4>{glass}</h4>
      <p>{info}</p>
      <Link className="btn btn-primary btn-details" to={`/cocktail/${id}`}
      >details</Link
      >
    </div>
  </article>
  );
};

export default Cocktail_xx;
