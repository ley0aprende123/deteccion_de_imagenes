img="";
estado="";
objetos=[];

function setup(){

canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML = "Estado : detectando objetos";
}

function modelLoaded(){
console.log("modelo cargado");
estado = true;
console.log(estado);
objectDetector.detect(img,gotResults)
}

function preload(){
img = loadImage('dog_cat.jpg');
}

function draw(){
image(img,0,0,640,420);

if(estado != ""){
    for(i=0; i < objetos.length; i++){
        document.getElementById("status").innerHTML = "Estado : objetos detectados";
        document.getElementById("numero").innerHTML = "Número de objetos detectados : " + objetos.length;
        fill("#FF0000");
        porcentaje = floor(objetos[i].confidence * 100);
text(objetos[i].label + " " + porcentaje + "%" ,objetos[i].x +15 ,objetos[i].y +15);
noFill();
stroke("#FF0000");
rect(objetos[i].x, objetos[i].y, objetos[i].width, objetos[i].height);


    }


}
/*
fill("#FF0000");
//
text("Dog",45,75);
noFill();
//stroke("#1CC2B3")
stroke("#FF0000");
rect(30,60,450,350);

fill("#FF0000");
//stroke("#7F5AC3")
text("Cat",320,120);
noFill();
stroke("#FF0000");
//rect(objetos[0].)
rect(300,90,4270,320);
*/

}

function gotResults(error,results){
    if (error){
        console.log(error);

    }
    console.log(results);
    objetos = results;
    console.log(objetos[0].x);
}