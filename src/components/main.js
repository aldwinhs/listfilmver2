const Main = (props) => {
  const IMG_URL = "https://image.tmdb.org/t/p/w500";
  function getColor(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

  return (
    <div className="movie">
      <img src={IMG_URL + props.movie.poster_path} alt={props.movie.title} />

      <div className="movie-info">
        <h3>{props.movie.title}</h3>
        <span className={getColor(props.movie.vote_average)}>
          {props.movie.vote_average}
        </span>
      </div>

      <button
        className="view"
        onClick={() => {props.getCurrMovie(props.movie)}}
      >
        View
      </button>
        <button
            onClick={() => {props.getWishList(props.movie)}}
        >
            +
        </button>
    </div>
  );
};

export default Main;
