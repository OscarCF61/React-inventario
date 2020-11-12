import '../css/TablasStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faKey,faFileSignature,faHashtag,faFileAlt,faClipboardCheck} from '@fortawesome/free-solid-svg-icons'


function Tablas() {
  return (
<center>
<div className="Content" >
  <table className="Tabla">
    <thead>
      <tr>
        <th><i><FontAwesomeIcon icon = {faKey}/></i>&#160;ID PRODUCTO</th>
        <th><i><FontAwesomeIcon icon = {faFileSignature}/></i>&#160;NOMBRE PRODUCTO</th>
        <th><i><FontAwesomeIcon icon = {faHashtag}/></i>&#160;NUMERO DE PARTE</th>
        <th><i><FontAwesomeIcon icon = {faFileAlt}/></i>&#160;UBICACION</th>
        <th><i><FontAwesomeIcon icon = {faClipboardCheck}/></i>&#160;EXISTENCIA</th>
      </tr>
    </thead>

    <tbody id="Contenido">            
    </tbody>
    
</table>
</div>
</center>
  );
}

export default Tablas;
