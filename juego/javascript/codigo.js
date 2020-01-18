
//CREAR FORMULARIO
var miformulario=document.createElement("form")
miformulario.type="form"
miformulario.name="miformulario"
miformulario.style.position="absolute"
miformulario.style.top="50px"
miformulario.style.left="100px"
miformulario.style.backgroundImage = "url('PORTADA.png')";
miformulario.style.width="475px"
miformulario.style.height="550px"
miformulario.style.overflow="hidden"
document.body.style.overflow="hidden"
document.body.appendChild(miformulario)

//document.addEventListener('touchmove', controlraton, { passive: false });
//document.body.addEventListener('touchmove', controlraton, { passive: false });

var miformulariocontrol=document.createElement('input')
miformulariocontrol.type='button'
miformulariocontrol.name="miformulariocontrol"
miformulariocontrol.id='b2'
miformulariocontrol.style.position="absolute"
miformulariocontrol.style.top="600px"
miformulariocontrol.style.left="258px"
miformulariocontrol.style.backgroundImage = "url('PANELCONTROL.png')";
miformulariocontrol.style.width="156px"
miformulariocontrol.style.height="156px"
miformulariocontrol.style.border="3px solid "+"blue"
miformulariocontrol.style.visibility="hidden"
document.body.appendChild(miformulariocontrol)

var boton1 = document.createElement('input');
boton1.onclick=botonmovil; 
boton1.type = 'button';
boton1.id = 'b1';
boton1.value = "Iniciar en movil";
boton1.title = "Iniciar en un dispositivo movil";
boton1.style.color="yellow"
boton1.style.backgroundColor = "black"
boton1.style.fontSize=18
boton1.style.position="relative"
boton1.style.top="350px"
boton1.style.left="110px"
miformulario.appendChild(boton1);

var dispositivo=0
var mensaje=0
var r1=0
var r2=0
var r3=0
var r4=0
var sensibilidad=10
var vraton=1

//CONTROL BOTON MOVIL
function botonmovil(){
	boton1.style.visibility="hidden"
	dispositivo=1
	if (mensaje==0){
		mensaje=1;
		alert("!ATENCION! Solo use este juego si esta conectado a una red Wifi. El uso con datos puede incurrir en gastos")
		miformulariocontrol.ontouchmove=controlraton
		miformulariocontrol.ontouchstart=controlraton
		miformulario.ontouchstart=pulsaraton
		miformulario.ontouchmove=mueveraton
	}
	tecla1=1000;tecla2=1000;son=1;comenzar=setInterval(iniciojuego,200)
	miformulariocontrol.style.visibility="visible"
	vraton=0
}

function pulsaraton(e){
if (vraton==1){return}
e.preventDefault();
var touch=e.targetTouches[0]
r1=touch.clientY-miformulario.offsetTop
r2=touch.clientX-miformulario.offsetLeft
}

function mueveraton(e){
if (vraton==1){return}
e.preventDefault();
var we=e.targetTouches.length
var touch=e.targetTouches[we-1]
r3=touch.clientY-miformulario.offsetTop
r4=touch.clientX-miformulario.offsetLeft

if (r4>=(r2+sensibilidad)){dire[0]=1;r2=r4;return}
if (r3>=(r1+sensibilidad)){dire[0]=2;r1=r3;return}
if (r4<=(r2-sensibilidad)){dire[0]=3;r2=r4;return}
if (r3<=(r1-sensibilidad)){dire[0]=4;r1=r3;return}	
}



//CONTROL DEL TECLADO
var tecla1=69
var tecla2=101
document.onkeydown =  function teclado1(e){
if (e.keyCode==39){dire[0]=1;return}
if (e.keyCode==40){dire[0]=2;return}
if (e.keyCode==37){dire[0]=3;return}
if (e.keyCode==38){dire[0]=4;return}
if (e.keyCode==tecla1 || e.keyCode==tecla2){boton1.style.visibility="hidden";tecla1=1000;tecla2=1000;son=1;dispositivo=0;comenzar=setInterval(iniciojuego,200)}
}

document.onkeyup =  function teclado(e){
if (e.keyCode==39){dire[0]=1;return}
if (e.keyCode==40){dire[0]=2;return}
if (e.keyCode==37){dire[0]=3;return}
if (e.keyCode==38){dire[0]=4;return}
}


//CONTROL DEL RATON

function controlraton(e){
e.preventDefault();
var we=e.targetTouches.length
var touch=e.targetTouches[we-1]
ry=touch.clientY-miformulariocontrol.offsetTop
rx=touch.clientX-miformulariocontrol.offsetLeft
//ry=e.offsetY
//rx=e.offsetX
if (rx>=53 && rx<=103 && ry>=53 && ry<=103){return}
a1y=0
a1x=0
a2y=0
a2x=156
a3y=78
a3x=78
t0=(a1x-a3x)*(a2y-a3y)-(a1y-a3y)*(a2x-a3x)
t1=(a1x-rx)*(a2y-ry)-(a1y-ry)*(a2x-rx)
t2=(rx-a3x)*(a2y-a3y)-(ry-a3y)*(a2x-a3x)
t3=(a1x-a3x)*(ry-a3y)-(a1y-a3y)*(rx-a3x)
if (t0>=0 && t1>=0 && t2>=0 && t3>=0){dire[0]=4;return}

a1y=0
a1x=156
a2y=156
a2x=156
t0=(a1x-a3x)*(a2y-a3y)-(a1y-a3y)*(a2x-a3x)
t1=(a1x-rx)*(a2y-ry)-(a1y-ry)*(a2x-rx)
t2=(rx-a3x)*(a2y-a3y)-(ry-a3y)*(a2x-a3x)
t3=(a1x-a3x)*(ry-a3y)-(a1y-a3y)*(rx-a3x)
if (t0>=0 && t1>=0 && t2>=0 && t3>=0){dire[0]=1;return}

a1y=156
a1x=156
a2y=156
a2x=0
t0=(a1x-a3x)*(a2y-a3y)-(a1y-a3y)*(a2x-a3x)
t1=(a1x-rx)*(a2y-ry)-(a1y-ry)*(a2x-rx)
t2=(rx-a3x)*(a2y-a3y)-(ry-a3y)*(a2x-a3x)
t3=(a1x-a3x)*(ry-a3y)-(a1y-a3y)*(rx-a3x)
if (t0>=0 && t1>=0 && t2>=0 && t3>=0){dire[0]=2;return}

a1y=156
a1x=0
a2y=0
a2x=0
t0=(a1x-a3x)*(a2y-a3y)-(a1y-a3y)*(a2x-a3x)
t1=(a1x-rx)*(a2y-ry)-(a1y-ry)*(a2x-rx)
t2=(rx-a3x)*(a2y-a3y)-(ry-a3y)*(a2x-a3x)
t3=(a1x-a3x)*(ry-a3y)-(a1y-a3y)*(rx-a3x)
if (t0>=0 && t1>=0 && t2>=0 && t3>=0){dire[0]=3;return}
}


