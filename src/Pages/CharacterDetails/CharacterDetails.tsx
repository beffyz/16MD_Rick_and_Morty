import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getCharacter, Character } from '../../Data/RicknMortyData';
import './characterDetails.scss';

const CharacterDetails = () => {
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const character = getCharacter(Number(id));
    if (character) {
      setCurrentCharacter(character);
    } else {
      navigate('/characters');
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="current-character">
            <img src={currentCharacter?.image} alt="portrait" />
          </div>
        </div>
        <div className="col-md-6">
          <h2>{currentCharacter?.name}</h2>
          <p>
            Species:
            {' '}
            {currentCharacter?.species}
          </p>
          <p>
            Gender:
            {' '}
            {currentCharacter?.gender}
          </p>
          {currentCharacter?.type !== '' ? `Type: ${currentCharacter?.type}` : ''}
          <p>
            Origin:
            {' '}
            {currentCharacter?.origin.name}
          </p>
          <p>
            Live in:
            {' '}
            {currentCharacter?.location.name}
          </p>
          <p>
            Character created on:
            {' '}
            {currentCharacter?.created}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails;
