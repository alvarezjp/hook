import React from 'react';
import { getPost } from '../Service/post';
import { useState,useEffect } from 'react';

function DataRead() {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchData = async () => {
        const data = await getPost(); // Llamamos al servicio
        setProductos(data);
        setLoading(false);
      };
  
      fetchData();
    }, []);

  return (
    <div>
      <h2>Esto viene del dataReader</h2>
     {console.log(productos)
     }
      
    </div>
  );
}

export default DataRead;
