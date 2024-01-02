import PropTypes from 'prop-types';

function Scoreboard({score, bestScore}) {
    return (
        <div>
            <p>Scoreboard</p>
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