//CREAR OBJETOS
var punto=new Array(22);
for(i=0; i<22; i++) {punto[i] = new Array(22);}
for(i=0; i<22; i++){
for(j=0; j<22; j++){punto[i][j]=new Image();punto[i][j].src = "imagenes/PUNTO.png";punto[i][j].style.visibility = "hidden"}}

come=new Image()
come.src = "imagenes/COMEA.png"

come1=new Image()
come1.src = "imagenes/COMEB.png"

var comecanvas = document.createElement('canvas');
var comectx = comecanvas.getContext('2d');
comecanvas.style.height="25px"
comecanvas.style.width="25px"
comecanvas.style.position="absolute"
comecanvas.style.top="190px"
comecanvas.style.left="170px"
comecanvas.style.transform = "rotate(180deg)"

var fan=new Array(56)
for (i=1;i<=56;i++){
fan[i]=new Image()
fan[i].src = "imagenes/FAN"+i+".png"
}

var fancanvas=new Array(4)
var fanctx=new Array(4)
for (i=1;i<=4;i++){ 
fancanvas[i] = document.createElement('canvas');
fanctx[i] = fancanvas[i].getContext('2d');
fancanvas[i].style.height="25px"
fancanvas[i].style.width="25px"
fancanvas[i].style.position="absolute"
fancanvas[i].style.left=220+(i-1)*25+i*5+"px"
fancanvas[i].style.top="190px"
}

ready=new Image()
ready.src = "imagenes/READY.png"
ready.style.position="absolute"
ready.style.top="300px"
ready.style.left="195px"
ready.style.visibility = "hidden"

gameover=new Image()
gameover.src = "imagenes/GAMEOVER.png"
gameover.style.position="absolute"
gameover.style.top="300px"
gameover.style.left="195px"
gameover.style.visibility = "hidden"

var cartel=new Array(4)
for (i=1;i<=4;i++){
cartel[i]=new Image()
cartel[i].style.position="absolute"
cartel[i].style.top="200px"
cartel[i].src = "imagenes/ZCARTEL"+i+".png"
cartel[i].style.left=200+(i-1)*40+"px"
cartel[i].style.visibility = "hidden"
}

cartelfruta=new Image()
cartelfruta.style.position="absolute"
cartelfruta.style.top="0px"
cartelfruta.src = "imagenes/ZCARTEL1.png"
cartelfruta.style.left="0px"
cartelfruta.style.visibility = "hidden"

cartelvida=new Image()
cartelvida.style.position="absolute"
cartelvida.style.top="185px"
cartelvida.src = "imagenes/VIDA0.png"
cartelvida.style.left="25px"
cartelvida.style.visibility = "hidden"



var vida=new Array(3)
for (i=1;i<=3;i++){
vida[i]=new Image()
vida[i].style.position="absolute"
vida[i].style.top="220px"
vida[i].src = "imagenes/VIDA1.png"
vida[i].style.left=20+(i-1)*25+"px"
vida[i].style.visibility = "hidden"
}

var fruta=new Array(6)
for (i=1;i<=6;i++){
fruta[i]=new Image()
fruta[i].style.position="absolute"
fruta[i].style.top="300px"
fruta[i].src = "imagenes/FRUTA"+i+".png"
fruta[i].style.left="35px"
fruta[i].style.visibility = "hidden"
}

var muerte=new Array(10)
for (i=1;i<=10;i++){
muerte[i]=new Image()
muerte[i].style.position="absolute"
muerte[i].style.top="300px"
muerte[i].src = "imagenes/MUERTE"+i+".png"
muerte[i].style.left="225px"
muerte[i].style.visibility = "hidden"
}

cartelera=new Image()
cartelera.style.position="absolute"
cartelera.style.top="88px"
cartelera.src = "imagenes/CARTELERAFRUTA.png"
cartelera.style.left="10px"
cartelera.style.visibility = "hidden"


var etiqueta= document.createElement("text")
etiqueta.style.visibility = "hidden"
etiqueta.innerHTML = "<> Puntos: 00   <>"
etiqueta.type="text"
etiqueta.style.backgroundColor = "black"
etiqueta.style.textAlign="center"
etiqueta.style.color="yellow"
etiqueta.style.fontSize=31
etiqueta.style.height="35px"
etiqueta.style.width="475px"
etiqueta.style.position="absolute"
etiqueta.style.top="30px"
etiqueta.style.left="100px"

var etinivel= document.createElement("text")
etinivel.innerHTML = "Nivel: 1"
etinivel.type="text"
etinivel.style.backgroundColor = "black"
etinivel.style.visibility = "hidden"
etinivel.style.color="yellow"
etinivel.style.fontSize=21
etinivel.style.height="20px"
etinivel.style.width="85px"
etinivel.style.position="absolute"
etinivel.style.top="195px"
etinivel.style.left="390px"

//..........VARIBLES

//VARIBLES GENERALES
var cronogeneral
var puntuacion=0
var matrix = new Array(22);
for(var i=0; i<22; i++) {matrix[i] = new Array(22);}
var accion
var espera
var kcartel1
var rx
var ry
var dia1
var dia2


//VARIALBES
var controlflas
var controlrota
var posix = new Array(4)
var posiy = new Array(4)
var labex = new Array(4)
var labey = new Array(4)
var velox = new Array(4)
var veloy = new Array(4)
var dire = new Array(4)
var pderecha = new Array(4)
var pabajo = new Array(4)
var pizquierda = new Array(4)
var parriba = new Array(4)
var r=new Array(4)
var situ=new Array(4)
var peli
var cuentacome
var sonido=new Array(8)
for (i=1;i<=8;i++){sonido[i]= new Audio();sonido[i].src="sonidos/SONIDO"+i+".mp3"}
var kk
var nfruta
var cuentafruta
var fruy=new Array(4)
var frux=new Array(4)
var afruy=new Array(4)
var afrux=new Array(4)
var tfruy=new Array(4)
var tfrux=new Array(4)
var cf=new Array(4)
//VARIABLES FANTASMA
var nfan
var controlflasfan=new Array(4)
var ale
var z=new Array(4)
var n
var contadorhuir
var contadorini
var conta1
var conta2
var contadormuertefan
var nivel
var contadorvida
var pon
var velocidadfan
var son

