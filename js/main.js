//Informe CCG

let datosfilAll = [];
let lesiones = [];

document.addEventListener('DOMContentLoaded', () => {
  mostrarBtn();
  chequearEntry();
})
const botonera = document.querySelector("#botones");
const contenedorLesiones = document.querySelector("#lesiones_cards");

let nroLesiones = 0;

function mostrarBtn() {
  botonera.innerHTML = (`<div class="btn btn-secondary" onclick="agregarLesion()">Agregar lesión</div> <div id = "can-btn" class="btn btn-primary" onclick="iniciar()">Coronarias normales</div>`);
}


function agregarLesion() {
  const divLesion = document.createElement("div");
  nroLesiones += 1;
  for (i = nroLesiones; i <= nroLesiones; i++) {
    divLesion.classList.add(`card${i}`);
    divLesion.innerHTML = (`<div class="card h-100" id="lesion${i}">
  <div class="card-body">
    <p class="card-title p__md--strong center" id="lesiontitle${i}">Lesión Nº ${i} <a id = "borrar${i}" class = "btn__cerrar" onclick = borrarLesion(${i}) > ❌ </a></p> 
    <div class="input-group mb-3">
      <label class="input-group-text">Vaso</label>
      <select class="form-select" id="lesion${i}_vaso">
        <option selected value="0">Elegir...</option>
        <option value="TCI">TCI</option>
        <option value="DA">DA</option>
        <option value="Cx">Cx</option>
        <option value="Ramus">Ramus</option>
        <option value="CD">CD</option>
      </select>
    </div>

    <div class="input-group mb-3">
      <select class="form-select" id="lesion${i}_segmento">
        <option selected value="0">Elegir...</option>
        <option value="ostial">Ostial</option>
        <option value="proximal">Proximal</option>
        <option value="medio">Medio</option>
        <option value="distal">Distal</option>
      </select>
      <label class="input-group-text">Segmento</label>
    </div>

    <div class="input-group mb-3">
      <label class="input-group-text">% de obstrucción</label>
      <input type="number" class="form-control"
        id="lesion${i}_severidad">
    </div>

    <div class="input-group">
      <select class="form-select" id="lesion${i}_calcio"
        >
        <option value="ninguno" selected>Ninguna</option>
        <option value="moderado">Moderada</option>
        <option value="severo">Severa</option>
      </select>
      <label class="input-group-text">Calcio</label>
    </div>


    <div class="input-group">
      <select class="form-select" id="lesion${i}_bifurc"
        >
        <option value="no es bifurcación">No es bifurcación</option>
        <option value="1.1.1">1.1.1</option>
        <option value="1.1.0">1.1.0</option>
        <option value="1.0.1">1.0.1</option>
      </select>
      <label class="input-group-text">Medina</label>
    </div>
  </div>
  <div class="card-footer">
  </div>
</div>
<div class="col-12 center p-3" id="botonesL${i}">
</div>
`)
  }
  contenedorLesiones.appendChild(divLesion);
  cambiarBtn();
}

function borrarLesion(e) {
  let posicion = e;
  const toErase = document.querySelector(`.card${posicion}`);
  toErase.remove();
  posicion += 1;
  for (i = posicion; i <= nroLesiones; i++) {
    document.querySelector(`.card${i}`).className = `card${i-1}`;
    document.querySelector(`#lesion${i}`).id = `lesion${i-1}`;
    document.querySelector(`#lesiontitle${i}`).innerHTML = `Lesión Nº ${i-1} <a id = "borrar${i-1}" class = "btn__cerrar" onclick = borrarLesion(${i-1}) > ❌ </a>`;
    document.querySelector(`#lesiontitle${i}`).id = `lesiontitle${i-1}`;
    document.querySelector(`#lesion${i}_vaso`).id = `lesion${i-1}_vaso`;
    document.querySelector(`#lesion${i}_segmento`).id = `lesion${i-1}_segmento`;
    document.querySelector(`#lesion${i}_severidad`).id = `lesion${i-1}_severidad`;
    document.querySelector(`#lesion${i}_calcio`).id = `lesion${i-1}_calcio`;
    document.querySelector(`#lesion${i}_bifurc`).id = `lesion${i-1}_bifurc`;
  }
  nroLesiones -= 1;
}


