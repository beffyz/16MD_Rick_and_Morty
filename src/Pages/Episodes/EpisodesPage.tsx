import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getEpisodes, Episode } from '../../Data/RicknMortyEpisodesData';
import './episodesPage.scss';

const EpisodesPage = () => {
  const [visibleEpisodes, setVisibleEpisodes] = useState<Episode[]>();
  const navigate = useNavigate();

  useEffect(() => {
    const episodes = getEpisodes();
    setVisibleEpisodes(episodes);
  }, []);

  return (
    <div className="container">
      <h1 className="center-md">Rick and Morty Episodes</h1>
      {visibleEpisodes && visibleEpisodes.map(({
        name, episode, airDate, image,
      }) => (
        <div key={Math.random()} className="row">
          <div className="col-md-12">
            <div className="episode__card">
              <div className="episode__info">
                <div className="episode__preview">
                  <img className="episode__preview-img" src={image} alt="" />
                  <div className="episode__preview--details">
                    <span style={{ color: 'orange' }}>{episode}</span>
                    <p>
                      Episode:
                      {' '}
                      {name}
                    </p>
                    <p>
                      Air Date:
                      {' '}
                      {airDate}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EpisodesPage;
