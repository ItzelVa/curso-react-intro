import './EmptyResults.css'
import React from 'react';

export function EmptyResults ({searchValue}) {

  return (
      <p className='EmptyResults'>No se encontraron resultados para {searchValue}</p>
    );
}