function cargarvariables(){   
	for (i=0;i<=4;i++){fruy[i]=0;frux[i]=0;afruy[i]=0;afrux[i]=0;tfruy[i]=0;tfrux[i]=0;cf[i]=0}
	nfruta=0
	controlrota=1
	peli=1
	nfan=1
	ale=1
	n=1
	contadorhuir=1200
	contadorini=0
	conta1=3000
	conta2=500
	posix[1]=188;posiy[1]=265;velox[1]=0;veloy[1]=-1
	posix[2]=188+25;posiy[2]=265;velox[2]=0;veloy[2]=-1
	posix[3]=188+25*2;posiy[3]=265;velox[3]=0;veloy[3]=-1
	posix[4]=188+25*3;posiy[4]=265;velox[4]=0;veloy[4]=-1
	dire[1] = 4;dire[2] = 4;dire[3] = 4;dire[4] = 4;
	situ[1] = 0;situ[2] = 0;situ[3] = 0;situ[4] = 0;
	posix[0]=225
	posiy[0]=400
	velox[0]=1
	veloy[0]=0
	comecanvas.style.transform = "rotate(0deg)"
	dire[0]=1
	comecanvas.style.visibility = "hidden";
	for (i=1;i<=4;i++){fancanvas[i].style.visibility = "hidden";}
	etiqueta.style.visibility = "visible"
	etinivel.innerHTML = "Nivel: "+nivel
	etinivel.style.visibility = "visible"
	contadormuertefan=0
	cartelvida.style.visibility = "visible"
	for (i=1;i<=contadorvida;i++){vida[i].style.visibility = "visible";}
	if (matrix[12][9]==10){matrix[12][9]=2}	
} 







//INICIALIZAR VARIABLES GENERALES
for (i=0;i<=4;i++){fruy[i]=0;frux[i]=0;afruy[i]=0;afrux[i]=0;tfruy[i]=0;tfrux[i]=0;cf[i]=0}
rx=0
ry=0
accion=0
son=0
controlflas=1
controlflasfan[1] = 1;controlflasfan[2] = 0;controlflasfan[3] = 1;controlflasfan[4] = 0;
cuentacome=0
cuentafruta=25
pon=0
dia1=comecanvas.width
dia2=comecanvas.height
kk=0;llenar()
document.onclick=repitesonido
cargapagina =setTimeout(cargada,1500)

function cargada(){
clearInterval(cargapagina)
cronocome=setInterval(flascome,200)
cronofan=setInterval(flasfan,200)
juegonuevo()
} 


function repitesonido(){
if (son==0){sonido[8].play();sonido[8].loop=true;son=1}
}



//INICIAR MOVIMIENTO PANTALLA INICIAL
function juegonuevo(){
	vraton=1
	for (i=0;i<=4;i++){fruy[i]=0;frux[i]=0;afruy[i]=0;afrux[i]=0;tfruy[i]=0;tfrux[i]=0;cf[i]=0}
	accion=0
	miformulario.style.backgroundImage = "url('PORTADA.png')";
	gameover.style.visibility = "hidden"
	etiqueta.style.visibility = "hidden"
	for (i=1;i<=6;i++){fruta[i].style.visibility = "hidden";}
	for (i=1;i<=4;i++){cartel[i].style.visibility = "hidden";}
	cartelfruta.style.visibility = "hidden"
	cartelvida.style.visibility = "hidden"
	etinivel.style.visibility = "hidden"
	for(i=0; i<22; i++){
	for(j=0; j<22; j++){punto[i][j].style.visibility = "hidden"}}
	boton1.style.visibility="visible"
	miformulariocontrol.style.visibility = "hidden"
	dispositivo=0
	dire[0]=3
	comecanvas.style.transform = "rotate(180deg)"
	puntuacion=0
	etiqueta.innerHTML = "<> Puntos: 00   <>"
	sonido[8].play()
	sonido[8].loop=true
	velox[0]=-1
	posix[0]=170
	posiy[0]=190
	posiy[1]=190;velox[1]=-1;veloy[1]=0
	posiy[2]=190;velox[2]=-1;veloy[2]=0
	posiy[3]=190;velox[3]=-1;veloy[3]=0
	posiy[4]=190;velox[4]=-1;veloy[4]=0
	for (i=1;i<=4;i++){posix[i]=220+(i-1)*25+i*10;dire[i]=3;situ[i]=0}
	nivel=1
	contadorvida=3
	cuentacome=0
	velocidadfan=4
	comecanvas.style.visibility="visible"
	for (i=1;i<=4;i++){fancanvas[i].style.visibility="visible"}
	movipanta=setInterval(movipantallainicial,10)
}



function movipantallainicial(){
	
	switch (accion){
    	case 0:
    		for (i=1;i<=4;i++){
				posix[i]=posix[i]+velox[i]
				posiy[i]=posiy[i]+veloy[i]
				ponefan(i)
			}
			posix[0]=posix[0]+velox[0]
			ponecome()
			if (posix[0]<=-300){
			accion=1
			comecanvas.style.transform = "rotate(0deg)"
			for (i=1;i<=4;i++){velox[i]=1;dire[i]=1;situ[i]=2}
			}
    	break;
 		case 1:
    		for (i=1;i<=4;i++){
				posix[i]=posix[i]+velox[i]
				posiy[i]=posiy[i]+veloy[i]
				ponefan(i)
			}
			posix[0]=posix[0]+velox[0]
			ponecome()	
			if (posix[0]<=-370){for (i=1;i<=4;i++){velox[i]=0.6};velox[0]=1}
			for (i=1;i<=4;i++){
				if (Math.abs(posix[0]-posix[i])<=10 && cf[i]==0){
					situ[i]=4;sonido[5].play();
					cartel[i].style.position="absolute"
					cartel[i].style.top=posiy[0]-25+"px"
					cartel[i].style.left=posix[0]+"px"
					cartel[i].style.visibility="visible"
					fruy[i]=posiy[0]-25
					frux[i]=posix[0]
					afruy[i]=1
					afrux[i]=2
					if (posix[0]>225){afrux[i]=-1}
					tfruy[i]=0
					tfrux[i]=0
					cf[i]=1
					if (cf[0]==0){cf[0]=1;kcartel1 =setInterval(movicartelfan1,14)}
				}			
			}
			if (posix[4]>=650){
				accion=2;velox[0]=-1;dire[0]=3;posix[0]=510;
				comecanvas.style.transform = "rotate(180deg)";
				for (i=1;i<=4;i++){velox[i]=-1;situ[i]=1;dire[i]=3}
				for (i=0;i<=4;i++){fruy[i]=0;frux[i]=0;afruy[i]=0;afrux[i]=0;tfruy[i]=0;tfrux[i]=0;cf[i]=0}	
				fruy[0]=-300
				frux[0]=10	
				afruy[0]=1
				cartelera.style.position="absolute"
				cartelera.style.top=fruy[0]+"px"
				cartelera.style.left=frux[0]+"px"
				cartelera.style.visibility = "visible"
			}
	   	break;
 		case 2:
 		movicartelera()
    	break;
 		case 3:
		break;
 		case 4:
		tfruy[0]=tfruy[0]+.1+tfruy[0]/12
		if (tfruy[0]>=360){accion=5;tfruy[0]=0;afruy[0]=1;afrux[0]=1}
		cartelera.style.transform = "rotate("+tfruy[0]+"deg)"
		break;
 		case 5:
    	movicartelera1()
    	break;
 		case 6:
 		cartelera.style.visibility="hidden"
 		accion=0
		break;
	}
}

