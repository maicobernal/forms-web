//Informe CCG

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


  const lesion1 = [];
  lesion1.push(new Lesiones(
    document.getElementById("lesion1_vaso").value,
    document.getElementById("lesion1_severidad").value,
    document.getElementById("lesion1_segmento").value,
    document.getElementById("lesion1_calcio").value,
    document.getElementById("lesion1_bifurc").value));

  const lesion2 = [];
  lesion1.push(new Lesiones(
    document.getElementById("lesion2_vaso").value,
    document.getElementById("lesion2_severidad").value,
    document.getElementById("lesion2_segmento").value,
    document.getElementById("lesion2_calcio").value,
    document.getElementById("lesion2_bifurc").value));

  const lesion3 = [];
  lesion1.push(new Lesiones(
    document.getElementById("lesion3_vaso").value,
    document.getElementById("lesion3_severidad").value,
    document.getElementById("lesion3_segmento").value,
    document.getElementById("lesion3_calcio").value,
    document.getElementById("lesion3_bifurc").value));

  const lesion4 = [];
  lesion1.push(new Lesiones(
    document.getElementById("lesion4_vaso").value,
    document.getElementById("lesion4_severidad").value,
    document.getElementById("lesion4_segmento").value,
    document.getElementById("lesion4_calcio").value,
    document.getElementById("lesion4_bifurc").value));


  console.dir(datosfiliatorios);
  console.dir(acceso);
  console.dir(aspectos_tecnicos);
  console.dir(lesion1);
}