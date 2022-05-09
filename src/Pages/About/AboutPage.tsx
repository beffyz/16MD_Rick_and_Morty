import { useNavigate } from 'react-router-dom';
import './aboutPage.scss';
import { useEffect } from 'react';
import picture from '../../assets/images/about.png';

const AboutPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Rick&Morty | About';
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 center-md">
          <h1>Rick and Morty</h1>
          <p>
            Rick and Morty is an American adult animated science fiction sitcom created by Justin
            Roiland and Dan Harmon for Cartoon Networks nighttime programming block Adult Swim.
            The series follows the misadventures of cynical mad scientist Rick Sanchez and his
            good-hearted, but fretful grandson Morty Smith, who split their time between domestic
            life and interdimensional adventures. Roiland voices the eponymous characters, with
            Chris Parnell, Spencer Grammer and Sarah Chalke voicing the rest of Rick and Mortys family.
            The series originated from an animated short parody film of Back to the Future, created by
            Roiland for Channel 101, a short-film festival co-founded by Harmon. Since its debut, the series
            has received critical acclaim for its originality, creativity and humor. The fifth season premiered
            on June 20, 2021, and consisted of ten episodes. A sixth season was confirmed as part of a long-term
            deal in May 2018 that ordered 70 new episodes over an unspecified number of seasons.
          </p>
          <img src={picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
