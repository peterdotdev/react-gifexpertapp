import React from 'react';
import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const { data:images, loading } = useFetchGifs( category );

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> { category } </h3>

      { loading && <p className="animate__animated animate__flash">Loading</p> }
      
      <div className="card-grid">
        {
          images.map( img => (
            <GifGridItem 
              key= { img.id } // La key no se manda como propiedad pero es necesaria para senialar la ubicacion del componente
              { ...img } // Pasa todas las propiedades una por una
            />
          ))
        }
      </div>
    </>
  )
}


export default GifGrid;