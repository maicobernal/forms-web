# forms-web
Bievenido!
Mi nombre es Maico Bernal.
Vengo de la medicina, pero siempre fui amante de la informática. Ahora con más tiempo decidí darme el gusto, y aprender a programar y darle un enfoque desde los desafíos que veo día a día en la práctica asistencial médica. Mi proyecto a largo plazo es dedicarme a Data Science, pero no sin antes aprender cuestiones básicas de FrontEnd. 
Antes que nada, esta es una página web con fines de aprendizaje para la cursada de Javascript en CoderHouse.
La idea del proyecto es generar un sitio web de formularios web dinámicos para la creación de informes médicos y bases de datos - todo en un mismo proceso - amigable para el usuario y accesible desde cualquier navegador. 
En Argentina el data entry suele ser manual y estar a cargo de los mismos profesionales (o con mucha suerte, de algún becario). Sumado a los sueldos bajos (los más bajos de latinoamerica) y la gran demanda de trabajo asistencial, eso hace muy difícil y engorroso la carga de datos. Es sabido la falta de registros e información a nivel nacional...y sus causas...podríamos hablar horas de eso. 
El objetivo de este proyecto generar un producto que sea accesible para cualquier centro de hemodinamia (laboratorio de cateterismo cardíaco) del país que quiera utilizarlo. 
La idea es mejorarlo con los conocimientos a por venir en React y Desarrollo Backend.
Si bien pensé que sería más dificil, la integración con Google Cloud Services / Google App Script ya funcione: todo formulario ingresado queda registrado y de forma accesible en Google Drive.
El desafío por delante es muy grande todavía, la motivación y las ganas de aprender también!
Ante cualquier duda mi email de contacto es mibernalmd@gmail.com
Muchas gracias por visitar este repositorio! Cualquier comentario o sugerencia es bienvenido. 
Saludos,


NOVEDADES:
18-5: Incorporación de WebApp de Google App Script (GAS) para volcar el forms a Google Spreadsheets. Uso de fetch. 
*Link del spreadsheets de prueba: https://tinyurl.com/formswebjs
*Link de la carpeta donde se alojan 
*Source del original code: https://github.com/levinunnink/html-form-to-google-sheet
26-5: Incorporacion de la API de newsfeed del U.S. Department of Health and Human Services para la section Aside. Actualizacion y puesta a punto del Spreadsheets. Creación de informes a través de los datos volcados del formulario con Google Docs vía GAS. 
*Link del script de GAS: https://codeshare.io/AdJPNe
*Link a la carpeta de informes automatizados: https://tinyurl.com/sd97sp5z
*Link del spreadsheets donde se vuelca la información del formulario web: https://tinyurl.com/formswebjs
2-6: Incorporacíon de mismas funcionalidades a la sección cateterismo derecho. En este caso los datos para el POST hacia la WebApp son los procesados en JS - no se envían los datos crudos del form. Con esto se ahorra redundancia de operaciones y cálculos en el servidor. 
5-6: Correciones varias. Se implementó la carga automática del form con los datos de localStorage para la sección cateterismo derecho. ENTREGA DEL TRABAJO FINAL.