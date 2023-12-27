import images from "../data/imageData";
import '../css/card.css'

function Card() {
    return (
        <div>
            <ul>
                {images.map(img => (
                    <li key={img.id} className="card">
                        <img src={img.src} alt={img.name} className="image"/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Card;