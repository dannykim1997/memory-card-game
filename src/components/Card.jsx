import { useState, useEffect } from 'react';
import '../css/card.css';
import PropTypes from 'prop-types';


function Card({images, onClick}) {
    const [shuffledImages, setShuffledImages] = useState([]);

    useEffect(() => {
        setShuffledImages(shuffleArray(images));
    }, [images]);

    const handleImageClick = (id) => {
        onClick(id);
        setShuffledImages(shuffleArray(images));
    }

    return (
        <div>
            <ul>
                {shuffledImages.map(img => (
                    <li key={img.id} className="card" onClick={() => handleImageClick(img.id)}>
                        <img src={img.src} alt={img.name} className="image"/>
                        <p>{img.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

Card.propTypes = {
    images: PropTypes.array.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Card;