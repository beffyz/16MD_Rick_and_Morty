import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCharacters, Character } from '../../Data/RicknMortyData';
import './charactersPage.scss';

const CharactersPage = () => {
  const [inputValue, setInputValue] = useState('');
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const characters = getCharacters();
    setVisibleCharacters(characters);
  }, []);

  useEffect(() => {
    document.title = 'Rick&Morty | Characters';
  }, []);

  return (
    <div className="container">
      <h1 className="characters-page__heading">Get to know Rick&Morty Characters</h1>
      <div className="characters-page__search">
        <div className="characters-page__search--box">
          <input
            onChange={(e) => setInputValue(e.target.value)}
            className="characters-page__search--input"
            type="text"
            placeholder="Search character..."
          />
          <button
            className="characters-page__search--btn"
            onClick={() => setVisibleCharacters(getCharacters().filter(
              (character) => (character.name.toLowerCase().includes(inputValue.toLowerCase()) && character),
            ))}
          >
            Search
          </button>
        </div>
      </div>
      <div className="characters">
        {visibleCharacters && visibleCharacters.map(({
          id, name, image, gender, species,
        }) => (
          <div key={Math.random()} className="character__card">
            <div className="character__info">
              <div className="character-card__avatar">
                <img src={image} alt="avatar" />
              </div>
              <div className="character__details">
                <p>{name}</p>
                <button
                  className="character__details--btn"
                  onClick={() => navigate(`/characters/${id}`)}
                >
                  Character Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharactersPage;
