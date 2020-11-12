
var contenido = document.querySelector('#contenido')
function traer() {
    fetch('https://csi-api-test.herokuapp.com/api/piezas')
        .then(res => res.json())
        .then(datos => {
            // console.log(datos)
            tabla(datos)
        })
}

function tabla(datos) {
    // console.log(datos)
    contenido.innerHTML = ''
    for(let valor of datos){
        // console.log(valor.nombre)
        contenido.innerHTML += `
        <tr class="animated">
            <td>${ valor.id }</td>
            <td>${ valor.descipcion }</td>
            <td>${ valor.num_parte }</td>
            <td>${ valor.ubicacion }</td>
            <td>${ valor.exist_actual }</td>
        </tr>  
        `
    }
}



