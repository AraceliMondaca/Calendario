function ResetearFormulario() {
    document.getElementById("Prog").style.backgroundColor = "white";
    document.getElementById("Dia").style.backgroundColor = "white";
    document.getElementById("Hora").style.backgroundColor = "white";
   
}


function IngresarPrograma() {
    ResetearFormulario(); // Primero el formulario  se pone en blanco para empezar el barrido de cero

      // Aqui ingresamos los programas
 prue= document.getElementById("Prog").value;
 Programa= " ";
 Programa = document.getElementById("Prog").value;
 Dia = parseInt(document.getElementById("Dia").value);
 HoraP=document.getElementById("Hora").value ;
 Programas= " "+ Programa+ " " + HoraP + " hs" ;

var Guardar;
// Segun el número del día es donde va a ir guardado
switch (Dia) {
    case 01:
        Guardar = document.getElementById("1");
        break;
    case 02:
        Guardar = document.getElementById("2");
        break;
    case 03:
        Guardar = document.getElementById("3");
        break;
    case 04:
        Guardar = document.getElementById("4");
        break;
    case 05:
        Guardar = document.getElementById("5");
        break;
    case 06:
         Guardar = document.getElementById("6");
        break;  
    case 07:
         Guardar = document.getElementById("7");
        break;   
        case 08:
        Guardar = document.getElementById("8");
        break;
    case 09:
        Guardar = document.getElementById("9");
        break;
    case 10:
        Guardar = document.getElementById("10");
        break;
    case 11:
        Guardar = document.getElementById("11");
        break;
    case 12:
        Guardar = document.getElementById("12");
        break;
    case 13:
         Guardar = document.getElementById("13");
        break;  
    case 14:
         Guardar = document.getElementById("14");
        break;      
    case 15:
        Guardar = document.getElementById("15");
            break;
    case 16:
        Guardar = document.getElementById("16");
            break;
    case 17:
        Guardar = document.getElementById("17");
            break;
    case 18:
        Guardar = document.getElementById("18");
            break;
    case 19:
        Guardar = document.getElementById("19");
            break;
    case 20:
        Guardar = document.getElementById("20");
            break;  
    case 21:
        Guardar = document.getElementById("21");
            break;   
    case 22:
         Guardar = document.getElementById("22");
            break;
    case 23:
        Guardar = document.getElementById("23");
            break;
    case 24:
        Guardar = document.getElementById("24");
            break;
    case 25:
        Guardar = document.getElementById("25");
            break;
    case 26:
        Guardar = document.getElementById("26");
            break;
    case 27:
        Guardar = document.getElementById("27");
            break;  
    case 28:
         Guardar = document.getElementById("28");
            break;    
    case 29:
        Guardar = document.getElementById("29");
            break;      
    case 30:
        Guardar = document.getElementById("30");
            break;      
    case 31:
        Guardar = document.getElementById("31");
            break;        
}


Dia = parseInt(document.getElementById("Dia").value);
Programa = document.getElementById("prog").value;
Guardar.innerHTML += Programas + "<hr />";

    ResetearFormulario();
     // LIMPIAMOS
     document.getElementById("prueba").value="";
     document.getElementById("Dia").value = "";
     document.getElementById("Hora").value = "";

}


//Arrays con datos precargados:
meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
lasemana=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"]
diassemana=["lunes","martes","miércoles","jueves","viernes","sábado","domingo"];

window.onload = function() {
//fecha actual
hoy=new Date(); //objeto fecha actual
diasemhoy=hoy.getDay(); //dia semana actual
diahoy=hoy.getDate(); //dia mes actual
meshoy=hoy.getMonth(); //mes actual
annohoy=hoy.getFullYear(); //año actual
// Elementos del DOM: en cabecera de calendario 
tit=document.getElementById("titulos"); //cabecera del calendario
ant=document.getElementById("anterior"); //mes anterior
pos=document.getElementById("posterior"); //mes posterior
// Elementos del DOM en primera fila
f0=document.getElementById("fila0");

mescal = meshoy; //mes principal
annocal = annohoy //año principal
//iniciar calendario:
cabecera() 
primeralinea()
escribirdias()
}
//FUNCIONES de creación del calendario:
//cabecera del calendario
function cabecera() {
         tit.innerHTML=meses[mescal]+" de "+annocal;
         mesant=mescal-1; //mes anterior
         mespos=mescal+1; //mes posterior
         if (mesant<0) {mesant=11;}
         if (mespos>11) {mespos=0;}
         ant.innerHTML=meses[mesant]
         pos.innerHTML=meses[mespos]
         } 
