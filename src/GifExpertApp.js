import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = () => {

  // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
  // El const categories al final no me sirve porque asi react no se enteraria
  // De los posibles cambios que se vayan a dar, solo sirve si va a estar fijo siempre
  // Entonces es que usamos Hooks

  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr />

      <ol>
        {
          categories.map( category => (
            <GifGrid
              key={ category }
              category={ category }
            />
          ))
            // La key sirva para que react sepa cual es el elemento que esta
            // iterando, y si ese key cambia, se va a basar en base a key
            // si usaramos el indice seria muy volatil, por eso usamos category
            // Lo que no hay que tener duplicados en este caso
        }
      </ol>
    </>
  )
}

export default GifExpertApp;