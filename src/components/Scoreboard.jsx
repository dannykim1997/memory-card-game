import '../css/app.css';
import PropTypes from 'prop-types';

function Scoreboard({score, bestScore}) {
    return (
        <div className='scoreboard'>
            <p>Score: {score}</p>
            <p>Best Score: {bestScore}</p>
        </div>
    );
}

Scoreboard.propTypes = {
    score: PropTypes.number.isRequired,
    bestScore: PropTypes.number.isRequired,
};

export default Scoreboard;