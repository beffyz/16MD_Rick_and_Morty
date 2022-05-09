import { useNavigate } from 'react-router-dom';
import './homePage.scss';
import { useEffect } from 'react';

const HomePage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Rick&Morty | Home';
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h1>Rick and Morty Series information</h1>
          <p>
            Genre:
            Animated sitcom,
            Science fiction,
            Black comedy,
            Adventure
          </p>
          <p>
            Created by: Justin Roiland and Dan Harmon
          </p>
          <p>
            Voices of:
            Justin Roiland,
            Chris Parnell,
            Spencer Grammer,
            Sarah Chalke,
            Kari Wahlgren
          </p>
          <p>
            Composer - Ryan Elder
          </p>
          <p>Country of origin - United States</p>
          <p>Original language - English</p>
          <p>No. of seasons: 5</p>
          <p>No. of episodes: 51</p>
          <button className="home__button" onClick={() => navigate('/characters')}>Characters</button>
          <button className="home__button" onClick={() => navigate('/episodes')}>Episodes</button>
          <button className="home__button" onClick={() => navigate('/about')}>About</button>
        </div>
        <div className="col-md-5">
          <img
            src="https://decider.com/wp-content/uploads/2021/03/rick-and-morty-s5-5.jpg?quality=80&strip=all&w=1200"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
