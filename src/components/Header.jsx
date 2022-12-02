import { Link } from 'react-router-dom'

function Header() {

  return (
    <header>
        <div className="headerContainer">
            <div className="logoDiv">LOGO</div>
            <Link to='/'>home</Link>
        </div>
    </header>
  );
}
export default Header;
