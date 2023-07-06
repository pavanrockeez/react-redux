import React, { useEffect, useState } from 'react'
import { getCategories } from '../actions/categoriesService';
import Categories from './categories';

const Chucks = () => {

  const [chucks, setChucks] = useState([]);

  useEffect(() => {
    getCategories().then((response) => {
      setChucks(response.data);
    })
  }, [])
  
  return (
    <div className="chucks">
      <Categories categories={chucks} />
    </div>
  )
}

export default Chucks
