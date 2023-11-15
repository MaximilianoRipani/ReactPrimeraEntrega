import CartWidget from './CartWidget/CartWidget';
import logo from './Logo/logo1.JPG';
import 'bulma/css/bulma.min.css';

const NavBar = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <img src={logo} alt="logotipo" className="navbar-item" />
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <button className="navbar-item button">Buzos</button>
          <button className="navbar-item button">Remeras</button>
          <button className="navbar-item button">Medias</button>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
