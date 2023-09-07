import './styles/card.css';

const Card = ({ words }) => {

    if (!words) {
        return;
    }

    return (
        <div className="card-wrapper">
			<div className="card-body">
				<div className="card-front">
					{words[0].dutch.map(word =>
                        <p key={word}>{word}</p>
                    )}
				</div>
				<div className="card-back">
                    {words[0].english.map(word =>
                        <p key={word}>{word}</p>
                    )}
				</div>
			</div>
		</div>
    );
}

export default Card;
