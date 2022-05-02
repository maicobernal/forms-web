 //Cateterismo derecho

 calculos();

 function units1() {
     let unidades = ["", "", "Kg", "Cms", "", "g/dL", "%", "%", "lts/min", "lts/min/m2sc", "mmHg", "mmHg", "mmHg", "mmHg", "mmHg", "mmHg", "mmHg", "mmHg", "dyn*s/cm5", "UW", "dyn*s/cm5","UW"];
     return unidades;
 }

 function calculos() {
     let datos = [];
     datos.push(prompt("Ingrese nombre del paciente ")); //0
     if (isNaN(datos[0]) == false || datos[0] == "") {
         alert("Nombre incorrecto");
         datos.splice(-1);
         calculos();
     } else {
         ingresarNHC(datos);
     }
 }

 function ingresarNHC(datos) {
     datos.push(Number(prompt("Ingrese número de historia clinica del paciente"))); //1
     if (datos.includes(NaN) == true || datos.includes(0) == true)  {
         alert("Nro de HC incorrecto");
         datos.splice(-1);
         ingresarNHC(datos);
     } else {
         seleccionarCalculo(datos);
     }
 }

 function seleccionarCalculo(datos) {
     console.log("1: Calcular superficie corporal");
     console.log("2: Calcular gasto cardiaco");
     console.log("3: Calcular resistencias");
     console.log("4: Ver resumen de todos los datos ingresados");
     console.log("5: Salir");
     console.log("------------------------");

     let op = prompt("Ingresar Opcion");
     switch (op) {
         case "1":
             datos.push(Number(prompt("Ingrese Peso en Kg"))); //2
             datos.push(Number(prompt("Ingrese Altura en Cms"))); //3
             if (datos.includes(NaN) == true || datos.includes(0) == true)  {
                 alert("Datos incorrectos");
                 datos.splice(-2);
                 seleccionarCalculo(datos);
             } else {
                 calcularSC(datos);
             }
             break;
         case "2":
             if (datos[4] == undefined) {
                 alert("Primero calcular superficie corporal"); //4
                 seleccionarCalculo();
             } else {
                 datos.push(Number(prompt("Ingrese Hemoglobina en g/dL"))); //5 
                 datos.push(Number(prompt("Ingrese saturación arterial de O2"))); //6
                 datos.push(Number(prompt("Ingrese saturación pulmonar de O2"))); //7
                 if (datos.includes(NaN) == true || datos.includes(0) == true)  {
                     alert("Datos incorrectos");
                     datos.splice(-3);
                     seleccionarCalculo(datos);
                 } else {
                     calcularGC(datos)
                 }
             }
             break;
         case "3":
             if (datos[5] == undefined || datos[9] == undefined) {
                 alert("Primero calcular superficie corporal y gasto cardíaco");
                 seleccionarCalculo();
             } else {
                 datos.push(Number(prompt("Ingrese presión arterial sistólica en mmHg"))); //10
                 datos.push(Number(prompt("Ingrese presión arterial diastólica en mmHg"))); //11
                 datos.push(Number(prompt("Ingrese presión arterial pulmonar sistólica en mmHg"))); //12
                 datos.push(Number(prompt("Ingrese presión arterial pulmonar diastólica en mmHg"))); //13
                 datos.push(Number(prompt("Ingrese presión Wedge en mmHg"))); //14
                 datos.push(Number(prompt("Ingrese presión media de aurícula derecha en mmHg"))); //15
                 if (datos.includes(NaN) == true || datos.includes(0) == true) {
                     alert("Datos incorrectos");
                     datos.splice(-6);
                     seleccionarCalculo(datos);
                 } else {
                     calcularRV(datos)
                 }
             }
             break;
         case "4":
             if (datos[20] == undefined) {
                 alert("Debe ingresar primero todos los datos para poder ver el resumen");
                 seleccionarCalculo(datos);
             } else {
                 escribirDatos(datos);
             }
             break;
         case "5":
             salir();
             break;
         default:
             console.log("Operacion Invalida");
             break;
     }
 }

 function calcularSC(datos) {
     if (datos[2] == isNaN || datos[3] == isNaN) {
         alert("Ingrese peso y altura correctos en kgs y cms");
     } else {
         datos.push((Math.sqrt(datos[2] * datos[3] / 3600)).toFixed(2)); //4 SC
         alert("La superficie corporal calculada es  " + datos[4]);
     }
     seleccionarCalculo(datos);
 }

 function calcularGC(datos) {
     if (datos[5] == isNaN || datos[6] == isNaN || datos[7] == isNaN) { //5 Hb - 6 Art - 7 AP
         alert("Ingrese valores de hemoglobina y saturaciones correctos");
     } else {
         let contarto2 = (1.34 * datos[5] * datos[6] / 100);
         let contveno2 = (1.34 * datos[5] * datos[7] / 100);
         let difartven = (contarto2 - contveno2);
         let vo2 = (datos[4] * 125);
         datos.push((vo2 / difartven / 10).toFixed(2)); //8 GC
         datos.push((datos[8] / datos[4] * 1).toFixed(2)); //9 IC
         alert("El gasto cardíaco calculado es " + datos[8]);
         alert("El índice cardíaco calculado es " + datos[9]);
     }
     seleccionarCalculo(datos);
 }

 function calcularRV(datos) {
     if (datos[10] == isNaN || datos[11] == isNaN || datos[12] == isNaN || datos[13] == isNaN || datos[14] == isNaN || datos[15] == isNaN) {
         alert("Ingrese sistolica y diastólica arterial y pulmonar y presión Wedge y de aurícula derecha para poder realizar los cálculos")
         seleccionarCalculo();
     } else { // 10 TAS - 11 TAD - 12 PS - 13 PD - 14 W - 15 AD
         let pr_tam_int = ((datos[10] - datos[11]) / 3);
         datos.push((datos[11] + pr_tam_int).toFixed(0)); //16 TAM
         let pr_apm_int = ((datos[12] - datos[13]) / 3);
         datos.push((datos[13] + pr_apm_int).toFixed(0)); //17 APM
         datos.push(((datos[16] - datos[15]) * 79.92 / datos[8]).toFixed(0)); //18 RVS din
         datos.push((datos[18] / 80).toFixed(2)); //19 RVS w
         datos.push(((datos[17] - datos[14]) * 79.92 / datos[8]).toFixed(0)); //20 RVP din
         datos.push((datos[20] / 80).toFixed(2)); //21 RVP W
         alert("Las resistencias vasculares en dynas son: RVS: " + datos[18] + " y RVP: " + datos[20]);
         alert("Las resistencias vasculares en woods son: RVS: " + datos[19] + " y RVP: " + datos[21]);
     }
     seleccionarCalculo(datos);
 };

 function escribirDatos(datos) {
     let units = units1();
     if (datos[20] == NaN) {
         alert("Debe completar todos los datos primero");
         seleccionarCalculo();
     } else {
         for (i = 0; i <= 21; i++) {
             document.getElementById(i).innerHTML = datos[i] + " " + units[i];
         }
     }
 };

 function salir() {
     alert("Fin de la operacion")
 };