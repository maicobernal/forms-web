 //Cateterismo derecho

 const nombresvariables_num = ["peso", "altura", "fc", "hb", "tas", "tad", "aps", "apd", "wedge", "vds", "vdd", "ad", "ai", "sato2", "satap", "satvcs", "satvci", "satada", "satadm", "satadb", "satvd"];
 const nombresvariables_text = ["nombre", "nroproc", "fecha", "dni", "medsol", "acceso_cef", "acceso_fem", "acceso_yug", "acceso_der", "acceso_izq", "heparina", "rayos", "mgy", "tiemposubida", "op1", "op2", "op3", "op4", "complicaciones"];
 const objeto = {}; //Acá van todas las variables ingresadas con su ID y valor
 const objeto_num = {};
 const objeto_text = {}; 
 const datosingresados_num = [];
 const datosingresados_text = [];

 function procesar() {
     const container = document.querySelector("#formulariocd")
     const inputsnum = container.querySelectorAll('input[type="number"]')
     const inputsother = container.querySelectorAll('input:not([type="number"])')
     for (i = 0; i <= inputsnum.length; i++) {
         if (inputsnum[i] != undefined) {
             datosingresados_num.push(parseInt(inputsnum[i].value))
         } /* else {
             alert("Ingrese todos los datos")
         } */
     }
     for (i = 0; i <= inputsother.length; i++) {
        if (inputsother[i] != undefined) {
            datosingresados_text.push((inputsother[i].value))
        } /* else {
            alert("Ingrese todos los datos")
        } */
    }
     nombresvariables_num.forEach((element, index) => {
         objeto_num[element] = datosingresados_num[index];
     });
     nombresvariables_text.forEach((element, index) => {
        objeto_text[element] = datosingresados_text[index];
    });

    calcular(objeto_num)
 }
 

 function calcular (objeto_num){
 objeto_num["supcorp"] = Math.sqrt(objeto_num.peso * objeto_num.altura / 3600).toFixed(2)
 objeto_num["contarto2"] = (1.34 * objeto_num.hb * objeto_num.sato2 / 100);
 objeto_num["contveno2"] = (1.34 * objeto_num.hb * objeto_num.satap / 100);
 objeto_num["difartven"] = objeto_num.contarto2 - objeto_num.contveno2;
 objeto_num["vo2"] = objeto_num.supcorp * 125;
 objeto_num["gc"] = (objeto_num.vo2 / objeto_num.difartven / 10).toFixed(2);
 objeto_num["ic"] = (objeto_num.gc / objeto_num.supcorp * 1).toFixed(2);
 objeto_num["pr_tam_int"] = (objeto_num.tas - objeto_num.tad / 3);
 objeto_num["tam"] = ((objeto_num.tad) + objeto_num.pr_tam_int).toFixed(0);
 objeto_num["pr_apm_int"] = ((objeto_num.aps - objeto_num.apd) / 3);
 objeto_num["apm"] = ((objeto_num.apd) + objeto_num.pr_apm_int).toFixed(0);
 objeto_num["rvsdin"] = ((objeto_num.tam - objeto_num.ad) * 79.92 / objeto_num.gc).toFixed(0);
 objeto_num["rvswood"] = (objeto_num.rvsdin / 80).toFixed(2);
 objeto_num["rvpdin"] = ((objeto_num.apm - objeto_num.wedge) * 79.92 / objeto_num.gc).toFixed(0);
 objeto_num["rvpwood"] = (objeto_num.rvpdin / 80).toFixed(2);
  imprimir()
 }

 //const unidadespreview = ["", "", "Kg", "Cms", "", "g/dL", "%", "%", "lts/min", "lts/min/m2sc", "mmHg", "mmHg", "mmHg", "mmHg", "mmHg", "mmHg", "mmHg", "mmHg", "dyn*s/cm5", "UW", "dyn*s/cm5", "UW"];

 
 
 function acceso_sel() {
    return (document.getElementById("acceso_yug").checked && "yugular") || (
      document.getElementById("acceso_fem").checked && "femoral") || (
      document.getElementById("acceso_cef").checked && "cefálico") ;
  }
  function derizq_sel() {
    return (document.getElementById("acceso_der").checked && "derecho") || (
      document.getElementById("acceso_izq").checked && "izquierdo")
  }

 const nombrespreview = {
    nombre: "Nombre y apellido",
    nroproc: "Nro de procedimiento",
    fecha: "Fecha del procedimiento",
    dni: "DNI o documento",
    medsol: "Médico o centro solicitante",
    accesosummary: "Acceso utilizado",
    heparina: "Dosis de heparina en UI",
    rayos: "Duración de radioscopia",
    mgy: "Dosis de kerma en el aire",
    tiemposubida: "Tiempo de subida del catéter",
    opsummary: "Operadores",
    compresion: "Retiro del introductor",
    complicaciones: "Complicaciones durante el procedimiento",
    peso: "Peso", 
    altura: "Altura", 
    fc: "Frecuencia cardíaca", 
    hb: "Hemoglobina en g/dL", 
    tas: "TA sistólica", 
    tad: "TA diastólica", 
    tam: "TA media", 
    aps: "Presión arteria pulmonar sistólica", 
    apd: "Presión arteria pulmonar diastólica",
    apm: "Presión media arteria pulmonar",
    wedge: "Presión wedge/enclavamiento",
    vds: "Presión sistólica ventrículo derecho",
    vdd: "Presión diastólica ventrículo derecho",
    ad: "Presión media aúricula derecha",
    ai: "Presión de aurícula izquierda",
    sato2: "Saturación arterial de oxígeno",
    satap: "Saturación de arteria pulmonar",
    satvcs: "Saturación VCS",
    satvci: "Saturación VCI",
    satada: "Saturación AD alta",
    satadm: "Saturación AD media",
    satadb: "Saturación AD baja",
    satvd: "Saturación VD",
    supcorp: "Área de superficie corporal",
    vo2: "VO2",
    gc: "Gasto cardíaco",
    ic: "Índice cardíaco",
    rvswood: "Resistencia vascular sistémica - Wood",
    rvsdin: "Resistencia vascular sistémica - Dinas",
    rvpwood: "Resistencia vascular pulmonar - Wood",
    rvpdin: "Resistencia vascular pulmonar - Dinas"    
  }

  let resultados = document.querySelector("#resultadoscd");
  
  let operadores = []


  function imprimir() {
    objeto_text["accesosummary"] = acceso_sel() + " " + derizq_sel();
    document.getElementsByName("operadores").forEach((x) => operadores.push(((x.checked || "") && x.value)));
    objeto_text["opsummary"] = String(operadores).toUpperCase().replace(/[^a-zA-Z]/g," ");

    const todelete_text = ["acceso_cef", "acceso_fem", "acceso_yug", "acceso_der", "acceso_izq","op1", "op2", "op3", "op4"]
    todelete_text.forEach((item)=> delete objeto_text[item]);
    const todelete_num = ["contarto2","contveno2","difartven","vo2","pr_tam_int","pr_apm_int"];
    todelete_num.forEach((item)=> delete objeto_num[item]);

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
          <tbody class="p__md--strong center" id="tablacd">
          </tbody>
      </table>
  </div>
  <div id="tablas_preanalisis">
  </div>`)
    let data1 = objeto_text
    let str0 = "";
    for (dato in data1) {
      str0 += "<tr>";
      str0 += "<td>" + nombrespreview[dato] + "</td>";
      str0 += "<td>" + String(data1[dato]).toUpperCase() + "</td>";
      str0 += "</tr>";
  }

  let data2 = objeto_num
  for (dato in data2) {
    str0 += "<tr>";
    str0 += "<td>" + nombrespreview[dato] + "</td>";
    str0 += "<td>" + data2[dato] + "</td>";
    str0 += "</tr>";
}
document.querySelector('#tablacd').innerHTML = str0;

  let resultadosBtn = document.createElement("div");
    resultadosBtn.innerHTML = (`<button class="btn btn-primary mt-2" onclick= mandar()>Finalizar y enviar</button>
  <button class="btn btn-secondary mt-2" type="reset">Borrar todo</button>
  `);
    resultados.appendChild(resultadosBtn);
}

function mandar(){
    const objeto_tosend = {...objeto_num, ...objeto_text};
    const action = 'https://script.google.com/macros/s/AKfycbyEbgJMFaGt-7neJ_jNp-6j-yFrm-lR7-XExQv7YeY4rJaALqRWbV6PN7WpNXa-FrgKkg/exec'
    fetch(action, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(objeto_tosend)
      })
      .then(() => {
        Swal.fire('Datos cargados exitosamente');
      })
      .catch(() => Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error: sus datos no fueron cargados',
        footer: '<a href="www.google.com.ar">¿Qué está pasando?</a>'
      }))
 }
 