//primera línea de tabla: días de la semana.
function primeralinea() {
         for (i=0;i<7;i++) {
             celda0=f0.getElementsByTagName("th")[i];
             celda0.innerHTML=diassemana[i]
             }
         }
//rellenar celdas con los días
function escribirdias() {
         //Buscar dia de la semana del dia 1 del mes:
         primeromes=new Date(annocal,mescal,"1") //buscar primer día del mes
         prsem=primeromes.getDay() //buscar día de la semana del día 1
         prsem--; //adaptar al calendario español (empezar por lunes)
         if (prsem==-1) {prsem=6;}
         //buscar fecha para primera celda:
         diaprmes=primeromes.getDate() 
         prcelda=diaprmes-prsem; //restar días que sobran de la semana
         empezar=primeromes.setDate(prcelda) //empezar= tiempo UNIX 1ª celda
         diames=new Date() //convertir en fecha
         diames.setTime(empezar); //diames=fecha primera celda.
         //Recorrer las celdas para escribir el día:
         for (i=1;i<7;i++) { //localizar fila
             fila=document.getElementById("fila"+i);
             for (j=0;j<7;j++) {
                 midia=diames.getDate() 
                 mimes=diames.getMonth()
                 mianno=diames.getFullYear()
                 celda=fila.getElementsByTagName("td")[j];
                 celda.innerHTML=midia;
                 //Recuperar estado inicial al cambiar de mes:
                 celda.style.backgroundColor="#ffffff";
                 celda.style.color="#492736";
                 //domingos en rojo
                 if (j==6) { 
                    celda.style.color="#ffffff";
                    }
                 //dias restantes del mes en gris
                 if (mimes!=mescal) { 
                    celda.style.color="#a0babc";
                    }
                 //destacar la fecha actual
                 if (mimes==meshoy && midia==diahoy && mianno==annohoy ) { 
                    celda.style.backgroundColor="#rgb(95, 95, 255)";
                    celda.innerHTML="<cite title='Fecha Actual'>"+midia+"</cite>";
                    }
                 //pasar al siguiente día
                 midia=midia+1;
                 diames.setDate(midia);
                 }
             }
         }
//Ver mes anterior
function mesantes() {
         nuevomes=new Date() //nuevo objeto de fecha
         primeromes--; //Restamos un día al 1 del mes visualizado
         nuevomes.setTime(primeromes) //cambiamos fecha al mes anterior 
         mescal=nuevomes.getMonth() //cambiamos las variables que usarán las funciones
         annocal=nuevomes.getFullYear()
         cabecera() //llamada a funcion de cambio de cabecera
         escribirdias() //llamada a funcion de cambio de tabla.
         }
//ver mes posterior
function mesdespues() {
         nuevomes=new Date() //nuevo obejto fecha
         tiempounix=primeromes.getTime() //tiempo de primero mes visible
         tiempounix=tiempounix+(45*24*60*60*1000) //le añadimos 45 días 
         nuevomes.setTime(tiempounix) //fecha con mes posterior.
         mescal=nuevomes.getMonth() //cambiamos variables 
         annocal=nuevomes.getFullYear()
         cabecera() //escribir la cabecera 
         escribirdias() //escribir la tabla
         }
//volver al mes actual
function actualizar() {
         mescal=hoy.getMonth(); //cambiar a mes actual
         annocal=hoy.getFullYear(); //cambiar a año actual 
         cabecera() //escribir la cabecera
         escribirdias() //escribir la tabla
         }
//ir al mes buscado
function mifecha() {
         //Recoger dato del año en el formulario
         mianno=document.buscar.buscaanno.value; 
         //recoger dato del mes en el formulario
         listameses=document.buscar.buscames;
         opciones=listameses.options;
         num=listameses.selectedIndex
         mimes=opciones[num].value;
         //Comprobar si el año está bien escrito
         if (isNaN(mianno) || mianno<1) { 
            //año mal escrito: mensaje de error
            alert("El año no es válido:\n debe ser un número mayor que 0")
            }
         else { //año bien escrito: ver mes en calendario:
              mife=new Date(); //nueva fecha
              mife.setMonth(mimes); //añadir mes y año a nueva fecha
              mife.setFullYear(mianno);
              mescal=mife.getMonth(); //cambiar a mes y año indicados
              annocal=mife.getFullYear();
              cabecera() //escribir cabecera
              escribirdias() //escribir tabla
              }
         }