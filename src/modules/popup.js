import React, { useEffect, useState } from 'react'
import { getChuckNorriesJokes } from '../actions/categoriesService';

const Popup = ({ category, onClose }) => {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        getChuckNorriesJokes(category).then((res) => {
            setContent(res.data.value);
            setLoading(false);
        }).catch(error => console.log(error.message));
    }, [category]);

    const handleNext = async () => {
        setLoading(true);
        getChuckNorriesJokes(category).then((res) => {
            setContent(res.data.value);
            setLoading(false);
        }).catch(error => console.log(error.message));

    };

    return (
        <div className='row'>
            <div className='col-lg-2'></div>
            <div className='col-lg-8  popup-container'>
                <div className="popup">
                    <div className='header'>
                        <p>{category.charAt(0).toUpperCase() + category.slice(1)}
                            <span className='close_icon'><i className="fas fa-times" onClick={onClose}></i></span>
                        </p>
                    </div>
                    <div className="content">
                        {loading ? (
                            <div class="spinner-border text-light loader_class" role="status">
                                <p class="sr-only">Loading...</p>
                            </div>

                        ) : (
                            <>
                                <p>" {content} "</p>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-lg btn-block"
                                    onClick={handleNext}
                                >
                                    <span>Next joke</span>
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <div className='col-lg-2'></div>
        </div>
    );
};


export default Popup