function cambiarBtn() {
  nroLesiones > 0 && (botonera.innerHTML = (`<div class="btn btn-secondary" onclick="agregarLesion()">Agregar lesión</div> <div class="btn btn-success" onclick="iniciar()">Ver informe preliminar</div>`));
}

function chequearEntry() {
  let datosfilAllStored = JSON.parse(localStorage.getItem("datosfillAll"));
  let lesionesStored = JSON.parse(localStorage.getItem("lesiones"));
  if (datosfilAllStored) {
    Swal.fire({
      title: '¿Desea utilizar datos de la sesión previa?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Utilizar',
      denyButtonText: `No utilizar`,
    }).then((result) => {
      if (result.isConfirmed) {
        imprimir(datosfilAllStored, lesionesStored);
        window.location.href = '/sections/ccg.html#resultados';
      } else if (result.isDenied) {
        localStorage.clear();
      }
    })
  }
}

let datosfiliatorios = {};
let acceso = {};
let aspectos_tecnicos = {};

class Lesiones {
  constructor(vaso, segmento, obstruccion, calcio, bifurcacion) {
    this.vaso = vaso;
    this.segmento = segmento;
    this.obstruccion = obstruccion;
    this.calcio = calcio;
    this.bifurcacion = bifurcacion;
    this.id = Math.floor(Math.random() * 10000);
  }

}

function iniciar() {

  let datosfiliatorios = {
    nombre: document.getElementById("name_form").value,
    nroproc: document.getElementById("nroproc_form").value,
    fecha: document.getElementById("date_form").value,
    dni: document.getElementById("dni_form").value,
    medsol: document.getElementById("medsol_form").value,
  }

  let acceso = {
    arteria: acceso_sel(),
    posicion: derizq_sel(),
    french: french_sel(),
    longitud: largo_sel(),
    conversion: document.getElementById("motivo_conv").value,
    cateteres: []
  }

  let aspectos_tecnicos = {
    heparina: document.getElementById("heparina").value,
    rayos: document.getElementById("rayos").value,
    mgy: document.getElementById("mgy").value,
    contraste: document.getElementById("contraste").value,
    operadores: [],
    compresion: compresion_sel(),
    complicaciones: document.getElementById("complicaciones").value,
  }

  function acceso_sel() {
    return (document.getElementById("acceso_rad").checked && "radial") || (
      document.getElementById("acceso_fem").checked && "femoral") || (
      document.getElementById("acceso_cub").checked && "cubital") || (
      document.getElementById("acceso_rad_dist").checked && "radial distal");
  }

  function derizq_sel() {
    return (document.getElementById("acceso_der").checked && "derecho") || (
      document.getElementById("acceso_izq").checked && "izquierdo")
  }

  function french_sel() {
    return (document.getElementById("5fr_form").checked && "5Fr") || (
      document.getElementById("6fr_form").checked && "6Fr") || (
      document.getElementById("7fr_form").checked && "7Fr")
  }

  function largo_sel() {
    return (document.getElementById("intro_corto").checked && "corto") || (
      document.getElementById("intro_largo").checked && "largo");
  }

  //Cateteres
  document.getElementsByName("cateteres").forEach((x) => acceso.cateteres.push(((x.checked || "") && x.value)))

  //Operadores
  document.getElementsByName("operadores").forEach((x) => aspectos_tecnicos.operadores.push(((x.checked || "") && x.value)))

  function compresion_sel() {
    return (document.getElementById("estandar").checked && "estandar") || (
      document.getElementById("proglide").checked && "proglide") || (
      document.getElementById("sutura").checked && "sutura")
  }

  lesiones = []; //Reseteo por si quiero volver a ejecutar la funcion
  for (i = 1; i <= nroLesiones; i++) {
    if (document.getElementById(`lesion${i}`) != undefined) {
      lesiones.push(new Lesiones(
        document.getElementById(`lesion${i}_vaso`).value,
        document.getElementById(`lesion${i}_segmento`).value,
        document.getElementById(`lesion${i}_severidad`).value,
        document.getElementById(`lesion${i}_calcio`).value,
        document.getElementById(`lesion${i}_bifurc`).value));
    }
  }

  datosfilAll = {
    ...datosfiliatorios,
    ...acceso,
    ...aspectos_tecnicos
  }

  let datosfillAllJSON = JSON.stringify(datosfilAll);
  localStorage.setItem("datosfillAll", datosfillAllJSON);
  let lesionesJSON = JSON.stringify(lesiones);
  localStorage.setItem("lesiones", lesionesJSON);
  imprimir(datosfilAll, lesiones);
}


