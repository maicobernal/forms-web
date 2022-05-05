//Informe CCG


function agregarLesion() {
  document.getElementById("card1").innerHTML = (`<div class="card h-100 aside__card" id="lesion1">
  <div class="card-body">
    <a href="#" class="card-title h5">Lesion número 1</a>
    <div class="input-group mb-3">
      <label class="input-group-text">Vaso</label>
      <select class="form-select" id="lesion1_vaso">
        <option selected value="0">Elegir...</option>
        <option value="TCI">TCI</option>
        <option value="DA">DA</option>
        <option value="Cx">Cx</option>
        <option value="Ramus">Ramus</option>
        <option value="CD">CD</option>
      </select>
    </div>

    <div class="input-group mb-3">
      <select class="form-select" id="lesion1_segmento">
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
        id="lesion1_severidad">
    </div>

    <div class="input-group">
      <select class="form-select" id="lesion1_calcio"
        >
        <option value="ninguno" selected>Ninguna</option>
        <option value="moderado">Moderada</option>
        <option value="severo">Severa</option>
      </select>
      <label class="input-group-text">Calcio</label>
    </div>


    <div class="input-group">
      <select class="form-select" id="lesion1_bifurc"
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
<div class="col-12 center p-3" id="botonesL1">
<div class="btn btn-primary" onclick="iniciar()">Finalizar</div>
<div class="btn btn-secondary" onclick="agregarLesion2()">Agregar lesión</div>
</div>
`)
  document.getElementById("botonesL0").setAttribute('class', `d-none`);
  document.getElementById("botonesL0").setAttribute('class', `d-none`);

}

function agregarLesion2() {
  document.getElementById("card2").innerHTML = (`<div class="card h-100 aside__card" id="lesion2">
<div class="card-body">
  <a href="#" class="card-title h5">Lesion número 2</a>
  <div class="input-group mb-3">
    <label class="input-group-text">Vaso</label>
    <select class="form-select" id="lesion2_vaso">
      <option selected value="0">Elegir...</option>
      <option value="TCI">TCI</option>
      <option value="DA">DA</option>
      <option value="Cx">Cx</option>
      <option value="Ramus">Ramus</option>
      <option value="CD">CD</option>
    </select>
  </div>

  <div class="input-group mb-3">
    <select class="form-select" id="lesion2_segmento">
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
      id="lesion2_severidad">
  </div>

  <div class="input-group">
    <select class="form-select" id="lesion2_calcio"
      >
      <option value="ninguno" selected>Ninguna</option>
      <option value="moderado">Moderada</option>
      <option value="severo">Severa</option>
    </select>
    <label class="input-group-text">Calcio</label>
  </div>


  <div class="input-group">
    <select class="form-select" id="lesion2_bifurc"
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
<div class="col-12 center p-3" id="botonesL2">
<div class="btn btn-primary" onclick="iniciar()">Finalizar</div>
<div class="btn btn-secondary" onclick="agregarLesion3()">Agregar lesión</div>
</div>`)
  document.getElementById("botonesL1").setAttribute('class', `d-none`);
}

function agregarLesion3() {
  document.getElementById("card3").innerHTML = (`<div class="card h-100 aside__card" id="lesion3">
<div class="card-body">
  <a href="#" class="card-title h5">Lesion número 3</a>
  <div class="input-group mb-3">
    <label class="input-group-text">Vaso</label>
    <select class="form-select" id="lesion3_vaso">
      <option selected value="0">Elegir...</option>
      <option value="TCI">TCI</option>
      <option value="DA">DA</option>
      <option value="Cx">Cx</option>
      <option value="Ramus">Ramus</option>
      <option value="CD">CD</option>
    </select>
  </div>

  <div class="input-group mb-3">
    <select class="form-select" id="lesion3_segmento">
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
      id="lesion3_severidad">
  </div>

  <div class="input-group">
    <select class="form-select" id="lesion3_calcio"
      >
      <option value="ninguno" selected>Ninguna</option>
      <option value="moderado">Moderada</option>
      <option value="severo">Severa</option>
    </select>
    <label class="input-group-text">Calcio</label>
  </div>


  <div class="input-group">
    <select class="form-select" id="lesion3_bifurc"
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
<div class="col-12 center p-3" id="botonesL3">
<div class="btn btn-primary" onclick="iniciar()">Finalizar</div>
<div class="btn btn-secondary" onclick="agregarLesion4()">Agregar lesión</div>
</div>`)
  document.getElementById("botonesL2").setAttribute('class', `d-none`);
}