function espera1(){
	accion=4
	clearInterval(espera)
}

function movicartelera1(){
tfruy[0]=tfruy[0]+0.02
afruy[0]=(8-9.8*tfruy[0])*-1
fruy[0]=fruy[0]+afruy[0]
frux[0]=frux[0]+afrux[0]
cartelera.style.top=fruy[0]+"px"
cartelera.style.left=frux[0]+"px"			
if (fruy[0]>=550){accion=6}
}


function movicartelera(){
	tfruy[0]=tfruy[0]+0.005
	afruy[0]=(fruy[0]-88)*(-tfruy[0])
	fruy[0]=fruy[0]+afruy[0]
	frux[0]=frux[0]+afrux[0]
	cartelera.style.top=fruy[0]+"px"
	cartelera.style.left=frux[0]+"px"			
	if (fruy[0]>=87.5){accion=3;tfruy[0]=0;var espera =setTimeout(espera1,5000)}
}

function movicartelfan1(){
	for (a=1;a<=4;a++){
		if(cf[a]==1){
			tfruy[a]=tfruy[a]+0.02
			afruy[a]=(5-9.8*tfruy[a])*-1
			fruy[a]=fruy[a]+afruy[a]
			frux[a]=frux[a]+afrux[a]
			cartel[a].style.top=fruy[a]+"px"
			cartel[a].style.left=frux[a]+"px"
			if (fruy[a]>=525){cf[a]=0;cartel[a].style.visibility = "hidden"}
		}
	}
	if (cf[1]==0 && cf[2]==0 && cf[3]==0 && cf[4]==0){clearInterval(kcartel1);cf[0]=0}
}





function iniciojuego(){
clearInterval(comenzar)
clearInterval(movipanta)
clearInterval(kcartel1)
clearInterval(espera1)
sonido[8].pause()
sonido[8].loop=false
miformulario.style.backgroundImage = "url('FONDO.png')";
cartelera.style.visibility="hidden"
cartelera.style.transform = "rotate(0deg)"
cargarvariables()
kk=1;if (pon==0){llenar()}
for(i=1;i<=4;i++){cartel[i].style.visibility="hidden"}
ready.style.visibility = "visible"
sonido[7].play()
ponecome()
comecanvas.style.visibility="visible"
for(i=1;i<=4;i++){ponefan(i);fancanvas[i].style.visibility="visible"}
for(i=1;i<=6;i++){
	fruta[i].style.visibility="hidden";
	fruta[i].style.top="300px";
	fruta[i].style.left="35px"
}
fruta[1].style.visibility="visible"
cartelfruta.style.visibility="hidden"
var jugar =setTimeout(iniciarcronometros,5000);
}

function iniciarcronometros(){
//INICIAR CRONOMETROS	
ready.style.visibility="hidden"
cronoiniciocome=setInterval(iniciocome,velocidadfan*4-3)
cronoiniciofan=setInterval(iniciofan,velocidadfan)
}





//..........INICIO BUCLE STAR COMECOCOS.................
function iniciocome(){
if (peli>1){return}
mirapared(0)
controltunel(0)
mirapunto()
miracuentacome()
posix[0]=posix[0]+velox[0]
posiy[0]=posiy[0]+veloy[0]
ponecome()


}

function miracuentacome(){
	if(cuentacome==185){
		nivel++
		clearInterval(cronoiniciocome)
		clearInterval(cronoiniciofan)
		sonido[7].play()
		var finnivel =setTimeout(nuevonivel,5000);
		return
	}
	if (nfruta<6){ponerfruta()}
}

function ponerfruta(){
	if (cuentacome==cuentafruta){
		cuentafruta=cuentafruta+25
		if (posiy[0]==300 && posix[0]==225){return}
		if (matrix[12][9]==1 || matrix[12][9]==10){return}
		nfruta++
		fruta[nfruta].style.top="300px"
		fruta[nfruta].style.left="225px"
		matrix[12][9]=10
		if (nfruta<6){
			fruta[nfruta+1].style.top="300px"
			fruta[nfruta+1].style.left="35px"
			fruta[nfruta+1].style.visibility="visible"
		}
	}
}


function nuevonivel(){
pon=0;cuentacome=0;cuentafruta=cuentacome+25;controlnivel();iniciojuego()
}


function controlnivel(){
if (nivel<=5){velocidadfan=4;return}
if (nivel<=10){velocidadfan=3.5;return}
if (nivel<=15){velocidadfan=3;return}
if (nivel<=1000){velocidadfan=2;return}
}





function mirapared(a){
if ((posiy[a]/25) % 1 != 0){return}
if ((posix[a]/25) % 1 != 0){return}	
pderecha[a]=0;pabajo[a]=0;pizquierda[a]=0;parriba[a]=0;
convertir(posiy[a],posix[a],a)
if (matrix[labey[a]][labex[a]+1]==0){velox[a]=0;pderecha[a]=1}
if (matrix[labey[a]+1][labex[a]]==0){veloy[a]=0;pabajo[a]=1}
if (matrix[labey[a]][labex[a]-1]==0){velox[a]=0;pizquierda[a]=1}
if (matrix[labey[a]-1][labex[a]]==0){veloy[a]=0;parriba[a]=1}
r[a]=0
if (dire[a]==1 && pderecha[a]==0){velox[a]=1;veloy[a]=0;r[a]=1}
if (dire[a]==2 && pabajo[a]==0){veloy[a]=1;velox[a]=0;r[a]=1}
if (dire[a]==3 && pizquierda[a]==0){velox[a]=-1;veloy[a]=0;r[a]=1}
if (dire[a]==4 && parriba[a]==0){veloy[a]=-1;velox[a]=0;r[a]=1}

if (a==0 && r[a]==1){rotar(a)}
}

