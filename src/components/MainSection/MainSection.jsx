import React from 'react';
import PropTypes from 'prop-types';

const MainSection = ({ title, description, imgSrc, alt, className, buttonText }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imgSrc} alt={alt} className={className} />
      <button>{buttonText}</button>
    </section>
  );
};

MainSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,  
  buttonText: PropTypes.string.isRequired,
};

export default MainSection;