function agregarLesion4() {
  document.getElementById("card4").innerHTML = (`<div class="card h-100 aside__card" id="lesion4">
<div class="card-body">
  <a href="#" class="card-title h5">Lesion número 4</a>
  <div class="input-group mb-3">
    <label class="input-group-text">Vaso</label>
    <select class="form-select" id="lesion4_vaso">
      <option selected value="0">Elegir...</option>
      <option value="TCI">TCI</option>
      <option value="DA">DA</option>
      <option value="Cx">Cx</option>
      <option value="Ramus">Ramus</option>
      <option value="CD">CD</option>
    </select>
  </div>

  <div class="input-group mb-3">
    <select class="form-select" id="lesion4_segmento">
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
      id="lesion4_severidad">
  </div>

  <div class="input-group">
    <select class="form-select" id="lesion4_calcio"
      >
      <option value="ninguno" selected>Ninguna</option>
      <option value="moderado">Moderada</option>
      <option value="severo">Severa</option>
    </select>
    <label class="input-group-text">Calcio</label>
  </div>


  <div class="input-group">
    <select class="form-select" id="lesion4_bifurc"
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
<div class="col-12 center p-3" id="botonesL4">
<div class="btn btn-primary" onclick="iniciar()">Finalizar</div>
</div>`)
  document.getElementById("botonesL3").setAttribute('class', `d-none`);
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
    conversion: conversion_sel(),
    cateteres: cateter_sel(),
  }

  let aspectos_tecnicos = {
    heparina: document.getElementById("heparina").value,
    rayos: document.getElementById("rayos").value,
    mgy: document.getElementById("mgy").value,
    contraste: document.getElementById("contraste").value,
    operadores: operadores_sel(),
    compresion: compresion_sel(),
    complicaciones: document.getElementById("complicaciones").value,
  }

  function acceso_sel() {
    let accesos = [document.getElementById("acceso_rad").value,
      document.getElementById("acceso_fem").value,
      document.getElementById("acceso_cub").value,
      document.getElementById("acceso_rad_dist").value
    ];
    let accesos_clean = [];
    for (n1 of accesos) {
      if (n1 != undefined) {
        accesos_clean.push(n1)
      }
      return accesos_clean;
    }
  }

  function derizq_sel() {
    let lado = [
      document.getElementById("acceso_der").value,
      document.getElementById("acceso_izq").value
    ];
    let lado_clean = [];
    for (n1 of lado) {
      if (n1 != undefined) {
        lado_clean.push(n1)
      }
      return lado_clean;
    }
  }

  function french_sel() {
    let french = [
      document.getElementById("5fr_form").value,
      document.getElementById("6fr_form").value,
      document.getElementById("7fr_form").value
    ];
    let french_clean = [];
    for (n1 of french) {
      if (n1 != undefined) {
        french_clean.push(n1)
      }
      return french_clean;
    }
  }

  function largo_sel() {
    let intros = [document.getElementById("intro_corto").value, document.getElementById("intro_largo").value];
    let intros_clean = [];
    for (n1 of intros) {
      if (n1 != undefined) {
        intros_clean.push(n1)
      }
      return intros_clean;
    }
  }

  function conversion_sel() {
    let conv = [document.getElementById("si_conversion").value, document.getElementById("no_conversion").value];
    let why = document.getElementById("motivo_conv").value;
    let conv_clean = [];
    for (n1 of conv) {
      if (n1 != undefined) {
        conv_clean.push(n1)
      }
      if (conv_clean == "si_conversion") {
        return why;
      } else {
        return 'no hubo conversion'
      }
    }
  }

  function cateter_sel() {
    let tiger = document.getElementById("tiger").value;
    let judkins = document.getElementById("jljr_dx").value;
    let ebu = document.getElementById("ebu").value;
    let jrguia = document.getElementById("jr").value;
    let cateteres = [tiger, judkins, ebu, jrguia];
    let cateteres_clean = [];
    for (n1 of cateteres) {
      if (n1 != undefined) {
        cateteres_clean.push(n1)
      }
      return cateteres_clean;
    }
  }

  function operadores_sel() {
    let operadores = [document.getElementById("bernal").value, document.getElementById("ramos").value, document.getElementById("laino").value, document.getElementById("payaslian").value]
    let operadores_clean = [];
    for (n1 of operadores) {
      if (n1 != undefined) {
        operadores_clean.push(n1)
      }
      return operadores_clean;
    }
  }

  function compresion_sel() {
    let compresion = [
      document.getElementById("estandar").value,
      document.getElementById("proglide").value,
      document.getElementById("sutura").value
    ];
    let compresion_clean = [];
    for (n1 of compresion) {
      if (n1 != undefined) {
        compresion_clean.push(n1)
      }
      return compresion_clean;
    }
  }

  class Lesiones {
    constructor(vaso, segmento, obstruccion, calcio, bifurcacion) {
      this.vaso = vaso;
      this.segmento = segmento;
      this.obstruccion = obstruccion;
      this.calcio = calcio;
      this.bifurcacion = bifurcacion;
    }
  }

  const lesiones = [];
  if (document.getElementById("lesion1") != undefined){
    lesiones.push(new Lesiones(
    document.getElementById("lesion1_vaso").value,
    document.getElementById("lesion1_severidad").value,
    document.getElementById("lesion1_segmento").value,
    document.getElementById("lesion1_calcio").value,
    document.getElementById("lesion1_bifurc").value));}
    else {alert("Sus coronarias son normales, felicidades")}

    if (document.getElementById("lesion2") != undefined){
    lesiones.push(new Lesiones(
    document.getElementById("lesion2_vaso").value,
    document.getElementById("lesion2_severidad").value,
    document.getElementById("lesion2_segmento").value,
    document.getElementById("lesion2_calcio").value,
    document.getElementById("lesion2_bifurc").value));}

    if (document.getElementById("lesion3") != undefined){
    lesiones.push(new Lesiones(
    document.getElementById("lesion3_vaso").value,
    document.getElementById("lesion3_severidad").value,
    document.getElementById("lesion3_segmento").value,
    document.getElementById("lesion3_calcio").value,
    document.getElementById("lesion3_bifurc").value));}

    if (document.getElementById("lesion4") != undefined){
    lesiones.push(new Lesiones(
    document.getElementById("lesion4_vaso").value,
    document.getElementById("lesion4_severidad").value,
    document.getElementById("lesion4_segmento").value,
    document.getElementById("lesion4_calcio").value,
    document.getElementById("lesion4_bifurc").value));}


  console.dir(datosfiliatorios);
  console.dir(acceso);
  console.dir(aspectos_tecnicos);
  console.dir(lesiones);

    document.getElementById("resultados").innerHTML = (`<h2 class="h__md">Resultados preliminares del informe</h2>
    <table class="table table-sm table-hover table-striped m-3 p-3">
        <thead class="t-head-light p__md--strong">
            <tr>
                <td>
                    Variable
                </td>
                <td>
                    Valor ingresado
                </td>
            </tr>
        </thead>
        <tbody class="p__md--strong">
            <tr>
                <td>
                    Nombre y apellido
                </td>
                <td id="0">
    
                </td>
            </tr>
            <tr>
                <td>
                    Número de procedimiento
                </td>
                <td id="1">
    
                </td>
            </tr>
            <tr>
                <td>
                    Fecha del procedimiento
                </td>
                <td id="2">
    
                </td>
            </tr>
            <tr>
                <td>
                    DNI
                </td>
                <td id="3">
    
                </td>
            </tr>
            <tr>
                <td>
                    Médico solicitante
                </td>
                <td id="4">
    
                </td>
            </tr>
            <tr>
                <td>
                    Acceso
                </td>
                <td id="5">
    
                </td>
            </tr>
            <tr>
                <td>
                    Catéteres utilizados
                </td>
                <td id="6">
    
                </td>
            </tr>
            <tr>
                <td>
                    Dosis de heparina
                </td>
                <td id="7">
    
                </td>
            </tr>
            <tr>
                <td>
                    Tiempo de radioscopia
                </td>
                <td id="8">
    
                </td>
            </tr>
            <tr>
                <td>
                    Dosis de mGy
                </td>
                <td id="9">
    
                </td>
            </tr>
            <tr>
                <td>
                    Cantidad de contraste
                </td>
                <td id="10">
    
                </td>
            </tr>
            <tr>
                <td>
                    Operadores
                </td>
                <td id="11">
    
                </td>
            </tr>
            <tr>
                <td>
                    Compresión
                </td>
                <td id="12">
    
                </td>
            </tr>
        </tbody>
    </table>
    
    <table class="table table-sm table-hover table-striped m-3 p-3">
        <thead class="t-head-light p__md--strong">
            <tr>
                <td>
                    Variable
                </td>
                <td>
                    Lesión #1
                </td>
                <td>
                    Lesión #2
                </td>
                <td>
                    Lesión #3
                </td>
                <td>
                    Lesión #4
                </td>
            </tr>
        </thead>
        <tbody class="p__md--strong">
            <tr>
                <td>
    Arteria            </td>
                <td id="a1"></td>
                <td id="a2"></td>
                <td id="a3"></td>
                <td id="a4"></td>
            </tr>
            <tr>
                <td>
    Segmento            </td>
    <td id="b1"></td>
    <td id="b2"></td>
    <td id="b3"></td>
    <td id="b4"></td>
            </tr>
            <tr>
                <td>
                    % obstrucción
                </td>
                <td id="c1"></td>
                <td id="c2"></td>
                <td id="c3"></td>
                <td id="c4"></td>
            </tr>
            <tr>
                <td>
                    Calcificación
                </td>
                <td id="d1"></td>
                <td id="d2"></td>
                <td id="d3"></td>
                <td id="d4"></td>
            </tr>
            <tr>
                <td>
                    Bifurcación
                </td>
                <td id="e1"></td>
                <td id="e2"></td>
                <td id="e3"></td>
                <td id="e4"></td>
            </tr>
            
        </tbody>
    </table>
<div class="col-12 center p-3" id="revision">
<div class="btn btn-primary">Finalizar y enviar</div>
<div class="btn btn-secondary">Borrar todo</div>
</div>`)
document.getElementById(0).innerHTML = datosfiliatorios.nombre;
document.getElementById(1).innerHTML = datosfiliatorios.nroproc;
document.getElementById(2).innerHTML = datosfiliatorios.fecha;
document.getElementById(3).innerHTML = datosfiliatorios.dni;
document.getElementById(4).innerHTML = datosfiliatorios.medsol;
document.getElementById(5).innerHTML = acceso.arteria + " " + acceso.posicion + " " + acceso.french;
document.getElementById(6).innerHTML = acceso.cateteres;
document.getElementById(7).innerHTML = aspectos_tecnicos.heparina;
document.getElementById(8).innerHTML = aspectos_tecnicos.rayos;
document.getElementById(9).innerHTML = aspectos_tecnicos.mgy;
document.getElementById(10).innerHTML = aspectos_tecnicos.contraste;
document.getElementById(11).innerHTML = aspectos_tecnicos.operadores;
document.getElementById(12).innerHTML = aspectos_tecnicos.compresion;
document.getElementById("a1").innerHTML = lesiones[0].vaso;
document.getElementById("b1").innerHTML = lesiones[0].segmento;
document.getElementById("c1").innerHTML = lesiones[0].obstruccion;
document.getElementById("d1").innerHTML = lesiones[0].calcio;
document.getElementById("e1").innerHTML = lesiones[0].bifurcacion;
document.getElementById("a2").innerHTML = lesiones[1].vaso;
document.getElementById("b2").innerHTML = lesiones[1].segmento;
document.getElementById("c2").innerHTML = lesiones[1].obstruccion;
document.getElementById("d2").innerHTML = lesiones[1].calcio;
document.getElementById("e2").innerHTML = lesiones[1].bifurcacion;
document.getElementById("a3").innerHTML = lesiones[2].vaso;
document.getElementById("b3").innerHTML = lesiones[2].segmento;
document.getElementById("c3").innerHTML = lesiones[2].obstruccion;
document.getElementById("d3").innerHTML = lesiones[2].calcio;
document.getElementById("e3").innerHTML = lesiones[2].bifurcacion;
document.getElementById("a4").innerHTML = lesiones[3].vaso;
document.getElementById("b4").innerHTML = lesiones[3].segmento;
document.getElementById("c4").innerHTML = lesiones[3].obstruccion;
document.getElementById("d4").innerHTML = lesiones[3].calcio;
document.getElementById("e4").innerHTML = lesiones[3].bifurcacion;

    }
