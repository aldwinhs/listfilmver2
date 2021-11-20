const Overlay = (props) => {
  // function openNav(movie) {
  //   let title = movie.title;
  //   let overview = movie.overview;
  //   document.getElementById("myNav").style.width = "100%";
  //   document.getElementById("overlay-content").innerHTML = `
  //             <h2>${title}</h2>
  //             <p>${overview}</p>
  //         `;
  // }


  return (
    <div id="myNav" className="overlay">
      <a href="javascript:void(0)" className="closebtn" onClick={props.closeNav}>
        x
      </a>

      <div className="overlay-content" id="overlay-content">
        <h2>{props.title}</h2>
        <p>{props.overview}</p>
      </div>
    </div>
  );
};

export default Overlay;
