import React from 'react';
import PropTypes from 'prop-types';

const ComponentAvanzado = ({ list,title}) => {
  

  return (
    <div>
      <h1>{title}</h1>
     <ul>
        {list.map((item)=>(
            <ul key={item.id}>{item.name}</ul>
        ))}
     </ul>
    </div>
  );
};

// Suggested code may be subject to a license. Learn more: ~LicenseLog:1019324094.
ComponentAvanzado.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({ // esto indica un objeto con ciertas caracteristicas
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default ComponentAvanzado;