let nombres = {
  nombre: "Nombre y apellido",
  nroproc: "Nro de procedimiento",
  fecha: "Fecha del procedimiento",
  dni: "DNI o documento",
  medsol: "Médico o centro solicitante",
  arteria: "Acceso arterial utilizado",
  posicion: "Localización del acceso",
  french: "Tamaño del introductor",
  longitud: "Largo del introductor",
  conversion: "¿Requirió conversión?",
  cateteres: "Catéteres utilizados",
  heparina: "Dosis de heparina en UI",
  rayos: "Duración de radioscopia",
  mgy: "Dosis de kerma en el aire",
  operadores: "Operadores",
  compresion: "Retiro del introductor",
  complicaciones: "Complicaciones durante el procedimiento",
  contraste: "Dosis de contraste en ml"
}
let resultados = document.querySelector("#resultados");

function imprimir(datosfilAll, lesiones) {
  resultados.innerHTML = (
    `<div><h2 class="h__md">Resultados preliminares del informe</h2>
    <table class="table table-sm table-hover table-striped">
        <thead class="t-head-light p__md--strong center">
                 <td>
                    Variable
                </td>
                <td>
                    Dato ingresado
                </td>
        </thead>
        <tbody class="p__md--strong center" id="tabla_nombres">
        </tbody>
    </table>
</div>
<div id="tablas_preanalisis">
</div>`)
  let data1 = datosfilAll
  let str0 = "";
  for (dato in data1) {
    str0 += "<tr>";
    str0 += "<td>" + nombres[dato] + "</td>";
    str0 += "<td>" + String(data1[dato]).toUpperCase() + "</td>";
    str0 += "</tr>";
  }
  document.querySelector('#tabla_nombres').innerHTML = str0;
  if (lesiones.length != 0) {
    document.querySelector("#tablas_preanalisis").innerHTML = (
      `<div><h2 class="h__md">Lesiones ingresadas</h2>
    <table class="table table-sm table-hover table-striped">
        <thead class="t-head-light p__md--strong center">
                 <td>
                    Lesión Nº
                </td>
                <td>
                    Vaso
                </td>
                <td>
                    Segmento
                </td>
                <td>
                    % de obstrucción
                </td>
                <td>
                    Calcificación
                </td>
                <td>
                    Bifurcación
                </td>
        </thead>
        <tbody class="p__md--strong center" id="tabla_lesiones">
        </tbody>
    </table>
</div>`)

    let data2 = lesiones
    let str = "";
    for (let i = 0; i < data2.length; i++) {
      str += "<tr>";
      str += "<td>" + "Lesión Nº " + [i + 1] + "</td>";
      str += "<td>" + data2[i].vaso + "</td>";
      str += "<td>" + data2[i].segmento + "</td>";
      str += "<td>" + data2[i].obstruccion + "</td>";
      str += "<td>" + data2[i].calcio + "</td>";
      str += "<td>" + data2[i].bifurcacion + "</td>";
      str += "</tr>";
    }
    document.querySelector('#tabla_lesiones').innerHTML = str;
  }

  let resultadosBtn = document.createElement("div");
  resultadosBtn.innerHTML = (`<input class="btn btn-primary mt-2" type=submit value="Finalizar y enviar"></input>
<input class="btn btn-secondary mt-2" type="reset" value="Borrar todo"></input>
`);
  resultados.appendChild(resultadosBtn);
}