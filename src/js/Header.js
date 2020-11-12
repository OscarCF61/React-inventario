import '../css/Header.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSyncAlt} from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/img/logo-menu.png" className="App-logo" alt="logo" />
        <h1>I&ensp; N&ensp; V&ensp; E&ensp; N&ensp; T&ensp; A&ensp; R&ensp; I&ensp; O</h1>
        <hr></hr>
        <div className="Bus">
        <input class="form-control col-md-3 light-table-filter" data-table="tabla" type="text" placeholder="Buscar..."></input>
        <button onclick="traer()"><i><FontAwesomeIcon icon = {faSyncAlt}/></i>&#160;Actualizar</button>
        </div>
      </header>
    </div>
  );
}

export default Header;
