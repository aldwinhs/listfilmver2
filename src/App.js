import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Overlay from "./components/overlay";
import { useState, useEffect } from "react";
import Main from "./components/main";

function App() {
  const API_KEY = "api_key=1cf50e6248dc270629e802686245c2c8";
  const BASE_URL = "https://api.themoviedb.org/3";
  const API_URL =
    BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  const searchURL = BASE_URL + "/search/movie?" + API_KEY;
  const main = document.getElementById("main");
  const form = document.getElementById("form");
  const search = document.getElementById("search");

  const [movieList, setMovieList] = useState([]);
  const [currTitleMovie, setCurrTitleMovie] = useState();
  const [currOverviewMovie, setCurrOverviewMovie] = useState();
  const [isOverlayActive, setIsOverlayActive] = useState(false);
  const [wishList, setWishList] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setMovieList(data.results);
      });
  }, []);

  const getCurrMovieHandler = (movie) => {
    setCurrTitleMovie(movie.title);
    setCurrOverviewMovie(movie.overview);
    setIsOverlayActive(true);
    console.log(movie)
  };

  const getWishListHandler = (movie) => {
    setWishList([...wishList, movie])
  }

  const closeNavHandler = () => {
    setIsOverlayActive(false);
  };
  return (
    <div className="App">
      {isOverlayActive ? <Overlay
        closeNav={closeNavHandler}
        title={currTitleMovie}
        overview={currOverviewMovie}
      /> : null}
      <Navbar wl={wishList}/>
      <kontener className="main">
        {movieList.map((movie) => (
          <Main
            className="main"
            movie={movie}
            getCurrMovie={getCurrMovieHandler}
            getWishList={getWishListHandler}
          />
        ))}
      </kontener>
    </div>
  );
}

export default App;