function rotar(b){
if (dire[b]==controlrota){return}
	switch (dire[b]){
    	case 1:
    	comecanvas.style.transform = "rotate(0deg)";controlrota=dire[b]
    	break;
 		case 2:
    	comecanvas.style.transform = "rotate(90deg)";controlrota=dire[b]
    	break;
 		case 3:
    	comecanvas.style.transform = "rotate(180deg)";controlrota=dire[b]
    	break;
 		case 4:
    	comecanvas.style.transform = "rotate(270deg)";controlrota=dire[b]
    	break;
	}
}

function controltunel(a){
if(posix[a]>=450){posix[a]=0;return}
if(posix[a]<=0){posix[a]=450;return}
}

function mirapunto(){
	if ((posiy[0]/25) % 1 != 0){return}
	if ((posix[0]/25) % 1 != 0){return}
	convertir(posiy[0],posix[0],0)
	if (matrix[labey[0]][labex[0]]==1){
		punto[labey[0]][labex[0]].style.visibility = "hidden"
		matrix[labey[0]][labex[0]]=2
		puntuacion=puntuacion+10
		etiqueta.innerHTML="<> Puntos: "+puntuacion+"   <>"
		cuentacome++
		sonido[1].play()
		return
	}
	if (matrix[labey[0]][labex[0]]==3){
		punto[labey[0]][labex[0]].style.visibility = "hidden"
		matrix[labey[0]][labex[0]]=2
		puntuacion=puntuacion+100
		etiqueta.innerHTML="<> Puntos: "+puntuacion+"   <>"
		contadorhuir=conta1
		contadorini=1
		for (i=1;i<=4;i++){
			if (situ[i]==1 || situ[i]==2 || situ[i]==3){situ[i]=2}
		}	
		cartel[1].style.position="absolute"
		cartel[1].style.top="303px"
		cartel[1].style.left="403px"
		cartel[1].style.visibility = "visible"
		sonido[3].play()
		clearInterval(cronoiniciocome)
		cronoiniciocome=setInterval(iniciocome,velocidadfan*4-3-3)
		return
	}
	if (matrix[labey[0]][labex[0]]==10){
		fruta[nfruta].style.visibility = "hidden"
		matrix[labey[0]][labex[0]]=2
		if (nfruta==6 && contadorvida<3){
			contadorvida++
			vida[contadorvida].style.visibility="visible"
		}
		cartelfruta.src = "imagenes/ZCARTEL"+nfruta+".png"
		cartelfruta.style.top=posiy[0]-25+"px"
		cartelfruta.style.left=posix[0]+"px"
		fruy[0]=posiy[0]-25
		frux[0]=posix[0]
		afruy[0]=1
		afrux[0]=1
		tfruy[0]=0
		tfrux[0]=0
		cartelfruta.style.visibility = "visible"
		puntuacion=puntuacion+(100*nfruta)
		etiqueta.innerHTML="<> Puntos: "+puntuacion+"   <>"
		sonido[3].play()
		cronofruta=setInterval(movicartelfruta,13)
		return
	}
}

function movicartelfruta(){
	tfruy[0]=tfruy[0]+0.02
	afruy[0]=(5-9.8*tfruy[0])*-1
	fruy[0]=fruy[0]+afruy[0]
	frux[0]=frux[0]+afrux[0]
	cartelfruta.style.top=fruy[0]+"px"
	cartelfruta.style.left=frux[0]+"px"
	if (fruy[0]>=525){
		cartelfruta.style.visibility = "hidden"
		clearInterval(cronofruta)
	}
}













function convertir(a,b,c){
labey[c]=Math.trunc(a/25)
labex[c]=Math.trunc(b/25)
}

function ponecome(){
comecanvas.style.top=posiy[0]+"px"
comecanvas.style.left=posix[0]+"px"
}

function flascome(){
comecanvas.width=comecanvas.width
if (controlflas==1){comectx.drawImage(come,0,0,dia1,dia2);controlflas=0}
else {comectx.drawImage(come1,0,0,dia1,dia2);controlflas=1}
}













//..........INICIO BUCLE STAR FANTASMAS.................
function iniciofan(){
if (situ[nfan]==0 || situ[nfan]==5){caja(nfan)}
miraparedfan(nfan)	
controltunel(nfan)
if (situ[nfan]==2 || situ[nfan]==3){comefan(nfan)}
if (situ[nfan]==1){muertecome([nfan])}
controlcontador(nfan)

posix[nfan]=posix[nfan]+velox[nfan]
posiy[nfan]=posiy[nfan]+veloy[nfan]
ponefan(nfan)



nfan++
if (nfan==5){nfan=1}

}


//...........FUNCIONES FANTASMAS

function miraparedfan(a){
	if (situ[a]==4){sonido[6].play()}
	if ((posiy[a]/25) % 1 != 0){return}
	if ((posix[a]/25) % 1 != 0){return}	

	switch (situ[a]){
    	case 1:// normal
			if (nfan==1){v=1;irpunto(a,posiy[0],posix[0],v)}
			if (nfan==2){v=1;irpunto(a,posiy[0],posix[0]-150,v)}
			if (nfan==3){v=1;irpunto(a,posiy[0],posix[0]+200,v)}
			if (nfan==4){v=1;
				if (Math.abs(posiy[0]-posiy[a])<=200 && Math.abs(posix[0]-posix[a])<=200){
					irpunto(a,posiy[0],posix[0],v)
				}
				else{
					iraleatorio(a,v)	
				}
			} 
		break;
		case 2:// huir 1
			v=1;irhuir(a,posiy[0],posix[0],v)
		break;
		case 3: //huir 2
			v=1;irhuir(a,posiy[0],posix[0],v)
		break;
		case 4: //muerte fantasma
		v=2.5;irpunto(a,200,225,v)
		if (posiy[a]==200 && posix[a]==225){situ[a]=5;metecaja(a)}	
		break;
	}
}

