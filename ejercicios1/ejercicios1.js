let posXRojo = 100;
let posXRapido = 300;
let posXAzul = 500;
let velocidadRojo = 4;
let velocidadAzul = 1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  
  // Movimiento del círculo rojo (más rápido)
  posXRojo = posXRojo + velocidadRojo;
  if (posXRojo > width - 25 || posXRojo < 25) {
    velocidadRojo *= -1; // Cambiar dirección
  }
  
  // Movimiento del círculo azul
  posXAzul = posXAzul + velocidadAzul;
  if (posXAzul > width - 25 || posXAzul < 25) {
    velocidadAzul *= -1; // Cambiar dirección
  }

  // Dibujar círculo rojo
  fill(255, 0, 0);
  circle(posXRojo, height/2, 30);

  // Dibujar círculo azul
  fill(0, 0, 255);
  circle(posXAzul, height/2, 30);
}
