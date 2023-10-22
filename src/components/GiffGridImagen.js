import React from 'react'

export const GiffGridImagen = ({id, title, images}) => {

    return (
        <div className='card animate__animated animate__fadeInDown' >
        <img  src={images} alt={title} />
        <p>{title}</p>
    </div>    
  )
  
}
