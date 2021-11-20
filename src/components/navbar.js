import WishList from "./wishlist";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <a href="#home" id="navbar_logo">
          Movie
        </a>
        <ul className="navbar_menu">
          <li className="navbar_item">
            <a href="#home" className="navbar_links" id="home-page">
              Home
            </a>
          </li>
          <li className="navbar_item">
            <a href="#genre" className="navbar_links" id="genre-page">
              Genre
            </a>
          </li>
          <li className="navbar_item">
            <a href="#about" className="navbar_links" id="about-page">
              About
            </a>
          </li>
        </ul>
        <form id="form">
          <input
            type="text"
            placeholder="Movie Name"
            id="search"
            className="search"
          />
        </form>
        <WishList wl={props.wl}/>
      </div>
    </nav>
  );
};

export default Navbar;