import React from 'react'

import PropTypes from "prop-types";

 export const GiffGridImagen = ({title, images}) => {

    return (
        <div className='card animate__animated animate__fadeInDown' >
        <img  src={images} alt={title} />
        <p>{title}</p>
    </div>    
  )
  
}
GiffGridImagen.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired
}
