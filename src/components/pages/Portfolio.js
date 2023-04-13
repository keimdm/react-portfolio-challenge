import React from 'react';
import cocktail from '../../assets/cocktail-pic.jpg';
import lifelog from '../../assets/lifelog-pic.jpg';
import weather from '../../assets/weather-pic.jpg';
import music from '../../assets/music-sequencer.png';
import tableTennis from '../../assets/table-tennis-pic.jpg';
import ticTacToe from '../../assets/tic-tac-toe-pic.jpg';


function Portfolio() {

  const projects = [
    {
      id: 1,
      title: "Breezy Cocktail",
      github: "https://github.com/keimdm/recipe-search",
      deployed: "https://keimdm.github.io/recipe-search/",
      image: cocktail
    },
    {
      id: 2,
      title: "LifeLog",
      github: "https://github.com/emmaparis/Project-2",
      deployed: "https://lifelog.herokuapp.com/",
      image: lifelog
    },
    {
      id: 3,
      title: "Weather App",
      github: "https://github.com/keimdm/weather-challenge",
      deployed: "https://keimdm.github.io/weather-challenge/",
      image: weather
    },
    {
      id: 4,
      title: "Music Sequencer",
      github: "https://github.com/keimdm/music-sequencer",
      deployed: "https://keimdm.github.io/music-sequencer/",
      image: music
    },
    {
      id: 5,
      title: "Table Tennis",
      github: "https://github.com/keimdm/table-tennis",
      deployed: "https://keimdm.github.io/table-tennis/",
      image: tableTennis
    },
    {
      id: 6,
      title: "Tic-Tac-Toe",
      github: "https://github.com/keimdm/tic-tac-toe",
      deployed: "https://keimdm.github.io/tic-tac-toe/",
      image: ticTacToe
    },
  ]

  return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h3>Portfolio</h3>
        {
          projects.map((item, index) => (
            <div className="my-2 py-2 bg-light d-flex flex-column justify-content-center align-items-center" key={index}>
              <p>{item.title}</p>
              <a href={item.github}>GitHub Link</a>
              <a href={item.deployed}>Deployed Application Link</a>
              <img className="w-50" src={item.image} alt={item.title}></img>
            </div>
          ))
        }
      </div>
  );
}

export default Portfolio;