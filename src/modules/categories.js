import React, { useState } from 'react'
import './styles.scss';
import Popup from './popup';
const Categories = ({ categories }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleClosePopup = () => {
        setSelectedCategory(null);
    };
    return (
        <>
            <div className='row'>
                <div className="col-12 text-center mt-3">
                    <h1 className="animate-bounce">Chuck Norris</h1>
                </div>
                <div className="container">
                    <div className="card-container">
                        {categories.map((category, index) => (
                            <div className={selectedCategory === category ? 'selected-card-body' : 'card-body'}
                                key={index} onClick={() => handleCategoryClick(category)}>
                                <p className='category_name'>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                                <p className='jokes_tag'>Unlimited Jokes on {category}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {selectedCategory && (
                <Popup category={selectedCategory} onClose={handleClosePopup} />
            )}
        </>
    )
}

export default Categories