function irpunto(a,p1,p2,v){
	pderecha[a]=1;pabajo[a]=1;pizquierda[a]=1;parriba[a]=1;
	convertir(posiy[a],posix[a],a)
	if (matrix[labey[a]][labex[a]+1]==0){pderecha[a]=0}
	if (matrix[labey[a]+1][labex[a]]==0){pabajo[a]=0}
	if (matrix[labey[a]][labex[a]-1]==0){pizquierda[a]=0}
	if (matrix[labey[a]-1][labex[a]]==0){parriba[a]=0}
    w=pderecha[a]*8+pabajo[a]*4+pizquierda[a]*2+parriba[a]
	
	switch (w){
		case 3:
			if (dire[a]==1){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
    		if (dire[a]==2){dire[a]=3;veloy[a]=0;velox[a]=-v;return}
		break;
		case 5:
			return
		break;
		case 6: 
		   	if (dire[a]==4){dire[a]=3;veloy[a]=0;velox[a]=-v;return}
    		if (dire[a]==1){dire[a]=2;veloy[a]=v;velox[a]=0;return}
		break;
		case 9:
			if (dire[a]==2){dire[a]=1;veloy[a]=0;velox[a]=v;return}
    		if (dire[a]==3){dire[a]=4;veloy[a]=-v;velox[a]=0;return}		
		break;
		case 10:
			return
		break;
		case 12:
    		if (dire[a]==3){dire[a]=2;veloy[a]=v;velox[a]=0;return}
    		if (dire[a]==4){dire[a]=1;veloy[a]=0;velox[a]=v;return}
		break;
		case 7:
    		if (dire[a]==2){
    			if (p2<posix[a]){dire[a]=3;veloy[a]=0;velox[a]=-v;return}
				if (p2>=posix[a]){dire[a]=2;veloy[a]=v;velox[a]=0;return}
    		}
    		if (dire[a]==4){
    			if (p2<posix[a]){dire[a]=3;veloy[a]=0;velox[a]=-v;return}
				if (p2>=posix[a]){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
    		}
    		if (dire[a]==1){
    			if (p1<posiy[a]){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
				if (p1>=posiy[a]){dire[a]=2;veloy[a]=v;velox[a]=0;return}
    		}
		break;
		case 11:
        	if (dire[a]==1){
    			if (p1<posiy[a]){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
				if (p1>=posiy[a]){dire[a]=1;veloy[a]=0;velox[a]=v;return}
    		}
       	 	if (dire[a]==3){
    			if (p1<posiy[a]){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
				if (p1>=posiy[a]){dire[a]=3;veloy[a]=0;velox[a]=-v;return}
    		}
    		if (dire[a]==2){
    			if (p2<posix[a]){dire[a]=3;veloy[a]=0;velox[a]=-v;return}
				if (p2>=posix[a]){dire[a]=1;veloy[a]=0;velox[a]=v;return}
    		}
		break;
		case 13:
    		if (dire[a]==2){
    			if (p2>posix[a]){dire[a]=1;veloy[a]=0;velox[a]=v;return}
				if (p2<=posix[a]){dire[a]=2;veloy[a]=v;velox[a]=0;return}
    		}
    		if (dire[a]==4){
    			if (p2>posix[a]){dire[a]=1;veloy[a]=0;velox[a]=v;return}
				if (p2<=posix[a]){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
    		}
        	if (dire[a]==3){
    			if (p1<posiy[a]){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
				if (p1>=posiy[a]){dire[a]=2;veloy[a]=v;velox[a]=0;return}
    		}
		break;
		case 14:
        	if (dire[a]==1){
    			if (p1<=posiy[a]){dire[a]=1;veloy[a]=0;velox[a]=v;return}
				if (p1>posiy[a]){dire[a]=2;veloy[a]=v;velox[a]=0;return}
    		}
        	if (dire[a]==3){
    			if (p1<=posiy[a]){dire[a]=3;veloy[a]=0;velox[a]=-v;return}
				if (p1>posiy[a]){dire[a]=2;veloy[a]=v;velox[a]=0;return}
    		}
    		if (dire[a]==4){
    			if (p2>posix[a]){dire[a]=1;veloy[a]=0;velox[a]=v;return}
				if (p2<=posix[a]){dire[a]=3;veloy[a]=0;velox[a]=-v;return}
    		}
		break;
		case 15:
    		if (dire[a]==1){
    			if (p1==posiy[a]){dire[a]=1;veloy[a]=0;velox[a]=v;return}
    			if (p1<=posiy[a]){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
				if (p1>=posiy[a]){dire[a]=2;veloy[a]=v;velox[a]=0;return}
    		}
    		if (dire[a]==3){
    			if (p1==posiy[a]){dire[a]=3;veloy[a]=0;velox[a]=-v;return}
    			if (p1<=posiy[a]){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
				if (p1>=posiy[a]){dire[a]=2;veloy[a]=v;velox[a]=0;return}
    		}
    		if (dire[a]==2){
    			if (p2==posix[a]){dire[a]=2;veloy[a]=v;velox[a]=0;return}
    			if (p2<=posix[a]){dire[a]=3;veloy[a]=0;velox[a]=-v;return}
				if (p2>=posix[a]){dire[a]=1;veloy[a]=0;velox[a]=v;return}
    		}    
    		if (dire[a]==4){
    			if (p2==posix[a]){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
    			if (p2<=posix[a]){dire[a]=3;veloy[a]=0;velox[a]=-v;return}
				if (p2>=posix[a]){dire[a]=1;veloy[a]=0;velox[a]=v;return}
			}
		break;
    }
}

function iraleatorio(a,v){
	pderecha[a]=0;pabajo[a]=0;pizquierda[a]=0;parriba[a]=0;
	convertir(posiy[a],posix[a],a)
	if (matrix[labey[a]][labex[a]+1]==0){velox[a]=0;pderecha[a]=1}
	if (matrix[labey[a]+1][labex[a]]==0){veloy[a]=0;pabajo[a]=1}
	if (matrix[labey[a]][labex[a]-1]==0){velox[a]=0;pizquierda[a]=1}
	if (matrix[labey[a]-1][labex[a]]==0){veloy[a]=0;parriba[a]=1}
	n=1
	g=dire[a]-2
	if (g<=0){g=g+4}
	if (pderecha[a]==0 && g-1!=0){z[n]=1;n++}
	if (pabajo[a]==0 && g-2!=0){z[n]=2;n++}
	if (pizquierda[a]==0 && g-3!=0){z[n]=3;n++}
	if (parriba[a]==0 && g-4!=0){z[n]=4;n++}
	aleatorio(n-1)
	dire[a]=z[ale]
	if (dire[a]==1){velox[a]=v;veloy[a]=0;}
	if (dire[a]==2){veloy[a]=v;velox[a]=0;}
	if (dire[a]==3){velox[a]=-v;veloy[a]=0;}
	if (dire[a]==4){veloy[a]=-v;velox[a]=0;}
}

function aleatorio(h){
ale= Math.round(Math.random()*(h-1)+parseInt(1));
}

function irhuir(a,p1,p2,v){
	pderecha[a]=0;pabajo[a]=0;pizquierda[a]=0;parriba[a]=0;
	convertir(posiy[a],posix[a],a)
	if (matrix[labey[a]][labex[a]+1]==0){velox[a]=0;pderecha[a]=1}
	if (matrix[labey[a]+1][labex[a]]==0){veloy[a]=0;pabajo[a]=1}
	if (matrix[labey[a]][labex[a]-1]==0){velox[a]=0;pizquierda[a]=1}
	if (matrix[labey[a]-1][labex[a]]==0){veloy[a]=0;parriba[a]=1}

	if (dire[a]==1 || dire[a]==3){
		if (p1<posiy[a] && pabajo[a]==0){dire[a]=2;veloy[a]=v;velox[a]=0;return}
		if (p1>posiy[a] && parriba[a]==0){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
		if (p1==posiy[a] && pderecha[a]==0 && dire[a]==1){dire[a]=1;velox[a]=v;veloy[a]=0;return}
		if (p1==posiy[a] && pizquierda[a]==0 && dire[a]==3){dire[a]=3;velox[a]=-v;veloy[a]=0;return}
	}
	if (dire[a]==2 || dire[a]==4){
		if (p2<posix[a] && pderecha[a]==0){dire[a]=1;velox[a]=v;veloy[a]=0;return}
		if (p2>posix[a] && pizquierda[a]==0){dire[a]=3;velox[a]=-v;veloy[a]=0;return}
		if (p2==posix[a] && parriba[a]==0 && dire[a]==4){dire[a]=4;veloy[a]=-v;velox[a]=0;return}
		if (p2==posix[a] && pabajo[a]==0 && dire[a]==2){dire[a]=2;veloy[a]=v;velox[a]=0;return}			
	}
	n=1
	g=dire[a]-2
	if (g<=0){g=g+4}
	if (pderecha[a]==0 && g-1!=0){z[n]=1;n++}
	if (pabajo[a]==0 && g-2!=0){z[n]=2;n++}
	if (pizquierda[a]==0 && g-3!=0){z[n]=3;n++}
	if (parriba[a]==0 && g-4!=0){z[n]=4;n++}
	aleatorio(n-1)
	dire[a]=z[ale]
	if (dire[a]==1){velox[a]=v;veloy[a]=0;}
	if (dire[a]==2){veloy[a]=v;velox[a]=0;}
	if (dire[a]==3){velox[a]=-v;veloy[a]=0;}
	if (dire[a]==4){veloy[a]=-v;velox[a]=0;}
}


function comefan(a){
	if (Math.abs(posiy[0]-posiy[a])<=10 && Math.abs(posix[0]-posix[a])<=10){
		sonido[5].play()
		situ[a]=4;contadormuertefan++;puntuacion=puntuacion+contadormuertefan*100;
		etiqueta.innerHTML="<> Puntos: "+puntuacion+"   <>"
		cartel[contadormuertefan].style.position="absolute"
		cartel[contadormuertefan].style.top=posiy[0]-25+"px"
		cartel[contadormuertefan].style.left=posix[0]+"px"
		cartel[contadormuertefan].style.visibility="visible"
		if (contadormuertefan<=3){
			cartel[contadormuertefan+1].style.position="absolute"
			cartel[contadormuertefan+1].style.top="303px"
			cartel[contadormuertefan+1].style.left="403px"
			cartel[contadormuertefan+1].style.visibility="visible"
		}
		fruy[contadormuertefan]=posiy[0]-25
		frux[contadormuertefan]=posix[0]
		afruy[contadormuertefan]=1
		afrux[contadormuertefan]=1
		if (posix[0]>225){afrux[contadormuertefan]=-1}
		tfruy[contadormuertefan]=0
		tfrux[contadormuertefan]=0
		cf[contadormuertefan]=1
		if (cf[0]==0){cf[0]=1;kcartel =setInterval(movicartelfan,14)}
		
	}
}

function movicartelfan(){
	for (a=1;a<=contadormuertefan;a++){
		if(cf[a]==1){
			tfruy[a]=tfruy[a]+0.02
			afruy[a]=(3-9.8*tfruy[a])*-1
			fruy[a]=fruy[a]+afruy[a]
			frux[a]=frux[a]+afrux[a]
			cartel[a].style.top=fruy[a]+"px"
			cartel[a].style.left=frux[a]+"px"
			if (fruy[a]>=525){cf[a]=0;cartel[a].style.visibility = "hidden"}
		}
	}
	if (cf[1]==0 && cf[2]==0 && cf[3]==0 && cf[4]==0){clearInterval(kcartel);cf[0]=0}
}








function muertecome(a){
	if (peli>1){return}
	if (Math.abs(posiy[0]-posiy[a])<=10 && Math.abs(posix[0]-posix[a])<=10){
		comecanvas.style.visibility="hidden"
		velox[0]=0;veloy[0]=0
		fancanvas[a].style.visibility="hidden"
		for (i=1;i<=4;i++){velox[i]=0;veloy[i]=0}	
		clearInterval(cronoiniciocome)
		clearInterval(cronoiniciofan)
		verpelimuerte()
		pelimuerte=setInterval(verpelimuerte,150)
		sonido[2].play()
	}
}


function verpelimuerte(){
	if (peli==11){clearInterval(pelimuerte);
		if (contadorvida==1){gameover.style.visibility="visible"}
		var finnivel1 =setTimeout(nuevonivel1,3000);
		for(i=1;i<=10;i++){muerte[i].style.visibility="hidden";}
		return
	}
	if (peli>1){muerte[peli-1].style.visibility="hidden"}
	muerte[peli].style.top=posiy[0]+"px"
	muerte[peli].style.left=posix[0]+"px"
	muerte[peli].style.visibility="visible"
	peli++
}



function nuevonivel1(){
	vida[contadorvida].style.visibility="hidden"
	contadorvida--
	if (contadorvida>0){pon=1;controlnivel();iniciojuego()}
	if (contadorvida==0){pon=0;tecla1=69;tecla2=101;juegonuevo()}	
}





function metecaja(a){
	if (a==1){
		posix[a]=188;posiy[a]=265;velox[a]=0;veloy[a]=-1;dire[a] = 4;situ[a] = 5;
		return;
	}
	if (a==2){
		posix[a]=188+25;posiy[a]=265;velox[a]=0;veloy[a]=-1;dire[a] = 4;situ[a] = 5;
		return;
	}
	if (a==3){
		posix[a]=188+25*2;posiy[a]=265;velox[a]=0;veloy[a]=-1;dire[a] = 4;situ[a] = 5;
		return;
	}
	if (a==4){
		posix[a]=188+25*3;posiy[a]=265;velox[a]=0;veloy[a]=-1;dire[a] = 4;situ[a] = 5;
		return;
	}
}

function controlcontador(a){
	if (contadorini==0){return}
	contadorhuir--;sonido[4].play()
	if(contadorhuir<=conta2){if (situ[a]==2){situ[a]=3}}
	if (contadorhuir<=0){
		contadorini=0;contadorhuir=conta1
		clearInterval(cronoiniciocome)
		cronoiniciocome=setInterval(iniciocome,velocidadfan*4-3)
			for (i=1;i<=4;i++){
				cartel[i].style.visibility="hidden"
				contadormuertefan=0
				switch (situ[i]){
    			case 2:// huir 1
				situ[i]=1
				break;
				case 3:// huir 2
				situ[i]=1
				break;
				case 4: //muerte
				//situ[i]=1
				break;
				case 5: //muerte caja
				situ[i]=0
				break;
			}
		}
	}
}


function ponefan(a){
fancanvas[a].style.top=posiy[a]+"px"
fancanvas[a].style.left=posix[a]+"px"
}

function caja(a){
if(posiy[a]<=234){veloy[a]=1/a;dire[a]=2;return}
if(posiy[a]>=265){veloy[a]=-1/a;dire[a]=4;return}
if (situ[a]==5 && contadorini==0){situ[a]=0}
if (situ[a]==5){return}
var c= Math.round(Math.random()*(100-0)+parseInt(0));
	if (c==a){
		situ[a]=1;posix[a]=225;posiy[a]=200;
		switch (a){
    		case 1:
    		velox[a]=1;veloy[a]=0;dire[a]=1
    		break;
 			case 2:
    		velox[a]=-1;veloy[a]=0;dire[a]=3
    		break;
 			case 3:
    		velox[a]=1;veloy[a]=0;dire[a]=1
    		break;
 			case 4:
    		velox[a]=-1;veloy[a]=0;dire[a]=3
    		break;
		}	
	}
}

function flasfan(){
	for (i=1;i<=4;i++){
		switch (situ[i]){
    		case 0:
    		fancanvas[i].width=fancanvas[i].width
    		fanctx[i].drawImage(fan[(i-1)*8+(dire[i]*2)-1+controlflasfan[i]],0,0,dia1,dia2)
    		if (controlflasfan[i]==1){controlflasfan[i]=0}
    		else{controlflasfan[i]=1}
    		break;
 			case 1:
    		fancanvas[i].width=fancanvas[i].width
    		fanctx[i].drawImage(fan[(i-1)*8+(dire[i]*2)-1+controlflasfan[i]],0,0,dia1,dia2)
    		if (controlflasfan[i]==1){controlflasfan[i]=0}
    		else{controlflasfan[i]=1}    		
    		break;
 			case 2:
    		fancanvas[i].width=fancanvas[i].width
    		fanctx[i].drawImage(fan[(5-1)*8+(dire[i]*2)-1+controlflasfan[i]],0,0,dia1,dia2)
    		if (controlflasfan[i]==1){controlflasfan[i]=0}
    		else{controlflasfan[i]=1}
    		break;
 			case 3:
    		fancanvas[i].width=fancanvas[i].width
    		fanctx[i].drawImage(fan[(6-1)*8+(dire[i]*2)-1+controlflasfan[i]],0,0,dia1,dia2)
    		if (controlflasfan[i]==1){controlflasfan[i]=0}
    		else{controlflasfan[i]=1}
 			break;
 			case 4:
    		fancanvas[i].width=fancanvas[i].width
    		fanctx[i].drawImage(fan[(7-1)*8+(dire[i]*2)-1+controlflasfan[i]],0,0,dia1,dia2)
    		if (controlflasfan[i]==1){controlflasfan[i]=0}
    		else{controlflasfan[i]=1}
			break;
			case 5:
    		fancanvas[i].width=fancanvas[i].width
    		fanctx[i].drawImage(fan[(7-1)*8+(dire[i]*2)-1+controlflasfan[i]],0,0,dia1,dia2)
    		if (controlflasfan[i]==1){controlflasfan[i]=0}
    		else{controlflasfan[i]=1}
			break;
    	}
	}
}



//.............FUNCIONES GENERALES
function llenar(){
var f=new Array(22)
	f[0]="0000000000000000000"
	f[1]="0111111110111111110"
	f[2]="0300100010100010030"
	f[3]="0100100010100010010"
	f[4]="0111111111111111110"
	f[5]="0100101000001010010"
	f[6]="0111101110111011110"
	f[7]="0000100010100010000"
	f[8]="2220101111111010222"
	f[9]="0000101000001010000"
	f[10]="2111111022201111112"
	f[11]="0000101000001010000"
	f[12]="2220101111111010222"
	f[13]="0000101000001010000"
	f[14]="0111111110111111110"
	f[15]="0300100010100010030"
	f[16]="0110111111111110110"
	f[17]="0010101000001010100"
	f[18]="0111101110111011110"
	f[19]="0100000010100000010"
	f[20]="0111111111111111110"
	f[21]="0000000000000000000"

	var ax=5
	var ay=5
	var p=1
	for (i=0;i<22;i++){for (j=0;j<=18;j++){matrix[i][j]=f[i].charAt(j)}}

	for (i=0;i<22;i++){
	ax=5
	for (j=0;j<=18;j++){
		if (matrix[i][j]==1){
			punto[i][j].style.position="absolute"
			punto[i][j].style.top=ay+"px"
			punto[i][j].style.left=ax+"px"
			if (kk==0){miformulario.appendChild(punto[i][j]);}
			if (kk==1){punto[i][j].style.visibility="visible"}
		}
		if (matrix[i][j]==3){
			punto[i][j].src = "imagenes/DIAMANTE.png"
			punto[i][j].style.position="absolute"
			punto[i][j].style.top=ay+"px"
			punto[i][j].style.left=ax+"px"
			if (kk==0){miformulario.appendChild(punto[i][j]);}
			if (kk==1){punto[i][j].style.visibility="visible"}
		}
	ax=ax+25
	}
	ay=ay+25
	}
	if (kk==1){return}
	for (i=1;i<=6;i++){miformulario.appendChild(fruta[i]);}
	for (i=1;i<=4;i++){miformulario.appendChild(fancanvas[i]);}
	miformulario.appendChild(comecanvas);
	for (i=1;i<=10;i++){miformulario.appendChild(muerte[i]);}
	miformulario.appendChild(ready);	
	for (i=1;i<=4;i++){miformulario.appendChild(cartel[i]);}
	for (i=1;i<=3;i++){miformulario.appendChild(vida[i]);}
	miformulario.appendChild(cartelvida);
	document.body.appendChild(etiqueta);
	miformulario.appendChild(etinivel);
	miformulario.appendChild(gameover);
	miformulario.appendChild(cartelfruta);
	miformulario.appendChild(cartelera);
}



//..............FINAL..............




















 
 








